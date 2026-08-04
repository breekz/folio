/* ============================================================================
   FOLIO — a sonic identity for Bryant Castro's portfolio
   ----------------------------------------------------------------------------
   "I design the products people have to trust."

   One instrument, one room, one key. Every sound is the same felt-piano /
   soft-mallet voice (a sine fundamental + a triangle wood-body + a faint
   octave of air + a wooden contact transient), low-pass filtered and set in a
   small dark room. Warm, grounded, literate — it never sparkles, it settles.

   KEY: D major pentatonic (D E F# A B). HOME = D4 (293.66 Hz).
   SIGNATURE CELL: D → A → F#  (rise a fifth for confidence, settle on the
   third for warmth, always gravitate home to D).

   GRAMMAR: outbound / opening = rising · inbound / settling = descending to D.

   Synthesised live in the Web Audio API — no samples, no libraries, no assets.
   Sound is ON by default; a quiet icon (bottom-left) lets you turn it off.
   ============================================================================ */
(function () {
  'use strict';

  var EPS = 0.0001;                          // exponential ramps never hit 0
  var STORE = 'folio-sound-muted';

  /* ---- D major pentatonic, A4 = 440, equal temperament ------------------- */
  var A4 = 440;
  var mtof = function (m) { return A4 * Math.pow(2, (m - 69) / 12); };
  var ROOT = 62;                             // MIDI D4 (kept for reference)
  var N = {
    D2: mtof(38), A2: mtof(45), D3: mtof(50),
    D4: mtof(62), E4: mtof(64), Fs4: mtof(66), A4: mtof(69), B4: mtof(71),
    D5: mtof(74), Fs5: mtof(78), E5: mtof(76)
  };

  var rand = function (a, b) { return a + Math.random() * (b - a); };
  var clamp = function (v, lo, hi) { return Math.min(hi, Math.max(lo, v)); };

  function Folio() {
    this.ctx = null;
    this.greeted = false;                    // welcome plays once per load
    this.muted = this._loadPref();
    this._lastHover = 0;
    this._built = false;
  }

  /* ---- lazy graph: one context, one master chain, forever ---------------- */
  Folio.prototype._build = function () {
    if (this._built) return;
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    var ctx = this.ctx = new AC();

    this.master = ctx.createGain();
    this.master.gain.value = this.muted ? EPS : 1.0;

    this.shelf = ctx.createBiquadFilter();
    this.shelf.type = 'highshelf';
    this.shelf.frequency.value = 7500;
    this.shelf.gain.value = -7;

    this.sat = ctx.createWaveShaper();
    this.sat.curve = this._satCurve(0.3);
    this.sat.oversample = '4x';

    this.limiter = ctx.createDynamicsCompressor();
    this.limiter.threshold.value = -16;
    this.limiter.knee.value = 22;
    this.limiter.ratio.value = 4;
    this.limiter.attack.value = 0.003;
    this.limiter.release.value = 0.25;

    this.bus = ctx.createGain();

    this.verb = ctx.createConvolver();
    this.verb.buffer = this._makeIR(1.9, 3.2);
    this.verbReturn = ctx.createGain();
    this.verbReturn.gain.value = 1;

    // bus → sat → limiter → shelf → master → out   (dry)
    // <voice wet send> → verb → verbReturn → bus    (wet)
    this.bus.connect(this.sat);
    this.sat.connect(this.limiter);
    this.limiter.connect(this.shelf);
    this.shelf.connect(this.master);
    this.master.connect(ctx.destination);
    this.verb.connect(this.verbReturn);
    this.verbReturn.connect(this.bus);

    this._built = true;
  };

  Folio.prototype._satCurve = function (amount) {
    var n = 1024, c = new Float32Array(n), k = 1 + amount * 3;
    for (var i = 0; i < n; i++) {
      var x = (i / (n - 1)) * 2 - 1;
      c[i] = Math.tanh(x * k) / Math.tanh(k);
    }
    return c;
  };

  // impulse response: exponentially-decaying, low-passed noise = a dark room
  Folio.prototype._makeIR = function (seconds, decay) {
    var ctx = this.ctx, rate = ctx.sampleRate, len = Math.floor(rate * seconds);
    var buf = ctx.createBuffer(2, len, rate);
    for (var ch = 0; ch < 2; ch++) {
      var d = buf.getChannelData(ch), last = 0;
      for (var i = 0; i < len; i++) {
        var env = Math.pow(1 - i / len, decay);
        var white = Math.random() * 2 - 1;
        last = 0.82 * last + 0.18 * white;
        d[i] = last * env;
      }
    }
    return buf;
  };

  Folio.prototype._reap = function (node, atTime) {
    var ms = Math.max(0, (atTime - this.ctx.currentTime) * 1000) + 80;
    setTimeout(function () { try { node.disconnect(); } catch (e) {} }, ms);
  };

  /* ========================================================================
     THE VOICE — one felt-piano / soft-mallet note. Everything is this.
     ======================================================================== */
  Folio.prototype.voice = function (freq, opts) {
    if (!this.ctx) return;
    opts = opts || {};
    var ctx = this.ctx;
    var t0 = opts.when || ctx.currentTime;
    freq *= Math.pow(2, rand(-3, 3) / 1200);                       // humanise pitch
    var peak = clamp((opts.peak != null ? opts.peak : 0.5) * rand(0.94, 1.06), 0, 1);
    var a = opts.a != null ? opts.a : 0.010;
    var d = opts.d != null ? opts.d : 0.5;
    var pan = opts.pan || 0;
    var cutoff = opts.filter != null ? opts.filter : 2600;
    var wood = opts.wood != null ? opts.wood : 0.22;
    var air = opts.air != null ? opts.air : 0.06;
    var contact = opts.contact != null ? opts.contact : 0.15;
    var wet = opts.reverb != null ? opts.reverb : 0.10;
    var det = opts.detune != null ? opts.detune : 5;

    var out = ctx.createGain(); out.gain.value = 1;
    var panner = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
    if (panner) panner.pan.value = pan;

    var lp = ctx.createBiquadFilter();
    lp.type = 'lowpass'; lp.Q.value = 0.7;
    lp.frequency.setValueAtTime(Math.max(cutoff * 0.6, 300), t0);
    lp.frequency.linearRampToValueAtTime(cutoff + 400, t0 + 0.03);
    lp.frequency.exponentialRampToValueAtTime(Math.max(cutoff * 0.7, 300), t0 + d);

    var partials = [
      { type: 'sine',     mul: 1, g: 1.0,  det: -det },
      { type: 'sine',     mul: 1, g: 1.0,  det:  det },   // detuned pair = warmth
      { type: 'triangle', mul: 1, g: wood, det:  0   },   // wood body
      { type: 'sine',     mul: 2, g: air,  det:  0   }    // faint air
    ];
    var lastEnd = t0;
    for (var p = 0; p < partials.length; p++) {
      var pr = partials[p];
      var osc = ctx.createOscillator();
      osc.type = pr.type;
      osc.frequency.value = freq * pr.mul;
      osc.detune.value = pr.det;
      var g = ctx.createGain(); g.gain.value = EPS;
      var pk = Math.max(peak * pr.g * (pr.mul === 1 ? 0.5 : 1), EPS);
      g.gain.setValueAtTime(EPS, t0);
      g.gain.linearRampToValueAtTime(pk, t0 + a);
      g.gain.exponentialRampToValueAtTime(EPS, t0 + a + d);
      osc.connect(g); g.connect(lp);
      osc.start(t0); osc.stop(t0 + a + d + 0.05);
      lastEnd = t0 + a + d + 0.05;
    }

    if (contact > 0) {                                             // wooden knock
      var nb = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.02), ctx.sampleRate);
      var nd = nb.getChannelData(0);
      for (var i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;
      var click = ctx.createBufferSource(); click.buffer = nb;
      var bp = ctx.createBiquadFilter();
      bp.type = 'bandpass'; bp.frequency.value = 1600; bp.Q.value = 0.8;
      var cg = ctx.createGain(); cg.gain.value = EPS;
      cg.gain.setValueAtTime(EPS, t0);
      cg.gain.linearRampToValueAtTime(peak * contact, t0 + 0.001);
      cg.gain.exponentialRampToValueAtTime(EPS, t0 + 0.02);
      click.connect(bp); bp.connect(cg); cg.connect(lp);
      click.start(t0); click.stop(t0 + 0.03);
    }

    var tail = panner ? (lp.connect(panner), panner) : lp;
    tail.connect(out); out.connect(this.bus);
    if (wet > 0) {
      var send = ctx.createGain(); send.gain.value = wet;
      out.connect(send); send.connect(this.verb);
    }
    this._reap(out, lastEnd + 0.1);
  };

  // a soft foundation pad (the "trust drone") under the two big moments
  Folio.prototype.pad = function (freqs, opts) {
    if (!this.ctx) return;
    opts = opts || {};
    var ctx = this.ctx, t0 = opts.when || ctx.currentTime;
    var peak = opts.peak != null ? opts.peak : 0.10;
    var inT = opts.in != null ? opts.in : 0.25;
    var hold = opts.hold != null ? opts.hold : 0.4;
    var outT = opts.out != null ? opts.out : 0.9;
    var lp = ctx.createBiquadFilter();
    lp.type = 'lowpass'; lp.frequency.value = 900; lp.Q.value = 0.4;
    var g = ctx.createGain(); g.gain.value = EPS;
    g.gain.setValueAtTime(EPS, t0);
    g.gain.linearRampToValueAtTime(peak, t0 + inT);
    g.gain.setValueAtTime(peak, t0 + inT + hold);
    g.gain.exponentialRampToValueAtTime(EPS, t0 + inT + hold + outT);
    for (var i = 0; i < freqs.length; i++) {
      var o = ctx.createOscillator(); o.type = 'sine';
      o.frequency.value = freqs[i]; o.detune.value = i % 2 ? 4 : -4;
      o.connect(g); o.start(t0); o.stop(t0 + inT + hold + outT + 0.1);
    }
    lp.connect(this.bus);
    var send = ctx.createGain(); send.gain.value = 0.14;
    g.connect(lp); g.connect(send); send.connect(this.verb);
    this._reap(lp, t0 + inT + hold + outT + 0.2);
  };

  /* ========================================================================
     EVENTS — each is the signature cell (D·A·F#) seen from a new angle.
     ======================================================================== */

  // ● Arrival — the signature. D4 → A4 → F#4 over a D–A pad. Ends on the 3rd.
  Folio.prototype.welcome = function () {
    if (this.muted || !this.ctx) return;
    var t = this.ctx.currentTime + 0.02;
    this.pad([N.D2, N.A2, N.D3], { peak: 0.13, in: 0.2, hold: 0.5, out: 0.95, when: t });
    this.voice(N.D4, { peak: 0.72, a: 0.014, d: 0.85, filter: 2600, reverb: 0.12, pan: -0.12, when: t });
    this.voice(N.A4, { peak: 0.64, a: 0.014, d: 0.80, filter: 2600, reverb: 0.12, pan: 0.10, when: t + 0.14 });
    this.voice(N.Fs4,{ peak: 0.58, a: 0.016, d: 0.95, filter: 2400, reverb: 0.14, pan: 0.0,  when: t + 0.30 });
  };

  // ● Send — rising perfect fifth E4 → B4, dry & woody.
  Folio.prototype.send = function () {
    if (this.muted || !this.ctx) return;
    var t = this.ctx.currentTime;
    this.voice(N.E4, { peak: 0.34, a: 0.006, d: 0.16, filter: 3200, contact: 0.20, reverb: 0.02, pan: 0.16, when: t });
    this.voice(N.B4, { peak: 0.30, a: 0.006, d: 0.18, filter: 3200, contact: 0.14, reverb: 0.03, pan: 0.20, when: t + 0.05 });
  };

  // ● Reply lands — descending major third F#4 → D4 onto home. Resolved.
  Folio.prototype.replyLand = function () {
    if (this.muted || !this.ctx) return;
    var t = this.ctx.currentTime;
    this.voice(N.Fs4, { peak: 0.34, a: 0.012, d: 0.28, filter: 2200, reverb: 0.08, pan: -0.14, when: t });
    this.voice(N.D4,  { peak: 0.42, a: 0.012, d: 0.45, filter: 2100, reverb: 0.10, pan: -0.06, when: t + 0.12 });
  };

  // ● Chip / suggestion click — a firm warm press on the stable fifth (A4).
  Folio.prototype.chipClick = function () {
    if (this.muted || !this.ctx) return;
    this.voice(N.A4, { peak: 0.36, a: 0.003, d: 0.12, filter: 2800, contact: 0.22, reverb: 0.03 });
  };

  // ● Hover — a whisper of contact (E5). Wired only to the rare case cards.
  Folio.prototype.hover = function () {
    if (this.muted || !this.ctx) return;
    var now = (window.performance && performance.now()) || Date.now();
    if (now - this._lastHover < 120) return;
    this._lastHover = now;
    this.voice(N.E5, { peak: 0.11, a: 0.004, d: 0.07, filter: 3500, wood: 0.05,
                       air: 0.14, contact: 0.04, reverb: 0.06, pan: rand(-0.2, 0.2) });
  };

  // ● Panel opens — a warm drawer sliding open. Rising fifth D4→A4 on a pad.
  Folio.prototype.panelOpen = function () {
    if (this.muted || !this.ctx) return;
    var t = this.ctx.currentTime + 0.02;
    this.pad([N.D2, N.A2], { peak: 0.10, in: 0.26, hold: 0.25, out: 0.55, when: t });
    this.voice(N.D4, { peak: 0.40, a: 0.11, d: 0.55, filter: 1600, reverb: 0.18, pan: 0.16, when: t });
    this.voice(N.A4, { peak: 0.42, a: 0.10, d: 0.60, filter: 1900, reverb: 0.18, pan: 0.22, when: t + 0.16 });
  };

  // ● Panel closes — the mirror, softer. Descending fifth A4 → D4.
  Folio.prototype.panelClose = function () {
    if (this.muted || !this.ctx) return;
    var t = this.ctx.currentTime;
    this.voice(N.A4, { peak: 0.26, a: 0.02, d: 0.22, filter: 2400, reverb: 0.10, pan: 0.14, when: t });
    this.voice(N.D4, { peak: 0.30, a: 0.02, d: 0.30, filter: 1600, reverb: 0.10, pan: 0.06, when: t + 0.10 });
  };

  /* ---- mute / unmute — directional, and always audible as it switches ---- */
  Folio.prototype._muteSound = function (on) {
    if (!this.ctx) return;
    var t = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(t);
    this.master.gain.setValueAtTime(1.0, t);
    if (on) {  // unmute: rising D4 → F#4, brighter — "waking up"
      this.voice(N.D4,  { peak: 0.34, a: 0.008, d: 0.20, filter: 3000, reverb: 0.06, when: t });
      this.voice(N.Fs4, { peak: 0.32, a: 0.008, d: 0.24, filter: 3000, reverb: 0.06, when: t + 0.09 });
    } else {   // mute: descending F#4 → D4, second note muffled — "closing eyes"
      this.voice(N.Fs4, { peak: 0.30, a: 0.010, d: 0.18, filter: 2000, reverb: 0.06, when: t });
      this.voice(N.D4,  { peak: 0.26, a: 0.012, d: 0.26, filter: 1500, reverb: 0.08, when: t + 0.09 });
      this.master.gain.setValueAtTime(1.0, t + 0.42);
      this.master.gain.linearRampToValueAtTime(EPS, t + 0.52);
    }
  };

  /* ---- gesture unlock + preferences -------------------------------------- */
  Folio.prototype.unlock = function () {
    this._build();
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
  };

  Folio.prototype.setMuted = function (m) {
    this._build();
    this.unlock();
    this.muted = m;
    this._savePref(m);
    if (!this.ctx) { this._paint(); return; }
    var t = this.ctx.currentTime, g = this.master.gain;
    g.cancelScheduledValues(t);
    g.setValueAtTime(Math.max(g.value, EPS), t);
    if (m) {
      this._muteSound(false);                 // play the sign-off, then fall silent
    } else {
      g.linearRampToValueAtTime(1.0, t + 0.08);
      // if they never heard the welcome yet, greet; otherwise a small "on" nod
      var self = this;
      if (!this.greeted) { this.greeted = true; setTimeout(function () { self.welcome(); }, 60); }
      else this._muteSound(true);
    }
    this._paint();
  };

  Folio.prototype.toggle = function () { this.setMuted(!this.muted); };

  Folio.prototype._loadPref = function () {
    try { var v = localStorage.getItem(STORE); if (v !== null) return v === '1'; } catch (e) {}
    return false;                              // DEFAULT: sound ON
  };
  Folio.prototype._savePref = function (m) {
    try { localStorage.setItem(STORE, m ? '1' : '0'); } catch (e) {}
  };

  /* ---- welcome orchestration (works with the loading splash) -------------
     armWelcome(): guarantees the welcome fires the first moment audio is
       actually available — on the splash lift if the browser allows audio,
       otherwise on the visitor's first gesture (autoplay policy fallback).
     tryWelcomeNow(): called when the splash lifts; plays immediately if the
       context is already running.                                          */
  Folio.prototype._disarm = function () {
    if (!this._armed) return;
    var a = this._armed;
    a.gestures.forEach(function (e) { window.removeEventListener(e, a.gh); });
    a.soft.forEach(function (e) { window.removeEventListener(e, a.sh); });
    this._armed = null;
  };

  // Play the welcome, but ONLY if audio is actually running right now. Safe to
  // call with no gesture: it stays silent (and armed) if the browser hasn't
  // unlocked audio, so `greeted` is never spent on a silent attempt.
  Folio.prototype._greetIfRunning = function () {
    if (this.muted || this.greeted || !this.ctx || this.ctx.state !== 'running') return;
    this.greeted = true;
    this.welcome();
    this._disarm();
  };

  // Play the welcome from inside a user gesture (Safari only sounds if the first
  // note is scheduled synchronously in the gesture's call stack).
  Folio.prototype._greetNow = function () {
    if (this.muted || this.greeted || !this.ctx) return;
    this.greeted = true;
    this.welcome();
    this._disarm();
  };

  // Fallback: fire the welcome on the visitor's first input.
  //   • gestures — discrete inputs the browser accepts as "user activation":
  //     these are guaranteed to unlock audio, so we schedule the welcome
  //     synchronously (the Safari-safe way).
  //   • soft — moving the cursor / scrolling. These do NOT satisfy the autoplay
  //     rule on their own, but where audio is already permitted (site allow-
  //     listed, or Chrome media-engagement earned) the FIRST cursor move plays
  //     the welcome. Harmless (never spends `greeted`) where it's still blocked.
  Folio.prototype.armWelcome = function () {
    var self = this;
    var gestures = ['pointerdown', 'mousedown', 'keydown', 'touchstart', 'click'];
    var soft = ['pointermove', 'mousemove', 'wheel', 'scroll'];
    var gh = function () { self._build(); self.unlock(); self._greetNow(); };
    var sh = function () {
      self._build();
      if (!self.ctx) return;
      self.ctx.resume().then(function () { self._greetIfRunning(); }).catch(function () {});
      self._greetIfRunning();
    };
    gestures.forEach(function (e) { window.addEventListener(e, gh, { once: false, passive: true }); });
    soft.forEach(function (e) { window.addEventListener(e, sh, { once: false, passive: true }); });
    this._armed = { gestures: gestures, soft: soft, gh: gh, sh: sh };
  };

  // The site calls this the moment the loader clears — it AUTO-plays the welcome
  // wherever the browser permits it (e.g. Chrome once the site has any media
  // engagement, which localhost quickly earns). Where autoplay is blocked,
  // armWelcome() takes over on the first interaction.
  Folio.prototype.playWelcome = function () {
    if (this.muted || this.greeted) return;
    this._build();
    if (!this.ctx) return;
    var self = this;
    this.ctx.resume().then(function () { self._greetIfRunning(); }).catch(function () {});
    this._greetIfRunning();
  };

  /* ---- the toggle control — icon only, quiet, bottom-left ---------------- */
  Folio.prototype.mountControl = function () {
    var self = this;
    var wrap = document.createElement('button');
    wrap.id = 'sound-toggle';
    wrap.type = 'button';
    wrap.innerHTML =
      '<svg class="st-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
        'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        '<path class="spk" d="M11 5 6 9H2v6h4l5 4z" fill="currentColor" stroke="none"/>' +
        '<path class="wave" d="M15.5 8.5a5 5 0 0 1 0 7"/>' +
        '<path class="wave" d="M18.8 6a9 9 0 0 1 0 12"/>' +
        '<line class="xmark" x1="16" y1="9" x2="22" y2="15"/>' +
        '<line class="xmark" x1="22" y1="9" x2="16" y2="15"/>' +
      '</svg>';

    var css = document.createElement('style');
    css.textContent = [
      '#sound-toggle{position:fixed;left:20px;bottom:24px;z-index:120;width:38px;height:38px;',
        'display:grid;place-items:center;padding:0;border-radius:50%;cursor:pointer;',
        'background:rgba(255,255,255,.55);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);',
        'border:1px solid var(--line,#E2DACB);box-shadow:0 8px 24px -18px rgba(26,21,18,.4);opacity:.5;',
        'transition:opacity .25s var(--ease,ease),transform .25s var(--ease,ease),box-shadow .25s,border-color .25s}',
      '#sound-toggle:hover{opacity:1;transform:translateY(-1px);border-color:var(--ink,#1A1512)}',
      '#sound-toggle .st-ico{width:16px;height:16px;color:var(--coral,#FF5A36);overflow:visible}',
      '#sound-toggle .st-ico .wave{opacity:1;transition:opacity .22s ease}',
      '#sound-toggle .st-ico .xmark{opacity:0;color:var(--muted,#948B80);transition:opacity .22s ease}',
      '#sound-toggle.muted .st-ico{color:var(--muted,#948B80)}',
      '#sound-toggle.muted .st-ico .wave{opacity:0}',
      '#sound-toggle.muted .st-ico .xmark{opacity:1}'
    ].join('');
    document.head.appendChild(css);

    this._paint = function () {
      wrap.classList.toggle('muted', self.muted);
      wrap.setAttribute('aria-label', self.muted ? 'Turn sound on' : 'Turn sound off');
      wrap.title = self.muted ? 'Sound off' : 'Sound on';
    };
    this._paint();

    wrap.addEventListener('click', function () { self.toggle(); });
    document.body.appendChild(wrap);
  };

  /* ---- boot -------------------------------------------------------------- */
  var F = new Folio();
  window.FolioSound = F;

  function boot() {
    F.mountControl();
    F.armWelcome();          // the page's splash calls tryWelcomeNow() on lift
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
