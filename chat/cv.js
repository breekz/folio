/* ============================================================================
   FOLIO — CV panel for The Conversation
   ----------------------------------------------------------------------------
   A read-only render of the /foliodraft/cv layout, shown in the same right-
   docked slide panel the case studies use. Adds a "View CV" control next to the
   sound toggle. The editing feature from the app is intentionally NOT ported.
   Data is the seed CV built from the folio app's _data.ts (exact copy).
   ============================================================================ */
(function () {
  'use strict';

  var CV = {
  "identity": {
    "name": "Bryant Castro",
    "title": "Design Lead at Incode",
    "location": "Remote",
    "website": "iambri.xyz",
    "websiteUrl": "https://iambri.xyz",
    "email": "brycastro89@gmail.com",
    "phone": "(424) 415-9643",
    "linkedin": "https://www.linkedin.com/in/bryant-c/",
    "dribbble": "https://dribbble.com/Brico__",
    "cvStatus": "open to design leadership opportunities and advisory work."
  },
  "about": "A product designer and design leader with a decade of experience building teams and products for startups and corporations. My work has served tens of millions of users across Asia and Latin America — spanning fintech, crypto, travel, hospitality, and media — and I’ve helped multiple companies build and scale their design culture. Pragmatic and intense about the craft, I believe great products are built together.",
  "sections": [
    {
      "label": "Experience",
      "entries": [
        {
          "period": "Jan 2024 — Present",
          "title": "Experience Design Manager, Enterprise Products at Incode",
          "subtitle": "San Francisco, CA · Remote",
          "description": "Lead design for identity-verification (IDV) dashboard experiences.",
          "bullets": [
            "Built and led a team of product designers — hiring, mentoring, and performance management to scale team capability and design quality.",
            "Led product and design during M&A integration; contributed to the 90% gross-margin goal set for the first 100 days.",
            "Defined and led the creation of an AI-focused design function — establishing processes, workflows, and best practices to integrate AI into product design across the organization.",
            "Launched the first unified, accessible, scalable, and 100%-coded design system for enterprise products.",
            "Designed and enhanced the merchant dashboard — IDV metrics, flow building and management, user management, and payments.",
            "Defined foundations for a user-research practice based on archetypes and JTBD to shape enterprise UX."
          ]
        },
        {
          "period": "2022 — 2023",
          "title": "Product Design (NDA)",
          "subtitle": "Confidential clients · Shopify ecosystem + fintech",
          "description": "Product design across two confidential engagements — a Shopify-ecosystem post-purchase product and a mobile B2B2C fintech app.",
          "bullets": [
            "Launched a brand-new post-purchase product for a Shopify partner in record time — 2 months from ideation to live — owning the full process through UXQA.",
            "Introduced an audio-assistive interface that drove a 200% increase in fully-onboarded non-English, non-tech-savvy SMBs in India.",
            "Optimized a buy-now-pay-later flow (application, use, repayment) to an average of 5 new loans per day.",
            "Set up UX-metrics foundations for data-driven decisions — cutting design cost ~75% by prioritizing correctly and avoiding committee design."
          ]
        },
        {
          "period": "2021 — 2022",
          "title": "Director of UX, Consumer Products at Bitso",
          "subtitle": "Latin America’s largest crypto platform · Mexico City",
          "description": "Led consumer product design at Latin America’s largest crypto platform.",
          "bullets": [
            "Launched a localized app that drove crypto adoption in Colombia — 1M new customers within the first month.",
            "Championed three retention features — earning yields, recurrent deposits, and recurrent conversions — for a more engaged customer base.",
            "Built team rituals, processes, and vision that lifted cross-squad collaboration and saw two ICs promoted to Senior in a single quarter."
          ]
        },
        {
          "period": "2021",
          "title": "UX Manager at Casai",
          "subtitle": "Hospitality · Mexico City",
          "description": "Launched Casa Extras and Casai Club (4.8 CSAT); built a 20-component design system; optimized listing, registration, booking, and post-booking journeys through research.",
          "bullets": [
            "Implemented a design-ops model that raised UX standards, collaboration, and team growth — increasing milestones shipped per month.",
            "Launched Casai Extras and Casai Club during COVID, contributing to a 4.8 CSAT.",
            "Grew organic acquisition with a web UX strategy that lifted direct bookings and reduced reliance on OTAs — proving the brand’s perceived value.",
            "Instilled a talk-to-the-customer culture (interviews, surveys, usability tests) that informed business decisions like amenities and new-location acquisition."
          ]
        },
        {
          "period": "2020 — 2021",
          "title": "Lead Product Designer at Ascend Group (TrueMoney)",
          "subtitle": "Southeast Asia · Bangkok",
          "description": "Overhauled a phone top-up service serving 6M MAU; defined a B2C POS Android app for SME agents across Southeast Asia; led research; mentored three designers and a UX writer.",
          "bullets": [
            "Led a team of 3 designers in a complete overhaul of ‘phone top-up’ — one of the company’s top-3 customer-valued services, with 6M MAU.",
            "Defined a configurable B2C POS Android app for SME agents across multiple Southeast Asian countries.",
            "Supported product, commercial, and legal teams with a compliant end-to-end consumer wallet experience, enabling the permits and licenses needed to operate in the Philippines.",
            "Led consumer and business user-research studies that informed business, product, and design roadmaps.",
            "Partnered with senior stakeholders to define design foundations across projects and delegated to designers accordingly.",
            "Established a regional UX practice that increased cross-country contributor engagement and team morale."
          ]
        },
        {
          "period": "2018 — 2020",
          "title": "Sr. UX Designer at Wizeline",
          "subtitle": "Client-facing consulting · HCMC, VN & Guadalajara, MX",
          "description": "Design consulting across media, travel, and fintech for regional and global clients.",
          "bullets": [
            "Redesigned Thailand’s biggest sports media platform to support its exclusive Premier League broadcast.",
            "Defined and facilitated AirAsia’s first consumer-facing trip planner — a well-defined product in 4 days that won a 1-year engagement contract.",
            "Defined and validated POCs for early business validation for an Australian Series-C–funded startup.",
            "Worked with America’s 4th-largest media conglomerate on internal ops platforms (DevSecOps, VOD & distribution, ad ops).",
            "Delivered 9+ lectures across Latin America and Southeast Asia, plus training for two university cohorts in Mexico."
          ]
        },
        {
          "period": "2017 — 2018",
          "title": "Sr. UX/UI Designer at VML México",
          "subtitle": "Digital agency · Mexico City",
          "description": "Digital transformation for a Mexican bank serving low- to mid-income customers (~50% of the working population; 3M+ users).",
          "bullets": [
            "Brought design thinking into the bank’s product-development process.",
            "Collaborated on 6+ web and mobile products — micro-loans, personal banking, money transfer, and POS payments.",
            "Defined POCs for instant-loan application and approval on kiosks and ATMs."
          ]
        },
        {
          "period": "2016 — 2017",
          "title": "Designer at A24",
          "subtitle": "New York City",
          "description": "Contributed to some of A24’s most iconic movie posters and the digital assets derived from them."
        },
        {
          "period": "2014 — 2016",
          "title": "Designer at Brooklyn Digital Foundry",
          "subtitle": "New York City",
          "description": "Brand and digital design for architecture, media, and cultural clients.",
          "bullets": [
            "Built the brand for OMA’s first residential building, 121 Lex — the foundation for its digital, ephemera, and showroom experiences.",
            "Contributed to the Netflix Media Center web redesign.",
            "Designed the Olympic Day website for the International Olympic Committee.",
            "Created identity and digital experiences for the Business & Sustainable Development Commission and The Civic SF."
          ]
        }
      ]
    },
    {
      "label": "Speaking & Lectures",
      "entries": [
        {
          "period": "2022",
          "title": "Improving UX during Digital Transformation",
          "subtitle": "ADPList × Lollipop · Ho Chi Minh, Vietnam"
        },
        {
          "period": "2021",
          "title": "¡Atrévete! — Latinx Changemakers",
          "subtitle": "General Assembly · Remote"
        },
        {
          "period": "2019",
          "title": "Design Sprint 2.0 · Intro to Lean UX · Laws of UX for Engineers",
          "subtitle": "UXVN Festival · DevDay Da Nang · RMIT University, Vietnam"
        },
        {
          "period": "2018 — 2019",
          "title": "Creative Conflict Resolution · Design Spring · What is UX?",
          "subtitle": "Wizeline Academy · ITESM Guadalajara · Hola Code, CDMX"
        }
      ]
    },
    {
      "label": "Recognition & Community",
      "entries": [
        {
          "period": "2022",
          "title": "ADPList — Top 100 Mentor & Top 5 LatAm Mentor",
          "subtitle": "Mentorship",
          "description": "Mentored designers from 32+ countries for 4,000+ hours — frameworks and on-demand 1:1s for growth, career changes, and job hunting."
        },
        {
          "period": "2022",
          "title": "Mentor at CoLab",
          "description": "Guided two pods of aspiring PMs, developers, and designers through an 8-week hands-on product-development process to ship their first real product."
        }
      ]
    },
    {
      "label": "Personal Projects",
      "entries": [
        {
          "period": "Ongoing",
          "title": "UXplaybook.org — Product Builder",
          "description": "Co-created an educational course on navigating the hiring process; work as a product generalist identifying, designing, and launching products."
        },
        {
          "period": "2022 — Present",
          "title": "Swiss Army Man — Stealth SaaS",
          "description": "Closing the gap between “edufluencers” and their audiences with a best-in-class entry-point experience and a brand that humanizes small tech companies."
        }
      ]
    },
    {
      "label": "Education",
      "entries": [
        {
          "period": "2016",
          "title": "Interior Design and Architecture Studies",
          "subtitle": "The New School, New York, NY"
        },
        {
          "period": "2016",
          "title": "Graphic Design",
          "subtitle": "Shillington Education, New York, NY"
        },
        {
          "period": "",
          "title": "Photography",
          "subtitle": "Santa Monica College"
        },
        {
          "period": "",
          "title": "General Education",
          "subtitle": "Riverside City College"
        },
        {
          "period": "2015 — 2018",
          "title": "Courses & continuing education",
          "subtitle": "General Assembly · PuntoLab · CENART",
          "bullets": [
            "Information Architecture; Trends & Best Practices in E-Commerce — General Assembly, NY",
            "User Research & Jobs-to-Be-Done; Design Research & Tools for Exploration; Chatbot Personality — PuntoLab, MX",
            "Plexic: IoT and Science Fiction — CENART, MX"
          ]
        }
      ]
    }
  ],
  "skills": [
    {
      "group": "Design",
      "items": [
        "UX Design",
        "UI Design",
        "Product Design",
        "Service Design",
        "Brand Design",
        "Web Design"
      ]
    },
    {
      "group": "Research & Strategy",
      "items": [
        "UX Research",
        "User Testing",
        "Facilitation",
        "Design Thinking",
        "Product Strategy",
        "OKRs"
      ]
    },
    {
      "group": "Leadership",
      "items": [
        "Team leadership",
        "Mentorship",
        "Hiring",
        "Design culture",
        "Teaching"
      ]
    },
    {
      "group": "Tools & Platforms",
      "items": [
        "Figma",
        "Sketch",
        "Miro",
        "Mural",
        "Zeplin",
        "Adobe (Illustrator, Photoshop)",
        "Web",
        "iOS",
        "Android",
        "Shopify"
      ]
    },
    {
      "group": "Domains",
      "items": [
        "Fintech",
        "Mobile Banking",
        "Cryptocurrency",
        "E-commerce",
        "Design Systems",
        "SaaS"
      ]
    },
    {
      "group": "Languages",
      "items": [
        "English (native/bilingual)",
        "Spanish (native/bilingual)"
      ]
    },
    {
      "group": "Additional (resume)",
      "items": [
        "Wireframing",
        "Prototyping",
        "Usability Testing",
        "Interaction Design",
        "User-Centered Design",
        "User Flows",
        "Personas",
        "Journey Mapping",
        "Heuristic Evaluation",
        "A/B Testing",
        "Accessibility",
        "Mobile Design",
        "Responsive Design",
        "Agile",
        "Lean UX",
        "Data-Driven Design",
        "Roadmapping",
        "Team Management",
        "Strategic Planning",
        "Project Management",
        "Cross-Functional Collaboration",
        "Stakeholder Management",
        "MVP",
        "Innovation",
        "Process Improvement",
        "Business Acumen",
        "Problem Solving",
        "Decision Making",
        "Performance Metrics",
        "Behavioural Research",
        "User Interviews",
        "Surveys",
        "Focus Groups",
        "Quantitative Research",
        "Qualitative Research",
        "Contextual Inquiry",
        "Data Analysis",
        "Competitive Analysis",
        "Market Research",
        "Usability Metrics",
        "Research Synthesis",
        "Diary Studies",
        "Task Analysis",
        "Usability Reports"
      ]
    }
  ]
};

  var esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  };
  var ARROW =
    '<svg class="cv-arrow" width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">' +
    '<path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function entryHTML(e) {
    var out = '<div class="cv-row"><div class="cv-period">' + esc(e.period) + '</div><div class="cv-entry">';
    out += '<h4>' + esc(e.title) + '</h4>';
    if (e.subtitle) out += '<p class="cv-sub">' + esc(e.subtitle) + '</p>';
    if (e.description) out += '<p class="cv-desc">' + esc(e.description) + '</p>';
    if (e.bullets && e.bullets.length) {
      out += '<ul class="cv-bullets">';
      for (var i = 0; i < e.bullets.length; i++)
        out += '<li><span class="cv-dot" aria-hidden="true"></span><span>' + esc(e.bullets[i]) + '</span></li>';
      out += '</ul>';
    }
    return out + '</div></div>';
  }

  function renderCV() {
    var id = CV.identity;
    var h = '<div class="folio-cv">';

    // identity — name + email only
    h += '<div class="cv-id"><h1>' + esc(id.name) + '</h1>' +
         (id.email ? '<a class="cv-email" href="mailto:' + esc(id.email) + '">' + esc(id.email) + '</a>' : '') +
         '</div>';

    // about
    h += '<section class="cv-sec"><h3>About</h3><p class="cv-body">' + esc(CV.about) + '</p></section>';

    // sections
    for (var s = 0; s < CV.sections.length; s++) {
      var sec = CV.sections[s];
      h += '<section class="cv-sec"><h3>' + esc(sec.label) + '</h3><div class="cv-rows">';
      for (var e = 0; e < sec.entries.length; e++) h += entryHTML(sec.entries[e]);
      h += '</div></section>';
    }

    // skills
    h += '<section class="cv-sec"><h3>Skills</h3><div class="cv-rows">';
    for (var g = 0; g < CV.skills.length; g++)
      h += '<div class="cv-row"><div class="cv-period">' + esc(CV.skills[g].group) + '</div>' +
           '<p class="cv-body">' + esc((CV.skills[g].items || []).join(', ')) + '</p></div>';
    h += '</div></section>';

    // contact
    h += '<section class="cv-sec"><h3>Contact</h3><div class="cv-contact">';
    if (id.email) h += '<a href="mailto:' + esc(id.email) + '">' + esc(id.email) + '</a>';
    if (id.linkedin) h += '<a href="' + esc(id.linkedin) + '" target="_blank" rel="noreferrer">LinkedIn' + ARROW + '</a>';
    if (id.dribbble) h += '<a href="' + esc(id.dribbble) + '" target="_blank" rel="noreferrer">Dribbble' + ARROW + '</a>';
    h += '</div></section>';

    return h + '</div>';
  }

  // Download the CV as a PDF via the browser's print dialog, isolating the CV.
  function downloadPDF() {
    document.body.classList.add('cv-print');
    var cleanup = function () { document.body.classList.remove('cv-print'); };
    window.addEventListener('afterprint', function h() { window.removeEventListener('afterprint', h); cleanup(); });
    setTimeout(function () { window.print(); setTimeout(cleanup, 1200); }, 20);
  }

  // open the CV in the shared right-docked panel (reuses the case-study overlay)
  function openCV() {
    var overlay = document.getElementById('overlay'), sheet = document.getElementById('sheet');
    if (!overlay || !sheet) return;
    sheet.innerHTML =
      '<div class="close"><b>CV</b><span class="cv-actions">' +
      '<button class="cv-dl" type="button">Download PDF</button>' +
      '<button data-close>Close ✕</button></span></div>' + renderCV();
    var dl = sheet.querySelector('.cv-dl');
    if (dl) dl.onclick = downloadPDF;
    overlay.classList.add('on');
    document.documentElement.classList.add('panel-open');
    if (window.FolioSound) FolioSound.panelOpen();
    var closeBtn = sheet.querySelector('[data-close]');
    if (closeBtn) closeBtn.onclick = function () {
      if (typeof window.closeCase === 'function') window.closeCase();
      else {
        overlay.classList.remove('on');
        document.documentElement.classList.remove('panel-open');
        if (window.FolioSound) FolioSound.panelClose();
      }
    };
    overlay.scrollTop = 0;
  }

  function mount() {
    if (!CV || document.getElementById('cv-btn')) return;

    var css = document.createElement('style');
    css.textContent = [
      /* the View-CV control — icon + text, sits next to the sound toggle */
      '#cv-btn{position:fixed;top:18px;right:64px;z-index:120;display:flex;align-items:center;gap:8px;',
        'height:38px;padding:0 15px 0 12px;border-radius:100px;cursor:pointer;font-family:inherit;',
        'font-size:12px;font-weight:500;letter-spacing:-.005em;color:var(--ink,#1A1512);',
        'background:rgba(255,255,255,.72);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);',
        'border:1px solid var(--line,#E2DACB);box-shadow:0 8px 24px -18px rgba(26,21,18,.4);',
        'transition:transform .25s var(--ease,ease),box-shadow .25s,border-color .25s,background .25s,opacity .3s}',
      '#cv-btn:hover{transform:translateY(-1px);border-color:var(--ink,#1A1512);box-shadow:0 14px 30px -20px rgba(26,21,18,.5)}',
      '#cv-btn svg{width:15px;height:15px;color:var(--coral,#FF5A36);flex:none}',
      '@media(max-width:420px){#cv-btn .cv-btn-t{display:none}#cv-btn{padding:0 11px}}',
      /* both floating controls hide while a panel is open (they live top-right, where the panel slides in) */
      'html.panel-open #sound-toggle,html.panel-open #cv-btn{opacity:0;pointer-events:none}',
      /* Download button in the CV panel header (primary, filled) */
      '.sheet .close .cv-actions{display:flex;align-items:center;gap:8px}',
      '.sheet .close button.cv-dl{background:var(--ink,#1A1512);color:var(--paper,#F4EFE3);border-color:var(--ink,#1A1512)}',
      '.sheet .close button.cv-dl:hover{opacity:.9;background:var(--ink,#1A1512);color:var(--paper,#F4EFE3)}',
      /* CV print isolation — only the CV prints */
      '@page{margin:1.6cm}',
      '@media print{',
        'body.cv-print{padding-right:0 !important}',
        'body.cv-print>*:not(#overlay){display:none !important}',
        'body.cv-print #overlay{position:static !important;transform:none !important;width:auto !important;max-width:none !important;background:#fff !important;box-shadow:none !important;border:none !important;overflow:visible !important}',
        'body.cv-print #overlay .close{display:none !important}',
        'body.cv-print .folio-cv{max-width:720px;padding:0}',
      '}',

      /* ---- the CV itself (read-only render of /foliodraft/cv) ---- */
      '.folio-cv{max-width:600px;margin:0 auto;padding:clamp(28px,5vw,52px) clamp(24px,5vw,60px) 90px;',
        'font-size:14px;line-height:1.65;color:#111}',
      '.folio-cv .cv-id{display:flex;flex-direction:column;gap:4px;margin-bottom:8px}',
      '.folio-cv .cv-email{color:#555;text-decoration:none;width:fit-content}',
      '.folio-cv .cv-email:hover{text-decoration:underline}',
      '.folio-cv .cv-avatar{width:72px;height:72px;flex:none;border-radius:50%;display:grid;place-items:center;',
        'color:#fff;font-weight:600;font-size:24px;background:linear-gradient(135deg,#334155,#0f172a);',
        'box-shadow:0 4px 12px -4px rgba(0,0,0,.35)}',
      '.folio-cv .cv-id-main{min-width:0;flex:1}',
      '.folio-cv h1{font-family:inherit;font-size:24px;font-weight:400;letter-spacing:-.02em;color:#111;line-height:1.15}',
      '.folio-cv .cv-title{color:#555;margin-top:2px}',
      '.folio-cv .cv-meta{display:flex;flex-wrap:wrap;align-items:center;gap:4px 12px;color:#999;margin-top:4px}',
      '.folio-cv .cv-meta a{color:inherit;text-decoration:none}',
      '.folio-cv .cv-meta a:hover{text-decoration:underline}',
      '.folio-cv .cv-arrow{margin-left:2px;color:#999;vertical-align:baseline;display:inline-block}',
      '.folio-cv .cv-avail{margin:34px 0;border:1px solid #e5e5e5;border-radius:24px;padding:15px 24px;color:#555}',
      '.folio-cv .cv-avail b{color:#111;font-weight:400}',
      '.folio-cv .cv-sec{margin:34px 0}',
      '.folio-cv .cv-sec h3{color:#999;font-weight:400;font-size:14px;margin-bottom:20px}',
      '.folio-cv .cv-body{color:#555}',
      '.folio-cv .cv-rows{display:flex;flex-direction:column;gap:24px}',
      '.folio-cv .cv-row{display:flex;flex-direction:column;gap:4px}',
      '.folio-cv .cv-period{color:#999;flex:none}',
      '@media(min-width:640px){.folio-cv .cv-row{flex-direction:row}.folio-cv .cv-period{width:110px;margin-right:32px}}',
      '.folio-cv .cv-entry{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}',
      '.folio-cv .cv-entry h4{font-weight:500;color:#111}',
      '.folio-cv .cv-sub{color:#555}',
      '.folio-cv .cv-desc{color:#555;margin-top:8px}',
      '.folio-cv .cv-bullets{list-style:none;padding:0;margin:8px 0 0;display:flex;flex-direction:column;gap:6px}',
      '.folio-cv .cv-bullets li{display:flex;gap:8px;color:#555;line-height:1.6}',
      '.folio-cv .cv-dot{margin-top:9px;width:4px;height:4px;flex:none;border-radius:50%;background:#bbb}',
      '.folio-cv .cv-contact{display:flex;flex-direction:column;gap:8px}',
      '.folio-cv .cv-contact a{width:fit-content;color:#111;text-decoration:none}',
      '.folio-cv .cv-contact a:hover{text-decoration:underline}'
    ].join('');
    document.head.appendChild(css);

    var btn = document.createElement('button');
    btn.id = 'cv-btn';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'View CV');
    btn.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" ' +
        'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/>' +
        '<path d="M14 3v5h5"/><path d="M9 13h6M9 17h6"/></svg>' +
      '<span class="cv-btn-t">View CV</span>';
    btn.addEventListener('click', openCV);
    document.body.appendChild(btn);
  }

  window.FolioCV = { open: openCV };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
