/* =========================================================
   GRILLIT TEAM — EDIT THE TEAM HERE
   ---------------------------------------------------------
   Each person is one block { ... }. To change a name, title
   or phone number, edit the text between the quotes.
   - phone: write it with +20 and spaces, as you want it shown.
   - slug:  the end of the person's link (…/#slug). Don't change
            it after QR codes are printed, or that QR will break.
   - full:  true = full-width tile on the team page.
   If you change a phone number, also update that person's
   file in the /vcards folder (the "Save contact" file).
   ========================================================= */
const TEAM = [
  { name: "Mazen Arkaz",          title: "Co-Founder",                   phone: "+20 114 191 1779", slug: "mazen-arkaz" },
  { name: "Mohaned Arkaz",        title: "Co-Founder",                   phone: "+20 106 100 2305", slug: "mohaned-arkaz" },
  { name: "Amr El-Saadany",       title: "Business Development Manager", phone: "+20 121 095 0022", slug: "amr-el-saadany", full: true },
  { name: "Mohamed El-Moslemany", title: "Marketing Manager",            phone: "+20 100 088 8999", slug: "mohamed-el-moslemany" },
  { name: "Mazen Hamdy",          title: "Operations Manager",           phone: "+20 101 884 5794", slug: "mazen-hamdy" }
];

const COMPANY = {
  name: "Grillit",
  email: "egyptgrillit@gmail.com",
  links: {
    website:   "https://grillitegypt.com/",
    instagram: "https://instagram.com/grillit_egypt",
    tiktok:    "https://tiktok.com/@grillitegypt",
    facebook:  "https://facebook.com/grillitegypt"
  }
};

/* ---------- Icons (inline SVG, no libraries) ---------- */
const S = 'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"';
const stroke = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
const ICONS = {
  arrowUpRight: `<svg ${S} ${stroke} stroke-width="2.6"><path d="M7 17 17 7M8 7h9v9"/></svg>`,
  arrowRight:   `<svg ${S} ${stroke}><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
  phone:        `<svg ${S} ${stroke}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  whatsapp:     `<svg ${S} ${stroke}><path d="M3.5 20.5l1.4-4.1A8.5 8.5 0 1 1 8 19.2z"/><path d="M9 8.6c0 3.4 3 6.4 6.4 6.4l1.1-1.6-2-1-1 .8a5 5 0 0 1-2.7-2.7l.8-1-1-2z" stroke-width="1.6"/></svg>`,
  mail:         `<svg ${S} ${stroke}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6.5 8.5 6.5 8.5-6.5"/></svg>`,
  userPlus:     `<svg ${S} ${stroke}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/></svg>`,
  globe:        `<svg ${S} ${stroke}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>`,
  instagram:    `<svg ${S} ${stroke}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/></svg>`,
  tiktok:       `<svg ${S} fill="currentColor"><path d="M16.6 3c.4 2.3 1.8 3.8 4.1 4v3.1c-1.5.1-2.9-.3-4.1-1.1v6.2c0 3.5-2.8 5.8-5.9 5.8A5.7 5.7 0 0 1 5 15.3c0-3.4 3-6.1 6.6-5.6v3.2a2.6 2.6 0 0 0-3.4 2.4 2.5 2.5 0 0 0 2.6 2.5c1.5 0 2.6-1 2.6-2.8V3z"/></svg>`,
  facebook:     `<svg ${S} fill="currentColor"><path d="M13.5 21v-7.7h2.6l.4-3h-3V8.4c0-.9.3-1.5 1.5-1.5h1.6V4.2A21 21 0 0 0 14.3 4c-2.3 0-3.9 1.4-3.9 4v2.3H7.8v3h2.6V21z"/></svg>`
};

/* ---------- Helpers ---------- */
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
// Keeps hyphenated surnames (e.g. "El-Moslemany") on one line
const nameHTML = (n) => esc(n).split(" ").map((w) => `<span class="nw">${w}</span>`).join(" ");
const digits = (phone) => phone.replace(/\D/g, ""); // "+20 114…" -> "20114…"

const logoTile = (withLine) => `
  <section class="tile span-4 ${withLine ? "hero" : "logo-tile"}">
    <img class="logo" src="assets/logo.png" alt="Grillit" width="112" height="34">
    ${withLine ? `<p class="brand-line">Premium grilling solutions,<br>Made in Egypt.</p>` : ""}
  </section>`;

const socialTiles = () => [
  ["website", "Grillit website", ICONS.globe],
  ["instagram", "Grillit on Instagram", ICONS.instagram],
  ["tiktok", "Grillit on TikTok", ICONS.tiktok],
  ["facebook", "Grillit on Facebook", ICONS.facebook]
].map(([key, label, icon]) => `
  <a class="tile span-1 social" href="${COMPANY.links[key]}" target="_blank" rel="noopener noreferrer" aria-label="${label}">${icon}</a>`
).join("");

/* ---------- Views ---------- */
function teamView() {
  const people = TEAM.map((p) => `
    <a class="tile person ${p.full ? "span-4" : "span-2"}" href="#${p.slug}" aria-label="${esc(p.name)}, ${esc(p.title)} – open contact card">
      <span class="arrow-dot">${ICONS.arrowUpRight}</span>
      <p class="label">${esc(p.title)}</p>
      <p class="name">${nameHTML(p.name)}</p>
    </a>`).join("");

  return `
    ${logoTile(true)}
    ${people}
    ${socialTiles()}
    <p class="footer">© ${COMPANY.name}</p>`;
}

function personView(p) {
  const num = digits(p.phone);
  return `
    ${logoTile(false)}
    <section class="tile span-4 card-head">
      <p class="label">${esc(p.title)}</p>
      <h1 class="name">${nameHTML(p.name)}</h1>
      <p class="phone">${esc(p.phone)}</p>
    </section>

    <a class="tile span-2 action call" href="tel:+${num}" aria-label="Call ${esc(p.name)}">${ICONS.phone}<span>Call</span></a>
    <a class="tile span-2 action" href="https://wa.me/${num}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp ${esc(p.name)}">${ICONS.whatsapp}<span>WhatsApp</span></a>
    <a class="tile span-2 action" href="mailto:${COMPANY.email}" aria-label="Email Grillit">${ICONS.mail}<span>Email</span></a>
    <a class="tile span-2 action save" href="vcards/${p.slug}.vcf" download="${p.slug}.vcf" aria-label="Save ${esc(p.name)} to contacts">${ICONS.userPlus}<span>Save contact</span></a>

    ${socialTiles()}

    <a class="tile span-4 back" href="#">
      <span>View full team</span>${ICONS.arrowRight}
    </a>`;
}

/* ---------- Router: "#slug" shows one person, anything else shows the team ---------- */
function render() {
  const slug = decodeURIComponent(location.hash.replace(/^#\/?/, "")).toLowerCase();
  const person = TEAM.find((p) => p.slug === slug);
  const app = document.getElementById("app");

  app.className = "grid " + (person ? "view-person" : "view-team");
  app.innerHTML = person ? personView(person) : teamView();
  document.title = person ? `${person.name} – Grillit` : "Grillit Team";
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", render);
render();
