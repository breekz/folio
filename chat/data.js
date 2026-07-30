/* =============================================================================
   FOLIO — shared content layer for the three portfolio explorations.
   window.FOLIO is consumed by film.html, conversation.html, atlas.html.

   SOURCE OF TRUTH: app/foliodraft/_data.ts (real Casai + CV), the rebrand deck
   (public/deck-rebrand-motion.html), and Bryant's résumé / summary deck.

   NUMBERS: scope metrics follow the current rebrand voice (40M+ / 10+ / 4 / 4).
   Anything Bryant still needs to confirm is tagged  // VERIFY  — safe to edit.
   ========================================================================== */
window.FOLIO = {

  /* ---- identity ------------------------------------------------------- */
  identity: {
    name: 'Bryant Castro',
    initials: 'BC',
    role: 'Design Leader',
    title: 'Experience Design Manager · Incode',        // VERIFY current title
    location: 'Remote · MX / US',
    tagline: 'I design the products people <em>have to</em> trust.',
    domains: 'Money · Identity · Travel · Home',
    lead: 'A decade making complex, high-stakes products feel effortless — and building the teams that keep them that way.',
    bio: 'I’m Bryant Castro, a design leader with over a decade building teams and products across fintech, crypto, travel, hospitality, and media. My work has reached tens of millions of people across Asia and Latin America, and I’ve helped multiple companies shape and scale their design culture.',
    email: 'brycastro89@gmail.com',
    website: 'iambri.xyz',
    websiteUrl: 'https://iambri.xyz',
    linkedin: 'https://www.linkedin.com/in/bryant-c/',
    dribbble: 'https://dribbble.com/Brico__',
    headshot: 'deck-life-assets/headshot.jpg',
    availability: 'Open to design leadership roles and advisory work.',
  },

  /* ---- the thesis ----------------------------------------------------- */
  thesis: {
    line: 'I design the products people <em>have to</em> trust.',
    proposition: 'Hire a designer, get better screens. Hire me, get a <em>design organization.</em>',
    anatomy: ['Honest', 'Legible', 'Resilient'],   // overlap = Trust
    anatomyBody: 'A product earns trust when it’s honest about what it does, legible under pressure, and resilient when the stakes are real. That overlap is the whole job.',
  },

  /* ---- scope metrics (the "proven at scale" strip) -------------------- */
  scope: [
    { value: '40M+', label: 'People reached',      note: 'Across Asia & Latin America' },   // VERIFY (20–40M across sources)
    { value: '10+',  label: 'Years leading design', note: 'IC → manager → director' },
    { value: '4',    label: 'Design teams built',   note: 'Hired, scaled, and mentored' },   // VERIFY (3–4)
    { value: '4',    label: 'Countries',            note: 'MX · US · VN · TH' },
  ],

  /* ---- operating model ------------------------------------------------ */
  model: [
    { key: 'Clarity',     body: 'Cut ambiguity. Research, facilitation, and a point of view that aligns the room before a pixel is drawn.' },
    { key: 'Craft',       body: 'Ship products people trust — legible, honest, and resilient under real stakes.' },
    { key: 'Compounding', body: 'Build the systems, teams, and culture whose value keeps paying out long after I leave.' },
  ],

  /* ---- six principles ------------------------------------------------- */
  principles: [
    'Trust is a design material.',
    'Strong opinions, held in the open.',
    'Leave a system, not a hero.',
    'Ship to find the truth.',
    'Meet ambiguity with a map.',
    'Grow people faster than problems.',
  ],

  /* ---- case studies (deep) -------------------------------------------- */
  caseStudies: [
    {
      slug: 'airasia',
      company: 'AirAsia',
      via: 'Wizeline',
      period: '2019',
      role: 'Lead UX · Facilitator',
      accent: '#FF5A36',                 // coral
      headline: 'I run the <em>hardest</em> rooms.',
      hook: 'Turned Southeast Asia’s largest low-cost airline from a flights app into a travel marketplace — in a four-day room full of executives who didn’t agree on the problem.',
      cover: 'deck-airasia-assets/cover.jpg',
      leadImage: 'folio/airasia/cover.png',
      tags: ['Facilitation', 'Product Strategy', 'Travel', '0→1'],
      stats: [
        { value: '4 days', label: 'Ambiguity → build-ready product' },
        { value: '1 year', label: 'Engagement contract won' },
        { value: '13·8·7', label: 'Democratic vote on the real problem' },
        { value: 'C-suite', label: 'Room aligned end-to-end' },
      ],
      sections: [
        { h: 'The room', b: 'AirAsia wanted to own the whole trip — “AirAsia 3.0” — not just the seat. But the org’s instincts were stuck on flights, the products (hotels, activities, payments) were scattered, and C-level, Commercial, Product, Engineering, Data, Security and UX each had a different idea of the real user problem.' },
        { h: 'What I did', b: 'I designed and facilitated a four-day workshop — a blend of Google’s Design Sprint and Atlassian’s Experience Canvas. Day one set product strategy; days two and three built proto-personas, customer-journey maps with sentiment lines, and ran ideation (Lightning Demos, the 11-star experience, Crazy 8s, heat-map voting); day four produced a clickable MVP and a build-ready architecture. The whole thing ran on democratic, vote-based prioritization so the decisions were the room’s, not mine.' },
        { h: 'What shipped', b: 'An aligned vision — “the smartest travel shopping cart for Asia’s largest travel marketplace” — three named concepts, an eight-scene storyboard, a clickable MVP across Explore → Planner → Pay → Stats → Discover, and a build plan with payments (Adyen), compound orders, and defined success metrics: MAU, GBV, conversion, NPS.' },
        { h: 'Outcome', b: 'The room voted the AirAsia-3.0 mindset the core problem (13 votes vs 8 vs 7). We left with a well-defined product in four days — and it won Wizeline a one-year engagement contract. The real deliverable wasn’t the screens; it was a room that finally agreed.' },
      ],
      gallery: [
        { src: 'deck-airasia-assets/room.jpg', cap: 'Four days, one room — executives to engineers, aligned by vote.' },
        { src: 'deck-airasia-assets/cjm.png',  cap: 'Customer-journey maps with sentiment lines to find the real pain.' },
        { src: 'folio/airasia/trip-02.png' },
        { src: 'folio/airasia/trip-03.png' },
        { src: 'folio/airasia/trip-04.png' },
      ],
      pillar: 'Clarity',
    },
    {
      slug: 'casai',
      company: 'Casai',
      via: '',
      period: '2020 – 2021',
      role: 'UX Manager · Consumer Products',
      accent: '#159488',                 // teal
      headline: 'Built a design culture <em>from zero</em>.',
      hook: 'An a16z-backed hospitality startup that had never practiced design. I built the research culture and reframed a redundant app into a concierge guests actually used.',
      cover: 'folio/casai/cover.jpg',
      tags: ['Design Leadership', 'Research', 'Hospitality', 'Design Ops'],
      stats: [
        { value: '63 → 600+', label: 'Units during my tenure' },   // VERIFY
        { value: '~$8M',      label: 'ARR reached' },               // VERIFY
        { value: '92.85%',    label: 'Check-in success (usability)' },
        { value: '4.53 / 5',  label: 'Concierge usefulness score' },
      ],
      sections: [
        { h: 'The mandate', b: 'Casai was reinventing hospitality across Mexico and Brazil — design-led apartments, local experiences, smart-home tech — and scaling fast. It knew it needed design but had never had design as a practice. My mandate: lead the consumer products, build and grow the team, and install a way of working that replaced opinion with evidence.' },
        { h: 'A research practice, not opinions', b: 'I built a broad empathy toolkit — 1:1 interviews, usability testing, contextual inquiry (visiting the actual apartments to watch real guests), surveys, reviews, and diary studies. Instead of demographic personas we anchored on Jobs-to-Be-Done: the real reason people stayed wasn’t their job title, it was wanting the best apartment in the best neighborhood.' },
        { h: 'From pamphlet to platform', b: 'In two quarters the website went from a brochure that only explained what Casai was into a functional product — guests could book, browse listings, and explore the neighborhood around each stay. Then the arrival and in-stay experience consolidated into a single concierge app: find the address and open the gate, check in with the guard, control the apartment, explore, and read a guide for every room.' },
        { h: 'Outcome', b: 'Validated with 80+ users: 92.85% check-in success, a 4.53/5 usefulness score, 81.8% success on wifi and door-unlock tasks. Beyond the product, I set DesignOps standards, grew and upskilled the team, and moved fluidly between setting direction and doing the hands-on craft — leaving a practice that could run without me.' },
      ],
      gallery: [
        { src: 'folio/casai/city-guide.png',    cap: 'From pamphlet to platform — city guides curated with locals.' },
        { src: 'folio/casai/jtbd-persona.png',  cap: 'Jobs-to-Be-Done, built from interviews rather than demographics.' },
        { src: 'folio/casai/concierge-app.png', cap: 'The concierge app — access, check-in, and in-stay control in one place.' },
        { src: 'folio/casai/outcomes.png',      cap: 'What guests told us — 90% of reviews are five stars.' },
      ],
      pillar: 'Compounding',
    },
    {
      slug: 'bitso',
      company: 'Bitso',
      via: '',
      period: '2021 – 2022',
      role: 'Director of UX · Consumer',   // VERIFY (title)
      accent: '#EFA820',                    // gold
      headline: 'Made crypto <em>worth trusting</em>.',
      hook: 'Led consumer product design at Latin America’s largest crypto platform — launching a localized market and the retention features that turn a wallet into a habit.',
      cover: 'deck-life-assets/bitso.png',
      leadImage: 'folio/bitso/cover.png',
      tags: ['Fintech', 'Crypto', 'Consumer', 'Growth'],
      stats: [
        { value: '1M+',  label: 'New customers, first month (Colombia)' },  // VERIFY
        { value: '3',    label: 'Retention features championed' },
        { value: '2',    label: 'ICs promoted to Senior in a quarter' },
        { value: 'LatAm #1', label: 'Largest crypto platform in the region' },
      ],
      sections: [
        { h: 'The bet', b: 'Crypto is only useful if people trust it enough to keep money there. My job was to grow consumer adoption and retention on the region’s largest platform — and to localize the product for a brand-new market, Colombia.' },
        { h: 'What I did', b: 'Journey mapping and discovery interviews to find where trust broke, then flow prioritization, mid-fi UI, KPIs, content design, and a reusable component set — validated with real users. I championed three retention features: earning yields (Bitso+), recurrent deposits, and recurrent conversions.' },
        { h: 'What shipped', b: 'Bitso Colombia — a localized app tuned to a new market — plus the earn/deposit/convert loop that gives everyday customers a reason to come back rather than trade once and leave.' },
        { h: 'Outcome & team', b: 'The Colombia launch targeted a million new customers in its first month. Alongside the product, I built the rituals and vision that lifted cross-squad collaboration — and had two individual contributors promoted to Senior in a single quarter.',
          imgs: [
            { src: 'folio/bitso/flow.png' },
            { src: 'folio/bitso/deposit-co.png' },
          ] },
      ],
      gallery: [],
      pillar: 'Craft',
    },
    {
      slug: 'truemoney',
      company: 'TrueMoney',
      via: 'Ascend Group',
      period: '2020 – 2021',
      role: 'Lead Product Designer',
      accent: '#3B62D6',                   // blue
      headline: 'Systems over <em>heroics</em>.',
      hook: 'Led a team overhauling a top-three service used by six million people a month — and defined a configurable POS app for SME agents across Southeast Asia.',
      cover: 'deck-life-assets/truemoney.png',
      tags: ['Fintech', 'SE Asia', 'Team Leadership', 'Service Design'],
      stats: [
        { value: '6M', label: 'Monthly active users served' },
        { value: '3', label: 'Designers + a UX writer led' },
        { value: 'Multi', label: 'Country POS app defined' },
        { value: 'Regional', label: 'UX practice established' },
      ],
      sections: [
        { h: 'The scope', b: 'At Ascend Group in Bangkok I led design for TrueMoney across Southeast Asia — overhauling “phone top-up,” one of the company’s top-three most-valued services with six million monthly users, and defining a configurable B2C point-of-sale Android app for SME agents across several countries.' },
        { h: 'What I did', b: 'I led a team of three designers and a UX writer through audit, proto-personas, service blueprints, and a design system, then validation via interviews and usability testing. I partnered with product, commercial, and legal on a compliant end-to-end wallet — enabling the licenses needed to operate in the Philippines.' },
        { h: 'Outcome', b: 'A redesigned flagship service, a configurable regional agent app, and a regional UX practice that raised cross-country engagement and morale. The lasting win was the team and the practice — systems that keep working when the founder-designer isn’t in the room.' },
      ],
      gallery: [
        { src: 'deck-life-assets/truemoney.png', cap: 'TrueMoney — a top-three service overhauled for six million monthly users.' },
      ],
      pillar: 'Compounding',
    },
  ],

  /* ---- "more work" strip ---------------------------------------------- */
  more: [
    { company: 'Banco Azteca', role: 'Sr. UX/UI · VML México', period: '2017–18', note: 'Digital transformation for a bank reaching ~50% of Mexico’s working population (3M+ users).', img: 'deck-life-assets/azteca.png' },
    { company: 'TrueID Sports', role: 'Wizeline / Ascend',      period: '2019–20', note: 'Redesigned Thailand’s biggest sports platform for its exclusive Premier League broadcast.', img: 'deck-life-assets/trueid.png' },
    { company: '21st Century Fox', role: 'Sr. UX · Wizeline',    period: '2018–20', note: 'VOD distribution + DevSecOps enterprise platforms for a top-4 US media conglomerate.', img: 'deck-life-assets/fox.png' },
    { company: 'A24', role: 'Designer',                          period: '2016–17', note: 'Contributed to some of A24’s most iconic movie posters and the assets derived from them.', img: '' },
  ],

  /* ---- community / who I am beyond the work --------------------------- */
  community: [
    { value: 'Top 100', label: 'ADPList mentor of 2022 · Top 5 LatAm' },
    { value: '4,000+',  label: 'Hours mentored, across 32 countries' },
    { value: '9+',      label: 'Lectures across LatAm & Southeast Asia' },
  ],

  /* =====================================================================
     CHAT KNOWLEDGE BASE — the "ask anything" assistant.
     Object-oriented, no AI/LLM. Each topic has trigger phrases, one or more
     answer variants (rotated so it never sounds canned), short follow-up
     suggestions (topic ids), and an optional case-study card. The engine
     (conversation.html) tracks what's been asked to vary suggestions and
     redirect gracefully on anything it doesn't know.
     ===================================================================== */
  chat: {
    greetings: [
      'I’m Bryant — or the part of him that fits in a text box. Ask me anything: how I lead, what I’ve built, or why I bet my whole career on trust.',
      'Hey. This is Bryant, more or less — a version of me you can actually talk to. What do you want to know?',
      'I’m Bryant. Well, a stand-in trained on the real one. Ask me about the work, the way I lead, or trust — that’s the throughline.',
    ],
    placeholder: 'Ask me anything…',
    starters: ['different', 'best', 'trust'],
    suggestPool: ['different', 'best', 'leadership', 'trust', 'story', 'career', 'personal', 'looking_for', 'workstyle', 'available'],
    fallbacks: [
      'That one’s not in my repertoire — I’m a stand-in for Bryant, not his whole brain. The real one’s more fun: brycastro89@gmail.com. Meanwhile, I’m good on these:',
      'You’ve stumped the scripted version of me. I’m sharper on the work, the way I lead, and why trust is the whole game — want one of those?',
      'Hm, I don’t have that memorized. But don’t go — ask me what makes me different, or point me at a project:',
      'Not a clue, honestly — I only know Bryant, not everything. Try me on something I’m actually good at:',
    ],
    topics: [
      { id:'greeting', chip:null,
        triggers:['hi','hello','hey','hola','yo','sup','hi there','good morning','good afternoon','howdy','hiya'],
        answers:['Hey — glad you’re here. Ask me anything: the work, how I lead, or why trust is the whole thing.'],
        follow:['different','best','trust'] },

      { id:'meta_ai', chip:'Are you actually AI?',
        triggers:['are you ai','are you real','is this a bot','chatgpt','are you a robot','who am i talking to','is this real','are you human','llm','is this ai','are you a person','claude'],
        answers:['Fair question. I’m not some giant AI model — I’m a hand-written stand-in, a little map of Bryant’s brain. No tokens, no hallucinations, just him in object form. Ask me something real and you’ll get his actual voice.'],
        follow:['different','best','available'] },

      { id:'who', chip:'Who are you?',
        triggers:['who are you','who is bryant','about you','about bryant','tell me about yourself','introduce','background','your story','who r u'],
        answers:['I’m Bryant Castro, a design leader with over a decade building teams and products across fintech, crypto, travel, hospitality, and media. My work’s reached tens of millions of people across Asia and Latin America. I’m a third-culture kid — born in LA, raised in Mexico City, schooled in California — which is probably why I’m at home leading teams from Bangkok to Mexico City.'],
        follow:['different','career','personal'] },

      { id:'different', chip:'What makes you different?',
        triggers:['different','why hire','why you','stand out','unique','special','sell me','pitch','elevator','why should we','what sets you apart'],
        answers:[
          'Hire a designer, you get better screens. Hire me, you get a design organization. I move between setting direction in a room full of executives and shipping the hardest parts of the craft myself — and everything I build is meant to compound: systems, teams and culture that keep paying out after I’ve gone.',
          'Most designers optimize the screen; I optimize the whole system around it — the team, the research practice, the standards. My domain is trust: money, identity, travel, home. Products people *have to* trust, not just want to use. That’s a different job, and it’s the one I’m best at.',
        ],
        follow:['trust','leadership','best'] },

      { id:'trust', chip:'Why “trust”?',
        triggers:['trust','thesis','philosophy','believe','point of view','anatomy','why trust','worth trusting'],
        answers:[
          'I design the products people *have to* trust — money, identity, travel, home. A product earns trust when it’s three things at once: honest about what it does, legible under pressure, and resilient when the stakes are real. That overlap is the whole job. Trust is a design material, and I treat it like one.',
          'Because it’s the ownable thing. Anyone can make something pretty; the hard part is making something people will hand their money, their identity, or their trip to — and not regret it. Honest, legible, resilient. Get those three right and trust is the byproduct.',
        ],
        follow:['best','principles','research'] },

      { id:'principles', chip:'What do you believe?',
        triggers:['principles','values','how do you work','operating','clarity craft','compounding','beliefs','manifesto'],
        answers:['I run on three beats — Clarity: cut ambiguity with research, facilitation and a point of view that aligns the room. Craft: ship products people trust, legible and honest under real stakes. Compounding: build systems, teams and culture whose value keeps paying out after I leave. Under that, six principles I actually hold: trust is a design material; strong opinions held in the open; leave a system, not a hero; ship to find the truth; meet ambiguity with a map; grow people faster than problems.'],
        follow:['leadership','trust','story'] },

      { id:'leadership', chip:'How do you lead?',
        triggers:['leadership','manage','management','lead teams','management style','how do you lead','director','lead people','run a team'],
        answers:[
          'I’ve built and scaled around four design teams across four countries. My style: set a clear point of view, hand people the map, then get out of the way — “leave a system, not a hero.” Kind, then candid. At Bitso I built the rituals that got two ICs promoted to Senior in a single quarter; at Casai I built a research culture from zero; at TrueMoney I led a team through a six-million-user overhaul.',
          'Direction plus air cover. I’d rather grow the person who can solve it ten times than solve it once myself. I disagree in the open, change my mind in public when the evidence turns, and measure myself by what keeps working after I’ve left the room.',
        ],
        follow:['growth','workstyle','conflict'] },

      { id:'best', chip:'Show me your best work',
        triggers:['best work','show me','portfolio','case study','case studies','projects','work','what have you built','examples','everything','all your work','see your work'],
        answers:['Four I’m proud of, each proving a different muscle: AirAsia — facilitation and product strategy under pressure. Casai — building a design culture and a research practice from zero. Bitso — growth and trust at fintech scale. TrueMoney — leading a team through a six-million-user overhaul. Which one do you want to open?'],
        follow:['airasia','casai','bitso'] },

      { id:'airasia', chip:'AirAsia',
        triggers:['airasia','air asia','workshop','facilitat','sprint','hardest room','trip planner'],
        answers:['AirAsia wanted to own the whole trip, not just the seat — but a room of executives, engineers and data folks couldn’t agree on the real problem. I designed and facilitated a four-day workshop, ran it on democratic vote-based prioritization, and we left with a build-ready Trip Planner MVP and, more importantly, a room that finally agreed. It won a one-year engagement contract. My clearest “I can run the hardest rooms” story.'],
        card:'airasia', follow:['casai','leadership','story'] },

      { id:'casai', chip:'Casai',
        triggers:['casai','hospitality','concierge','research culture','design ops','designops','airbnb'],
        answers:['Casai was reinventing hospitality across Mexico and Brazil and scaling fast, but had never practiced design. I built the research culture — interviews, contextual inquiry in the actual apartments, Jobs-to-Be-Done instead of demographics — and reframed a redundant app into a concierge guests actually used: 92.85% check-in success and a 4.53/5 usefulness score in testing. The real deliverable was a practice that could run without me.'],
        card:'casai', follow:['bitso','research','growth'] },

      { id:'bitso', chip:'Bitso',
        triggers:['bitso','crypto','retention','colombia','crypto platform','coinbase'],
        answers:['At Bitso — Latin America’s largest crypto platform — I led consumer product design. Crypto’s only useful if people trust it enough to keep money there, so I championed the retention loop (earning yields, recurrent deposits and conversions) and localized the product for a new market, Colombia, targeting a million new customers in the first month. Trust, made into features.'],
        card:'bitso', follow:['truemoney','trust','impact'] },

      { id:'truemoney', chip:'TrueMoney',
        triggers:['truemoney','true money','ascend','thailand','bangkok','top up','top-up','pos','southeast asia','six million','wallet'],
        answers:['At Ascend Group in Bangkok I led design for TrueMoney across Southeast Asia — overhauling “phone top-up,” a top-three service with six million monthly users, and defining a configurable POS app for SME agents across several countries. I led three designers and a UX writer, and partnered with legal and commercial on a compliant wallet that unlocked licensing in the Philippines. Systems over heroics.'],
        card:'truemoney', follow:['airasia','leadership','career'] },

      { id:'research', chip:'How do you do research?',
        triggers:['research','user testing','usability','jtbd','jobs to be done','interviews','evidence','data','user research','validate'],
        answers:['I replace opinion with evidence. At Casai I built a full empathy toolkit — 1:1 interviews, usability testing, contextual inquiry (literally visiting the apartments to watch real guests), surveys and diary studies — and anchored on Jobs-to-Be-Done rather than demographic personas. At Bitso and TrueMoney I set up UX metrics so decisions were defensible to executives, not decided by the loudest voice in the room.'],
        follow:['casai','principles','impact'] },

      { id:'systems', chip:'Design systems?',
        triggers:['design system','systems','scalable','component','governance','component library','tokens'],
        answers:['I’ve shipped design systems that hold up at scale — including, at Incode, the first unified, accessible, fully-coded design system for enterprise products. I care less about the component library as an artifact and more about the governance and culture that keep it honest as the org grows. A system nobody follows is just a folder.'],
        follow:['incode','leadership','ai_stance'] },

      { id:'incode', chip:'What are you doing now?',
        triggers:['incode','current','now','identity','idv','enterprise','currently','present job','current role'],
        answers:['I’m Experience Design Manager for Enterprise Products at Incode, leading design for identity-verification dashboards. I built and lead the team, launched the first unified coded design system for enterprise, stood up an AI-focused design function, and contributed to the 90% gross-margin goal set for the first 100 days of an M&A integration. Identity is about as “have-to-trust” as products get.'],
        follow:['systems','ai_stance','looking_for'] },

      { id:'mentoring', chip:'Do you mentor?',
        triggers:['mentor','teaching','adplist','community','speaking','lecture','give back','teach','coach outside'],
        answers:['Constantly — it’s the part of the job that compounds most. ADPList Top 100 mentor of 2022 and Top 5 in LatAm: 4,000+ hours with mentees from 32 countries. Plus 9+ lectures across Latin America and Southeast Asia and training for university cohorts. Growing people faster than problems is a principle, not a tagline.'],
        follow:['personal','growth','leadership'] },

      { id:'impact', chip:'What’s your business impact?',
        triggers:['impact','business','metrics','roi','revenue','results','numbers','outcomes','move the needle'],
        answers:['I lead with scope, not vanity metrics: ~40M people reached across Asia and LatAm, four design teams built, work across four countries. Concrete outcomes — AirAsia’s four-day workshop won a one-year contract; Casai’s concierge tested at 92.85% check-in success; Bitso’s Colombia launch targeted a million new customers in month one; TrueMoney’s overhaul served six million monthly users. Design that moves the business, not just the interface.'],
        follow:['best','looking_for','different'] },

      { id:'career', chip:'Where have you worked?',
        triggers:['career','experience','journey','where have you worked','work history','companies','resume','résumé','cv','past roles','how long','years of experience'],
        answers:['A decade, four countries. New York first — brand and film (A24, an OMA residential building, the IOC). Then UX consulting at Wizeline across Vietnam and Mexico (AirAsia, 21st Century Fox, a Thai sports platform). Then leadership: TrueMoney in Bangkok, Casai and Bitso in Mexico, and now Incode in identity. Fintech, crypto, travel, hospitality, media — all of it trust-critical.'],
        follow:['airasia','bitso','personal'] },

      { id:'workstyle', chip:'What’s it like to work with you?',
        triggers:['work with you','working with you','collaboration','what is it like','working style','day to day','as a boss','as a manager','team culture','collaborate'],
        answers:['Direct and warm — kind, then candid. I set a clear point of view and a map, then get out of the way; I’d rather grow the person than hand them the answer. I disagree in the open and change my mind in public when the evidence says so. And I still love the craft, so I’m in the work with you, not just reviewing it from a distance.'],
        follow:['leadership','conflict','ic_vs_mgr'] },

      { id:'failure', chip:'A time you failed?',
        triggers:['failure','mistake','hardest','lesson','went wrong','regret','fail','biggest challenge','learned the hard way','weakness story'],
        answers:['Early on I mistook being the best designer in the room for being a good leader — I’d take the hard parts myself instead of building the people who could. It cost me a team that leaned on me too much. The lesson became a principle: leave a system, not a hero. Now I measure myself by what keeps working after I’ve left.'],
        follow:['leadership','growth','strengths_weak'] },

      { id:'why_design', chip:'Why design?',
        triggers:['why design','how did you start','origin','get into design','why did you','become a designer','start designing','how you got into'],
        answers:['I came in sideways — architecture and graphic design in New York, posters at A24, brand work before product. What hooked me was the same thing every time: taking something complex and high-stakes and making it feel obvious. Design was just the most honest way to do that at scale.'],
        follow:['career','personal','trust'] },

      { id:'personal', chip:'Who are you outside work?',
        triggers:['personal','outside work','hobbies','fun fact','third culture','who are you really','life','family','when you are not working','interests','for fun'],
        answers:['Third-culture kid — born in LA, raised in Mexico City until 15, back to California for school. That’s probably why leading teams in Bangkok, Ho Chi Minh or Mexico City feels natural. Outside the work I’m happiest teaching — 4,000+ hours mentoring designers across 32 countries — and I started a “Designers of Vietnam” directory while I was out there.'],
        follow:['mentoring','career','different'] },

      { id:'ai_stance', chip:'Your take on AI + design?',
        triggers:['ai in design','use ai','thoughts on ai','future of design','ai design','will ai','replace designers','ai tools','artificial intelligence'],
        answers:['AI is leverage, not a replacement for judgment. At Incode I stood up an AI-focused design function — processes and guardrails so teams design *with* it, faster, without shipping confident nonsense. The scarce thing was never generating options; it’s knowing which one earns trust. That part is still ours.'],
        follow:['systems','incode','different'] },

      { id:'looking_for', chip:'What role do you want next?',
        triggers:['looking for','ideal role','what do you want','next role','dream job','what are you after','what next','kind of role','what are you looking'],
        answers:['A design leadership role where trust is the hard part — Head, Director or VP of Design, or a founding design leader. I want the mandate to set direction and build the function, not just staff a backlog. Bonus points for money, identity, or anything regulated and high-stakes.'],
        follow:['available','different','leadership'] },

      { id:'conflict', chip:'How do you handle conflict?',
        triggers:['conflict','disagree','disagreement','feedback','candor','hard conversation','tension','difficult','pushback','stakeholder'],
        answers:['In the open. Strong opinions, held loosely — I’ll argue hard for a position and drop it the second the evidence turns. Most “design conflict” is really unclear goals, so I pull the fight up to the problem: get the room to agree on what we’re solving and the pixel arguments mostly dissolve. Kind, then candid — never the reverse.'],
        follow:['leadership','airasia','workstyle'] },

      { id:'strengths_weak', chip:'Strengths & weaknesses?',
        triggers:['strength','weakness','good at','bad at','superpower','best at','worst at','strong suit'],
        answers:['Superpower: walking into an ambiguous, high-stakes room full of people who don’t agree, and walking out with a decision everyone owns. Weakness: I care about the craft to a fault, so I’ve had to consciously trade depth for speed — and learn that not everything needs my hands on it.'],
        follow:['leadership','failure','best'] },

      { id:'growth', chip:'How do you grow people?',
        triggers:['grow people','hiring','develop','coach','team building','mentor team','promote','career ladder','upskill','develop talent'],
        answers:['By handing real ownership early and backing it with a map and air cover. At Bitso that got two ICs promoted to Senior in a quarter; at Casai I built the career and hiring process from scratch. Grow people faster than problems — it’s the only way leverage actually compounds.'],
        follow:['leadership','mentoring','principles'] },

      { id:'location', chip:'Where are you based?',
        triggers:['remote','location','relocate','where based','timezone','where do you live','based','relocation','time zone'],
        answers:['Between Mexico and the US, and very comfortable remote — I’ve led distributed teams across Mexico, the US, Vietnam and Thailand for years, so timezones are a solved problem. Open to relocation for the right role.'],
        follow:['available','career','looking_for'] },

      { id:'ic_vs_mgr', chip:'Do you still design?',
        triggers:['still design','hands on','ic or manager','do you code','individual contributor','player coach','do you still','hands-on','get in the file'],
        answers:['Yes — I’m a player-coach. I lead teams, but I still get into the file for the hardest 10% of the craft, because that’s where the vision gets proven or exposed. I design; I don’t write production code, but I work hand-in-glove with engineers to make sure it ships as drawn.'],
        follow:['leadership','workstyle','best'] },

      { id:'comp', chip:null,
        triggers:['salary','comp','compensation','rate','how much','money','pay','day rate','budget','expectations'],
        answers:['Ha — that’s a conversation for the real Bryant, not his chatbot. Tell me about the role and where trust is the hard part, and he’ll happily talk numbers: brycastro89@gmail.com.'],
        follow:['available','looking_for','different'] },

      { id:'story', chip:'Tell me a story',
        triggers:['tell me a story','anecdote','example','war story','give me an example','a story','story'],
        answers:['My favorite: AirAsia wanted to become a whole travel marketplace, but I had four days and a room full of executives, engineers and data folks who couldn’t agree on the problem. No authority — just facilitation. We voted our way to a shared vision and left with a build-ready product. It won a one-year contract. That’s the job in a nutshell: turn a hard room into a decision everyone owns.'],
        card:'airasia', follow:['casai','leadership','conflict'] },

      { id:'thanks', chip:null,
        triggers:['thanks','thank you','cool','nice','awesome','great','appreciate','thx','love it','amazing'],
        answers:['Anytime. If you want the real thing, Bryant’s a message away — brycastro89@gmail.com. Anything else you’re curious about?'],
        follow:['available','best','personal'] },

      { id:'bye', chip:null,
        triggers:['bye','goodbye','see you','that is all','later','cya','done','gotta go','see ya'],
        answers:['Good talking. If any of this landed, reach the real Bryant at brycastro89@gmail.com or on LinkedIn. Go make something people trust.'],
        follow:['available','best'] },

      { id:'available', chip:'Are you available?',
        triggers:['available','hire','hiring','contact','reach','email','work together','opportunit','role','job','get in touch','how do i reach'],
        answers:['Yes — open to design leadership roles and advisory work. Best way to reach the real me is brycastro89@gmail.com, or LinkedIn (linkedin.com/in/bryant-c). Tell me what you’re building and where trust is the hard part — that’s exactly my kind of problem.'],
        follow:['looking_for','different','best'] },
    ],
  },
};
