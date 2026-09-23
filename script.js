const GH_USER = 'Bineta354';

/* ---------- Textes FR / EN ---------- */
const I18N = {
  fr: {
    'nav.about': 'À propos', 'nav.projects': 'Projets', 'nav.research': 'Recherche', 'nav.experience': 'Parcours', 'nav.skills': 'Compétences', 'nav.contact': 'Contact',
    'hero.badge': "Disponible · à la recherche d'un emploi",
    'hero.hi': 'Bonjour, je suis',
    'hero.role': 'Développeuse full-stack & chercheuse en systèmes distribués',
    'hero.lead': "Je conçois des plateformes web et mobiles robustes (Node.js, React, Supabase, Flutter) et je fais de la recherche sur l'allocation équitable de ressources dans le Cloud. Master 2 UCAD, 1er prix COC'2026.",
    'hero.cta1': 'Voir mes projets', 'hero.cta2': 'Télécharger mon CV', 'hero.cta3': 'Me contacter',
    'stats.ord': 'er', 'stats.mem': 'Note du mémoire M2', 'stats.prize': "Prix au colloque COC'2026", 'stats.tables': 'Tables SQL conçues', 'stats.commits': 'Commits sur la plateforme médicale',
    'about.eyebrow': 'À propos', 'about.title': 'Entre code de production et recherche',
    'about.p1': "Titulaire d'un Master 2 en Systèmes d'Information Répartis (UCAD, Dakar), j'ai mené un mémoire sur l'allocation multi-agents de ressources Cloud, publié sur HAL et primé au colloque international COC'2026.",
    'about.p2': "Au quotidien, je développe des systèmes distribués multi-tenant à forte contrainte de cohérence et de montée en charge : sécurité par rôles (Row Level Security), temps réel, tests de charge, gestion d'incidents en production.",
    'about.p3': "Je cherche aujourd'hui un poste de développeuse full-stack / backend, ou un cadre de recherche (candidature doctorale) sur les systèmes distribués et le Cloud.",
    'proj.eyebrow': 'Projets', 'proj.title': "Ce que j'ai construit", 'proj.more': 'Et plus encore sur GitHub', 'proj.all': 'Tout voir sur GitHub →', 'proj.loading': 'Chargement depuis GitHub…',
    'proj.private': 'Code privé', 'proj.demo': 'Démo en ligne', 'proj.code': 'Code', 'proj.paper': 'Publication HAL', 'proj.appstore': 'App Store', 'proj.play': 'Google Play', 'proj.video': 'Voir la vidéo', 'proj.close': 'Fermer',
    'f.all': 'Tous', 'f.research': 'Recherche', 'f.web': 'Web', 'f.mobile': 'Mobile', 'f.pro': 'Projets pro',
    'res.eyebrow': 'Recherche', 'res.title': 'Publication & travaux académiques', 'res.award': "🏆 1er prix · COC'2026",
    'res.paperTitle': "Proposition d'un modèle de système multi-agents pour l'allocation équitable des ressources dans le Cloud Computing",
    'res.venue': "Mémoire de Master 2, UCAD (soutenu en juillet 2025) · Colloque international COC'2026",
    'res.abstract': "Un système multi-agents décentralisé (Python, SPADE, asyncio) combinant l'ordonnancement HRRN avec vieillissement (anti-famine) et le tri topologique (algorithme de Kahn) pour garantir l'équité entre clients et le respect des dépendances entre tâches. Quatre agents collaborent : gestion des clients, gestion des ressources, équilibrage de charge et supervision.",
    'res.hal': 'Lire sur HAL →', 'res.cv': 'CV Recherche (PDF)',
    'res.cloudTitle': 'Cloud Computing — AWS, OpenStack & CloudSim',
    'res.cloudText': "Automatisation Bash / Java (AWS SDK) d'un VPC AWS ; simulations CloudSim (200 à 1000 requêtes) pour étudier l'impact du nombre de VMs sur le temps de réponse.",
    'exp.eyebrow': 'Parcours', 'exp.title': 'Expérience & formation', 'edu.title': 'Formation', 'cert.title': 'Certifications',
    'sk.eyebrow': 'Compétences', 'sk.title': 'Ma boîte à outils',
    'lang.fr': 'Français', 'lang.fr.lvl': 'Courant', 'lang.wo.lvl': 'Courant', 'lang.en': 'Anglais', 'lang.en.lvl': 'Lu avancé, écrit intermédiaire',
    'ct.title': 'Travaillons ensemble', 'ct.text': 'Un poste, un projet freelance, une collaboration de recherche ? Écrivez-moi, je réponds vite.',
    'foot': 'Fait avec soin à Dakar',
    'pageTitle': 'Bineta Dabo — Développeuse Full-Stack & Chercheuse Cloud'
  },
  en: {
    'nav.about': 'About', 'nav.projects': 'Projects', 'nav.research': 'Research', 'nav.experience': 'Experience', 'nav.skills': 'Skills', 'nav.contact': 'Contact',
    'hero.badge': 'Available · open to work',
    'hero.hi': "Hi, I'm",
    'hero.role': 'Full-stack developer & distributed systems researcher',
    'hero.lead': "I build robust web and mobile platforms (Node.js, React, Supabase, Flutter) and research fair resource allocation in the Cloud. Master's degree (UCAD), 1st prize at COC'2026.",
    'hero.cta1': 'See my projects', 'hero.cta2': 'Download my CV', 'hero.cta3': 'Get in touch',
    'stats.ord': 'st', 'stats.mem': 'Master thesis grade', 'stats.prize': "Prize at COC'2026 conference", 'stats.tables': 'SQL tables designed', 'stats.commits': 'Commits on the medical platform',
    'about.eyebrow': 'About', 'about.title': 'Between production code and research',
    'about.p1': "I hold a Master's degree in Distributed Information Systems (UCAD, Dakar). My thesis on multi-agent Cloud resource allocation was published on HAL and awarded at the international conference COC'2026.",
    'about.p2': 'Day to day, I build multi-tenant distributed systems with strong consistency and scalability constraints: role-based security (Row Level Security), realtime, load testing and production incident handling.',
    'about.p3': "I'm now looking for a full-stack / backend developer position, or a research setting (PhD application) on distributed systems and the Cloud.",
    'proj.eyebrow': 'Projects', 'proj.title': "What I've built", 'proj.more': 'And more on GitHub', 'proj.all': 'See all on GitHub →', 'proj.loading': 'Loading from GitHub…',
    'proj.private': 'Private code', 'proj.demo': 'Live demo', 'proj.code': 'Code', 'proj.paper': 'HAL paper', 'proj.appstore': 'App Store', 'proj.play': 'Google Play', 'proj.video': 'Watch the video', 'proj.close': 'Close',
    'f.all': 'All', 'f.research': 'Research', 'f.web': 'Web', 'f.mobile': 'Mobile', 'f.pro': 'Professional',
    'res.eyebrow': 'Research', 'res.title': 'Publication & academic work', 'res.award': "🏆 1st prize · COC'2026",
    'res.paperTitle': 'A multi-agent system model for fair resource allocation in Cloud Computing',
    'res.venue': "Master's thesis, UCAD (defended July 2025) · International conference COC'2026",
    'res.abstract': 'A decentralized multi-agent system (Python, SPADE, asyncio) combining HRRN scheduling with aging (anti-starvation) and topological sorting (Kahn\'s algorithm) to ensure fairness between clients and respect for task dependencies. Four agents collaborate: client management, resource management, load balancing and monitoring.',
    'res.hal': 'Read on HAL →', 'res.cv': 'Research CV (PDF)',
    'res.cloudTitle': 'Cloud Computing — AWS, OpenStack & CloudSim',
    'res.cloudText': 'Bash / Java (AWS SDK) automation of an AWS VPC; CloudSim simulations (200 to 1000 requests) studying the impact of the number of VMs on response time.',
    'exp.eyebrow': 'Experience', 'exp.title': 'Experience & education', 'edu.title': 'Education', 'cert.title': 'Certifications',
    'sk.eyebrow': 'Skills', 'sk.title': 'My toolbox',
    'lang.fr': 'French', 'lang.fr.lvl': 'Fluent', 'lang.wo.lvl': 'Fluent', 'lang.en': 'English', 'lang.en.lvl': 'Advanced reading, intermediate writing',
    'ct.title': "Let's work together", 'ct.text': 'A job, a freelance project, a research collaboration? Write to me, I reply quickly.',
    'foot': 'Made with care in Dakar',
    'pageTitle': 'Bineta Dabo — Full-Stack Developer & Cloud Researcher'
  }
};

/* ---------- Données ---------- */
const PROJECTS = [
  {
    cat: ['research'], tags: { fr: 'Recherche', en: 'Research' }, private: true,
    name: { fr: 'Allocation de ressources Cloud multi-agents', en: 'Multi-agent Cloud resource allocation' },
    desc: {
      fr: "Système multi-agents décentralisé (client, ressources, équilibrage de charge, supervision) avec ordonnancement HRRN et tri topologique. Tableau de bord de suivi en temps réel. Publié sur HAL, 1er prix COC'2026.",
      en: "Decentralized multi-agent system (client, resource, load-balancer and monitor agents) with HRRN scheduling and topological sorting. Real-time monitoring dashboard. Published on HAL, 1st prize at COC'2026."
    },
    stack: ['Python', 'SPADE', 'asyncio', 'XMPP', 'Flask'],
    links: [{ k: 'proj.paper', url: 'https://hal.science/hal-05571848' }]
  },
  {
    cat: ['web', 'pro'], tags: { fr: 'Web · Pro', en: 'Web · Pro' }, private: true,
    name: { fr: 'Plateforme logistique portuaire', en: 'Port logistics platform' },
    desc: {
      fr: 'Plateforme logistique pour un acteur portuaire de Dakar : listes de prix multi-clients, gestion des départs partiels, notifications filtrées par rôle. Correction de bugs critiques (503 en cascade, recalcul de stock, API commandes, import massif de produits).',
      en: 'Logistics platform for a port operator in Dakar: multi-client price lists, partial-departure statuses, role-filtered notifications. Fixed critical production bugs (cascading 503s, stock recalculation, orders API, bulk product import).'
    },
    stack: ['Node.js', 'Express', 'PostgreSQL', 'TypeScript'],
    links: []
  },
  {
    cat: ['web', 'mobile', 'pro'], tags: { fr: 'Web · Mobile · Pro', en: 'Web · Mobile · Pro' }, private: true,
    name: { fr: 'Mawlid — Guide du Pèlerin', en: 'Mawlid — Pilgrim Guide' },
    desc: {
      fr: "Projet d'équipe : application officielle du Mawlid 1448H-2026 à Tivaouane, disponible sur l'App Store et Google Play. Cartographie des lieux, signalement et prise en charge des problèmes, bibliothèque numérique, lecteur MP3, suivi en direct des activités et assistant spirituel (IA). Mon rôle, développeuse backend de l'équipe : schéma PostgreSQL, RPC et Edge Functions, 6 rôles sécurisés par RLS, notifications temps réel, tests de charge k6 Cloud et gestion d'incidents en production. Équipe : Mouhamed Ndiaye, Ousmane Bodian, Fatou Diouf, Alioune et Bineta Dabo.",
      en: 'Team project: official app of Mawlid 1448H-2026 in Tivaouane, available on the App Store and Google Play. Map of key places, incident reporting and follow-up, digital library, MP3 player, live follow-up of activities and a spiritual assistant (AI). My role, backend developer of the team: PostgreSQL schema, RPCs and Edge Functions, 6 roles secured with RLS, realtime notifications, k6 Cloud load testing and production incident handling. Team: Mouhamed Ndiaye, Ousmane Bodian, Fatou Diouf, Alioune and Bineta Dabo.'
    },
    stack: ['Supabase', 'PostgreSQL', 'Flutter', 'React', 'Vite', 'k6'],
    links: [
      { k: 'proj.appstore', url: 'https://apps.apple.com/sn/app/mawlid/id6797128136?l=fr-FR' },
      { k: 'proj.play', url: 'https://play.google.com/store/apps/details?id=com.zawiyatijaniyya.mawlid' }
    ]
  },
  {
    cat: ['web', 'pro'], tags: { fr: 'Web · Pro', en: 'Web · Pro' }, private: true,
    name: { fr: 'Plateforme médicale multi-cabinet', en: 'Multi-clinic medical platform' },
    desc: {
      fr: 'Gestion complète de cabinet médical : patients, rendez-vous, consultations, facturation, caisse, comptabilité et reporting. Cloisonnement multi-tenant par Row Level Security PostgreSQL (~100 tables, ~83 commits).',
      en: 'Complete medical practice management: patients, appointments, consultations, billing, cash desk, accounting and reporting. Multi-tenant isolation through PostgreSQL Row Level Security (~100 tables, ~83 commits).'
    },
    stack: ['React', 'Vite', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    links: []
  },
  {
    cat: ['mobile'], tags: { fr: 'Mobile', en: 'Mobile' }, private: true,
    name: { fr: 'Asamaan — la météo et le ciel étoilé', en: 'Asamaan — weather and starry sky' },
    img: 'assets/asamaan-banner.png',
    desc: {
      fr: "Mon application personnelle : la météo et le ciel étoilé de chez vous. Météo locale, carte du ciel, objets célestes, bulletin et notifications, conçue pour l'Afrique. Développée seule avec Expo et React Native ; publication sur Google Play en préparation.",
      en: 'My personal app: the weather and the starry sky from where you are. Local weather, sky map, celestial objects, bulletin and notifications, designed for Africa. Built solo with Expo and React Native; Google Play release in preparation.'
    },
    stack: ['Expo', 'React Native', 'TypeScript', 'astronomy-engine'],
    links: [{ k: 'proj.video', video: 'assets/asamaan-presentation.mp4' }]
  },
  {
    cat: ['web'], tags: { fr: 'Web', en: 'Web' }, private: true,
    name: { fr: 'Boutique Teranga', en: 'Boutique Teranga' },
    desc: {
      fr: 'Site de boutique en ligne moderne construit avec Next.js et TypeScript.',
      en: 'Modern online shop built with Next.js and TypeScript.'
    },
    stack: ['Next.js', 'TypeScript', 'React'],
    links: []
  }
];
const FEATURED_REPOS = new Set(['cabinet-medical', 'plateau-medical-senghor']);

const EXPERIENCE = [
  {
    when: { fr: 'Avr. 2026 — Aujourd\'hui', en: 'Apr. 2026 — Present' },
    title: { fr: 'Développeuse Full-Stack', en: 'Full-Stack Developer' }, org: 'IAI Compétences, Dakar',
    pts: {
      fr: ['Développement et maintenance d\'une plateforme logistique (Node.js / Express / PostgreSQL) pour un acteur portuaire de Dakar.', 'Résolution de bugs critiques à fort impact en production.', 'Plateforme médicale multi-cabinet (React/Vite + Supabase, RLS) : contributrice la plus active du projet.'],
      en: ['Development and maintenance of a logistics platform (Node.js / Express / PostgreSQL) for a port operator in Dakar.', 'Fixed high-impact critical production bugs.', 'Multi-clinic medical platform (React/Vite + Supabase, RLS): most active contributor.']
    }
  },
  {
    when: { fr: 'Juin — Août 2026', en: 'Jun — Aug 2026' },
    title: { fr: 'Testeuse QA (stage de 3 mois)', en: 'QA Tester (3-month internship)' }, org: 'SecurAxe SUARL, Dakar',
    pts: { fr: ['Tests fonctionnels de la plateforme web Archiva et de l\'application mobile Kaaysign.'], en: ['Functional testing of the Archiva web platform and the Kaaysign mobile app.'] }
  },
  {
    when: { fr: '2026', en: '2026' },
    title: { fr: 'Développeuse Backend — Mawlid, Guide du Pèlerin (CEZAT)', en: 'Backend Developer — Mawlid, Pilgrim Guide (CEZAT)' }, org: 'Gamou de Tivaouane',
    pts: {
      fr: ['Développeuse backend de l\'application mobile/web officielle (Supabase, Flutter, React/Vite).', 'Sécurité par rôles, authentification, temps réel, tests de charge k6 Cloud.'],
      en: ['Backend developer of the team on the official mobile/web app (Supabase, Flutter, React/Vite).', 'Role-based security, authentication, realtime, k6 Cloud load testing.']
    }
  },
  {
    when: { fr: 'Fév. 2026 — Aujourd\'hui', en: 'Feb. 2026 — Present' },
    title: { fr: 'Développeuse Web Freelance', en: 'Freelance Web Developer' }, org: 'Etech Energie',
    pts: { fr: ['Conception et développement du site web de l\'entreprise.'], en: ['Design and development of the company website.'] }
  }
];
const EDUCATION = [
  { when: '2023–2025', title: { fr: 'Master 2 — Systèmes d\'Information Répartis', en: "Master's — Distributed Information Systems" }, org: { fr: 'UCAD, Dakar · Mention Bien', en: 'UCAD, Dakar · With honours' } },
  { when: '2022–2023', title: { fr: 'Master 1 Informatique', en: "Master's (M1) Computer Science" }, org: 'UCAD, Dakar' },
  { when: '2021–2022', title: { fr: 'Licence 3 Informatique', en: "Bachelor's (L3) Computer Science" }, org: 'UCAD, Dakar' },
  { when: '2020–2021', title: { fr: 'BTS Informatique Industrielle et Réseaux', en: 'BTS Industrial Computing & Networks' }, org: 'CFPT Sénégal-Japon, Dakar' }
];
const CERTS = {
  fr: [
    ['Sécurité de l\'IoT, TLS/DTLS, VPN', 'AfriConnect+ / Erasmus+ · Mars 2026'],
    ['Systèmes embarqués, IoT industriel, SOPC', 'AfriConnect+ / Erasmus+ · IUT UIDT Thiès · Déc. 2025'],
    ['Analyse de données IoT avec R, conception de carte sous KiCad', 'AfriConnect+ / Erasmus+ · Mai 2025'],
    ['Data mining, IA, réseau LoRaWAN, FreeRTOS sur STM32L4', 'AfriConnect+ / Erasmus+ · Avril 2025']
  ],
  en: [
    ['IoT security, TLS/DTLS, VPN', 'AfriConnect+ / Erasmus+ · March 2026'],
    ['Embedded systems, industrial IoT, SOPC', 'AfriConnect+ / Erasmus+ · IUT UIDT Thiès · Dec. 2025'],
    ['IoT data analysis with R, PCB design in KiCad', 'AfriConnect+ / Erasmus+ · May 2025'],
    ['Data mining, AI, LoRaWAN network, FreeRTOS on STM32L4', 'AfriConnect+ / Erasmus+ · April 2025']
  ]
};
const SKILLS = [
  { t: { fr: 'Backend', en: 'Backend' }, i: ['Node.js / Express', 'Supabase (Auth, RPC, Edge Functions, Realtime, Storage)', 'Java / Spring Boot', 'ASP.NET Core', 'Laravel', 'PHP'] },
  { t: { fr: 'Frontend', en: 'Frontend' }, i: ['React 18/19', 'Vite', 'Next.js', 'Tailwind CSS', 'Three.js / R3F', 'Recharts', 'FullCalendar', 'Bootstrap'] },
  { t: { fr: 'Mobile', en: 'Mobile' }, i: ['Flutter', 'Expo / React Native', 'Android Studio'] },
  { t: { fr: 'Bases de données', en: 'Databases' }, i: ['PostgreSQL', 'MySQL', 'MongoDB', 'Couchbase', 'Oracle', 'SQL Server'] },
  { t: { fr: 'Cloud & Infra', en: 'Cloud & Infra' }, i: ['AWS (EC2, S3, VPC)', 'OpenStack', 'CloudSim', 'Vercel', 'Docker', 'Linux', 'Bash', 'Réseaux TCP/IP'] },
  { t: { fr: 'Data & IA', en: 'Data & AI' }, i: ['Python', 'NumPy', 'Pandas', 'R', 'Machine Learning', 'Deep Learning', 'Systèmes multi-agents (SPADE)'] },
  { t: { fr: 'Outils & méthodes', en: 'Tools & methods' }, i: ['Git / GitHub', 'CI/CD (Jenkins, GitLab CI)', 'k6', 'Jira', 'Trello', 'ClickUp', 'UML', 'BPMN', 'Scrum'] }
];

/* ---------- Rendu ---------- */
let lang = 'fr';
let filter = 'all';
let saved = null;
try { saved = localStorage.getItem('lang'); } catch (e) {}
lang = saved || ((navigator.language || 'fr').startsWith('en') ? 'en' : 'fr');
const $ = (s) => document.querySelector(s);
const t = (k) => I18N[lang][k] ?? k;
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function renderFilters() {
  const keys = ['all', 'research', 'web', 'mobile', 'pro'];
  $('#filters').innerHTML = keys.map((k) => `<button class="${k === filter ? 'on' : ''}" data-f="${k}">${esc(t('f.' + k))}</button>`).join('');
}
function renderCards() {
  $('#cards').innerHTML = PROJECTS.map((p) => `
    <article class="card reveal ${filter === 'all' || p.cat.includes(filter) ? '' : 'hide'}">
      <div class="card-top"><span class="tag">${esc(p.tags[lang])}</span>${p.private ? `<span class="lock">🔒 ${esc(t('proj.private'))}</span>` : ''}</div>
      ${p.img ? `<img class="card-img" src="${p.img}" alt="${esc(p.name[lang])}" loading="lazy">` : ''}
      <h3>${esc(p.name[lang])}</h3>
      <p>${esc(p.desc[lang])}</p>
      <div class="chips">${p.stack.map((s) => `<span>${esc(s)}</span>`).join('')}</div>
      ${p.links.length ? `<div class="card-links">${p.links.map((l) => l.video ? `<button class="link linkbtn" data-video="${l.video}">▶ ${esc(t(l.k))}</button>` : `<a class="link" href="${l.url}" target="_blank" rel="noopener">${esc(t(l.k))} →</a>`).join('')}</div>` : ''}
    </article>`).join('');
  observe();
}
function renderTimeline() {
  $('#timeline').innerHTML = EXPERIENCE.map((e) => `
    <li class="reveal"><span class="when">${esc(e.when[lang])}</span><h4>${esc(e.title[lang])}</h4><div class="org">${esc(e.org)}</div>
    <ul>${e.pts[lang].map((x) => `<li>${esc(x)}</li>`).join('')}</ul></li>`).join('');
  $('#edu').innerHTML = EDUCATION.map((e) => `
    <li class="reveal"><span class="when">${esc(e.when)}</span><h4>${esc(e.title[lang])}</h4><div class="org">${esc(typeof e.org === 'string' ? e.org : e.org[lang])}</div></li>`).join('');
  $('#certs').innerHTML = CERTS[lang].map(([a, b]) => `<li><b>${esc(a)}</b><br>${esc(b)}</li>`).join('');
}
function renderSkills() {
  $('#skillGrid').innerHTML = SKILLS.map((s) => `
    <div class="skill reveal"><h4>${esc(s.t[lang])}</h4><div class="chips">${s.i.map((x) => `<span>${esc(x)}</span>`).join('')}</div></div>`).join('');
}
function applyLang() {
  document.documentElement.lang = lang;
  document.title = t('pageTitle');
  document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  $('#lang').textContent = lang === 'fr' ? 'EN' : 'FR';
  const L = lang.toUpperCase();
  document.querySelectorAll('.js-cv').forEach((a) => { a.href = `assets/CV_Bineta_Dabo_Developpeuse_${L}.pdf`; });
  document.querySelectorAll('.js-cvr').forEach((a) => { a.href = `assets/CV_Bineta_Dabo_Recherche_${L}.pdf`; });
  renderFilters(); renderCards(); renderTimeline(); renderSkills();
  observe();
}

/* ---------- Interactions ---------- */
let io;
function observe() {
  if (!('IntersectionObserver' in window)) { document.querySelectorAll('.reveal').forEach((e) => e.classList.add('in')); return; }
  io = io || new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); if (en.target.classList.contains('stats')) countUp(); }
  }), { threshold: 0.12 });
  document.querySelectorAll('.reveal:not(.in)').forEach((e) => io.observe(e));
}
let counted = false;
function countUp() {
  if (counted) return; counted = true;
  document.querySelectorAll('[data-count]').forEach((el) => {
    const end = +el.dataset.count, start = performance.now(), dur = 1200;
    const step = (now) => { const p = Math.min((now - start) / dur, 1); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  });
}

document.addEventListener('click', (e) => {
  const v = e.target.closest('[data-video]');
  if (v) { const d = $('#videoDlg'), el = d.querySelector('video'); el.src = v.dataset.video; d.showModal(); el.play().catch(() => {}); return; }
  const f = e.target.closest('[data-f]');
  if (f) { filter = f.dataset.f; renderFilters(); renderCards(); }
});
$('#lang').addEventListener('click', () => {
  lang = lang === 'fr' ? 'en' : 'fr';
  try { localStorage.setItem('lang', lang); } catch (e) {}
  applyLang();
});
$('#theme').addEventListener('click', () => {
  const cur = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
  document.documentElement.dataset.theme = cur;
  try { localStorage.setItem('theme', cur); } catch (e) {}
});
$('#burger').addEventListener('click', () => $('#links').classList.toggle('open'));
$('#links').addEventListener('click', (e) => { if (e.target.tagName === 'A') $('#links').classList.remove('open'); });
document.addEventListener('pointermove', (e) => {
  const c = e.target.closest && e.target.closest('.card');
  if (c) { const r = c.getBoundingClientRect(); c.style.setProperty('--mx', e.clientX - r.left + 'px'); c.style.setProperty('--my', e.clientY - r.top + 'px'); }
});
const sections = [...document.querySelectorAll('main section[id]')];
window.addEventListener('scroll', () => {
  const y = scrollY + 140;
  const cur = sections.filter((s) => s.offsetTop <= y).pop();
  document.querySelectorAll('.links a').forEach((a) => a.classList.toggle('active', cur && a.getAttribute('href') === '#' + cur.id));
}, { passive: true });

const dlg = $('#videoDlg');
dlg.addEventListener('close', () => { const el = dlg.querySelector('video'); el.pause(); el.removeAttribute('src'); el.load(); });
dlg.addEventListener('click', (e) => { if (e.target === dlg || e.target.closest('.dlg-close')) dlg.close(); });
$('#year').textContent = new Date().getFullYear();
applyLang();
