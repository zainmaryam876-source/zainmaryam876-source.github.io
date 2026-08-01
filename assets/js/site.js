:root {
  --background: #050b14;
  --background-soft: #081321;

  --surface: #0d1a2c;
  --surface-raised: #11223a;
  --surface-hover: #142844;

  --text: #f4f7fb;
  --text-soft: #d8e2ee;
  --muted: #9eafc3;

  --accent: #35d4f1;
  --accent-soft: rgba(53, 212, 241, 0.12);

  --border: #243b59;
  --border-strong: #365779;

  --shadow-small: 0 14px 36px rgba(0, 0, 0, 0.22);
  --shadow-large: 0 28px 80px rgba(0, 0, 0, 0.38);

  --radius-small: 10px;
  --radius-medium: 16px;
  --radius-large: 26px;

  --page-width: 1180px;

  --project-accent: var(--accent);
}

/* =========================================================
   RESET
========================================================= */

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 92px;
}

body {
  margin: 0;
  min-height: 100vh;

  background:
    radial-gradient(
      circle at 80% -8%,
      rgba(39, 82, 145, 0.48) 0,
      transparent 34%
    ),
    radial-gradient(
      circle at -10% 34%,
      rgba(20, 61, 103, 0.22) 0,
      transparent 30%
    ),
    linear-gradient(
      180deg,
      #07111f 0%,
      var(--background-soft) 42%,
      var(--background) 100%
    );

  color: var(--text);

  font-family:
    Inter,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

  font-size: 16px;
  line-height: 1.65;

  opacity: 0;

  transition: opacity 0.28s ease;
}

body.loaded {
  opacity: 1;
}

body::before {
  content: "";

  position: fixed;
  inset: 0;
  z-index: -1;

  pointer-events: none;

  background-image:
    linear-gradient(
      rgba(255, 255, 255, 0.018) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.018) 1px,
      transparent 1px
    );

  background-size: 54px 54px;

  mask-image:
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.42),
      transparent 72%
    );
}

img {
  display: block;
  max-width: 100%;
}

button,
input,
textarea,
select {
  font: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  color: var(--accent);
}

p {
  text-wrap: pretty;
}

h1,
h2,
h3 {
  text-wrap: balance;
}

ul {
  margin-top: 0;
}

.container {
  width: min(var(--page-width), 100%);
  margin: 0 auto;
  padding-right: 26px;
  padding-left: 26px;
}

/* =========================================================
   ACCESSIBILITY
========================================================= */

a:focus-visible,
button:focus-visible {
  outline: 3px solid rgba(53, 212, 241, 0.72);
  outline-offset: 4px;

  border-radius: 7px;
}

::selection {
  background: rgba(53, 212, 241, 0.28);
  color: var(--text);
}

/* =========================================================
   NAVIGATION
========================================================= */

.site-header,
.nav {
  position: sticky;
  top: 0;
  z-index: 100;

  border-bottom: 1px solid rgba(36, 59, 89, 0.7);

  background: rgba(5, 11, 20, 0.76);

  backdrop-filter: blur(18px) saturate(140%);
  -webkit-backdrop-filter: blur(18px) saturate(140%);

  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}

.site-header.scrolled,
.nav.scrolled {
  border-bottom-color: rgba(54, 87, 121, 0.9);

  background: rgba(5, 11, 20, 0.94);

  box-shadow:
    0 14px 34px rgba(0, 0, 0, 0.22);
}

.nav-row,
.nav .wrap {
  min-height: 68px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 28px;
}

.brand {
  color: var(--text);

  font-size: 0.98rem;
  font-weight: 850;
  letter-spacing: -0.025em;
}

.brand:hover {
  color: var(--accent);
}

.nav-links,
.nav .links {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  gap: 23px;
}

.nav-links a,
.nav .links a {
  position: relative;

  padding: 6px 0;

  color: var(--text-soft);

  font-size: 0.9rem;
  font-weight: 650;

  transition: color 0.2s ease;
}

.nav-links a::after,
.nav .links a::after {
  content: "";

  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;

  height: 2px;

  background: var(--accent);

  transform: scaleX(0);
  transform-origin: right;

  transition: transform 0.24s ease;
}

.nav-links a:hover,
.nav .links a:hover,
.nav-links a[aria-current="page"],
.nav .links a[aria-current="page"] {
  color: var(--accent);
}

.nav-links a:hover::after,
.nav .links a:hover::after,
.nav-links a[aria-current="page"]::after,
.nav .links a[aria-current="page"]::after {
  transform: scaleX(1);
  transform-origin: left;
}

/* =========================================================
   SHARED ELEMENTS
========================================================= */

.eyebrow,
.section-label {
  color: var(--project-accent, var(--accent));

  font-size: 0.73rem;
  font-weight: 850;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.button {
  min-height: 46px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 12px 20px;

  border: 1px solid transparent;
  border-radius: 11px;

  background: var(--accent);
  color: #041019;

  font-size: 0.9rem;
  font-weight: 800;

  box-shadow:
    0 12px 28px rgba(53, 212, 241, 0.16);

  transition:
    transform 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.button:hover {
  color: #041019;

  background: #65e2f6;

  transform: translateY(-2px);

  box-shadow:
    0 16px 34px rgba(53, 212, 241, 0.22);
}

.button.secondary {
  border-color: var(--border-strong);

  background: rgba(255, 255, 255, 0.025);
  color: var(--text);

  box-shadow: none;
}

.button.secondary:hover {
  border-color: var(--accent);

  background: var(--accent-soft);
  color: var(--text);
}

.chip-row,
.hero-actions,
.case-actions,
.skills-row {
  display: flex;
  flex-wrap: wrap;

  gap: 10px;
}

.chip-row span,
.skills-row span,
.skill-chip {
  padding: 7px 12px;

  border: 1px solid rgba(49, 82, 121, 0.96);
  border-radius: 999px;

  background: rgba(16, 33, 58, 0.84);
  color: #aee8f4;

  font-size: 0.76rem;
  font-weight: 700;
}

/* =========================================================
   HOMEPAGE HERO
========================================================= */

.hero {
  min-height: 655px;

  display: grid;
  grid-template-columns:
    minmax(0, 1.35fr)
    minmax(310px, 0.65fr);

  align-items: center;

  gap: 64px;

  padding-top: 82px;
  padding-bottom: 72px;
}

.hero h1 {
  max-width: 850px;

  margin: 16px 0 24px;

  font-size: clamp(3.25rem, 5.3vw, 5.15rem);
  line-height: 0.98;
  letter-spacing: -0.057em;
}

.hero p {
  max-width: 730px;

  margin: 0;

  color: var(--muted);

  font-size: 1.07rem;
  line-height: 1.78;
}

.hero-actions {
  margin-top: 30px;
}

.hero-panel {
  min-height: 365px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 29px;

  border: 1px solid var(--border-strong);
  border-radius: var(--radius-large);

  background:
    radial-gradient(
      circle at 92% 8%,
      rgba(53, 212, 241, 0.14),
      transparent 32%
    ),
    linear-gradient(
      145deg,
      rgba(22, 44, 75, 0.97),
      rgba(9, 23, 40, 0.98)
    );

  box-shadow:
    var(--shadow-large),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);

  transition:
    transform 0.28s ease,
    border-color 0.28s ease;
}

.hero-panel:hover {
  border-color: rgba(53, 212, 241, 0.55);

  transform: translateY(-4px);
}

.hero-panel h2 {
  margin: 12px 0 20px;

  font-size: 1.68rem;
  line-height: 1.2;
  letter-spacing: -0.035em;
}

.monogram {
  width: 84px;
  height: 84px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(90, 132, 180, 0.9);
  border-radius: 22px;

  background:
    linear-gradient(
      145deg,
      #1e3b65,
      #0e1d31
    );

  color: var(--text);

  font-size: 1.82rem;
  font-weight: 900;
  letter-spacing: -0.05em;

  box-shadow:
    0 18px 36px rgba(0, 0, 0, 0.22);
}

/* =========================================================
   METRICS
========================================================= */

.metrics {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  gap: 16px;

  padding-bottom: 78px;
}

.metrics article {
  min-height: 132px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 22px;

  border: 1px solid var(--border);
  border-radius: var(--radius-medium);

  background:
    linear-gradient(
      145deg,
      rgba(15, 29, 49, 0.98),
      rgba(9, 21, 37, 0.98)
    );

  box-shadow: var(--shadow-small);

  transition:
    transform 0.2s ease,
    border-color 0.2s ease;
}

.metrics article:hover {
  border-color: var(--border-strong);

  transform: translateY(-4px);
}

.metrics strong {
  display: block;

  font-size: 1.55rem;
  line-height: 1.15;
  letter-spacing: -0.03em;
}

.metrics span {
  margin-top: 8px;

  color: var(--muted);

  font-size: 0.88rem;
}

/* =========================================================
   PAGE SECTIONS
========================================================= */

.section {
  padding-top: 76px;
  padding-bottom: 82px;
}

.section-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  gap: 36px;

  margin-bottom: 30px;
}

.section-heading h2 {
  margin: 8px 0 0;

  font-size: clamp(2.15rem, 4vw, 3.15rem);
  line-height: 1.05;
  letter-spacing: -0.045em;
}

.section-heading > p {
  max-width: 470px;

  margin: 0;

  color: var(--muted);
}

/* =========================================================
   PROJECT CARDS
========================================================= */

.project-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 20px;
}

.project-card {
  --project-card-accent: var(--accent);

  position: relative;
  isolation: isolate;

  min-height: 292px;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  padding: 28px;

  border: 1px solid var(--border);
  border-radius: var(--radius-medium);

  background:
    linear-gradient(
      145deg,
      rgba(17, 33, 58, 0.98),
      rgba(8, 19, 33, 0.98)
    );

  box-shadow: var(--shadow-small);

  transition:
    transform 0.24s ease,
    border-color 0.24s ease,
    box-shadow 0.24s ease;
}

.project-card::before {
  content: "";

  position: absolute;
  top: -70px;
  right: -70px;
  z-index: -1;

  width: 190px;
  height: 190px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      color-mix(
        in srgb,
        var(--project-card-accent) 28%,
        transparent
      ),
      transparent 66%
    );

  opacity: 0.62;

  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.project-card:hover {
  border-color: var(--project-card-accent);

  transform: translateY(-6px);

  box-shadow:
    0 25px 60px rgba(0, 0, 0, 0.34);
}

.project-card:hover::before {
  opacity: 0.9;

  transform: scale(1.12);
}

.project-card[data-accent="blue"] {
  --project-card-accent: #59aaff;
}

.project-card[data-accent="violet"] {
  --project-card-accent: #9f7cff;
}

.project-card[data-accent="green"] {
  --project-card-accent: #3ad8aa;
}

.project-card[data-accent="orange"] {
  --project-card-accent: #f2b45c;
}

.project-card[data-accent="magenta"] {
  --project-card-accent: #eb6aca;
}

.project-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;

  color: var(--project-card-accent);

  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.project-card h3 {
  max-width: 520px;

  margin: 35px 0 13px;

  font-size: 1.52rem;
  line-height: 1.2;
  letter-spacing: -0.035em;
}

.project-card p {
  max-width: 560px;

  margin: 0;

  color: var(--muted);

  font-size: 0.94rem;
}

.project-card > a {
  display: inline-flex;
  align-items: center;

  gap: 7px;

  margin-top: auto;
  padding-top: 27px;

  color: var(--project-card-accent);

  font-size: 0.9rem;
  font-weight: 800;

  transition: gap 0.2s ease;
}

.project-card > a:hover {
  gap: 12px;
}

/* =========================================================
   STANDARD PAGES
========================================================= */

.page-shell {
  padding-top: 80px;
  padding-bottom: 90px;
}

.page-hero {
  max-width: 930px;

  margin-bottom: 40px;
}

.page-hero h1 {
  margin: 14px 0 22px;

  font-size: clamp(3rem, 5vw, 4.8rem);
  line-height: 1;
  letter-spacing: -0.055em;
}

.page-hero p {
  max-width: 760px;

  margin: 0;

  color: var(--muted);

  font-size: 1.04rem;
}

/* =========================================================
   EXPERIENCE
========================================================= */

.timeline {
  display: grid;

  gap: 18px;
}

.timeline-card {
  display: grid;
  grid-template-columns: 180px minmax(0, 1fr);

  gap: 28px;

  padding: 29px;

  border: 1px solid var(--border);
  border-radius: var(--radius-medium);

  background:
    linear-gradient(
      145deg,
      rgba(15, 29, 49, 0.98),
      rgba(8, 19, 33, 0.98)
    );

  box-shadow: var(--shadow-small);

  transition:
    transform 0.22s ease,
    border-color 0.22s ease;
}

.timeline-card:hover {
  border-color: var(--border-strong);

  transform: translateY(-3px);
}

.timeline-date {
  color: var(--accent);

  font-size: 0.9rem;
  font-weight: 850;
}

.timeline-card h2 {
  margin: 0 0 6px;

  font-size: 1.4rem;
  line-height: 1.25;
  letter-spacing: -0.03em;
}

.timeline-card h3 {
  margin: 0 0 17px;

  color: var(--muted);

  font-size: 0.92rem;
  font-weight: 650;
}

.timeline-card ul {
  margin-bottom: 0;
  padding-left: 20px;
}

.timeline-card li {
  margin-bottom: 8px;

  color: var(--muted);
}

/* =========================================================
   ABOUT
========================================================= */

.about-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 18px;
}

.content-card {
  min-height: 210px;

  padding: 28px;

  border: 1px solid var(--border);
  border-radius: var(--radius-medium);

  background:
    linear-gradient(
      145deg,
      rgba(15, 29, 49, 0.98),
      rgba(8, 19, 33, 0.98)
    );

  box-shadow: var(--shadow-small);

  transition:
    transform 0.22s ease,
    border-color 0.22s ease;
}

.content-card:hover {
  border-color: var(--border-strong);

  transform: translateY(-4px);
}

.content-card h2 {
  margin: 0 0 13px;

  font-size: 1.35rem;
  letter-spacing: -0.03em;
}

.content-card p {
  margin: 0;

  color: var(--muted);
}

/* =========================================================
   CONTACT
========================================================= */

.contact-list {
  display: grid;

  gap: 14px;
}

.contact-row,
.contact-item {
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 22px;

  padding: 18px 20px;

  border: 1px solid var(--border);
  border-radius: 13px;

  background: var(--surface);

  transition:
    transform 0.2s ease,
    border-color 0.2s ease;
}

.contact-row:hover,
.contact-item:hover {
  border-color: var(--accent);

  transform: translateX(4px);
}

.contact-row span,
.contact-item span {
  color: var(--muted);
}

/* =========================================================
   REUSABLE CASE STUDY / INFOGRAPHIC
========================================================= */

.case-shell {
  padding-top: 72px;
  padding-bottom: 84px;
}

.case-hero {
  max-width: 1040px;

  margin-bottom: 35px;
}

.case-hero h1 {
  max-width: 950px;

  margin: 14px 0 21px;

  font-size: clamp(2.8rem, 4.8vw, 4.5rem);
  line-height: 1;
  letter-spacing: -0.056em;
}

.case-hero p {
  max-width: 820px;

  margin: 0;

  color: var(--muted);

  font-size: 1.04rem;
}

.case-hero .chip-row {
  margin-top: 24px;
}

/* Main infographic canvas */

.case-layout {
  --project-accent: var(--accent);

  padding: 20px;

  border: 1px solid var(--border-strong);
  border-radius: 23px;

  background:
    radial-gradient(
      circle at 92% 0%,
      color-mix(
        in srgb,
        var(--project-accent) 12%,
        transparent
      ),
      transparent 32%
    ),
    #07111f;

  box-shadow: var(--shadow-large);
}

.case-layout[data-accent="blue"] {
  --project-accent: #59aaff;
}

.case-layout[data-accent="violet"] {
  --project-accent: #9f7cff;
}

.case-layout[data-accent="green"] {
  --project-accent: #3ad8aa;
}

.case-layout[data-accent="orange"] {
  --project-accent: #f2b45c;
}

.case-layout[data-accent="magenta"] {
  --project-accent: #eb6aca;
}

.case-top {
  display: grid;
  grid-template-columns:
    minmax(0, 1.35fr)
    minmax(270px, 0.65fr);

  gap: 14px;
}

.case-title-panel,
.at-glance,
.case-block,
.case-panel,
.case-footer-panel {
  border: 1px solid var(--border);
  border-radius: 14px;

  background:
    linear-gradient(
      145deg,
      rgba(11, 24, 42, 0.98),
      rgba(7, 18, 32, 0.98)
    );
}

.case-title-panel {
  padding: 22px;
}

.case-title-panel h2 {
  max-width: 840px;

  margin: 10px 0 15px;

  font-size: clamp(2.15rem, 4.4vw, 3.9rem);
  line-height: 1;
  letter-spacing: -0.052em;
}

.case-title-panel p {
  max-width: 760px;

  margin: 0;

  color: var(--muted);
}

.at-glance {
  padding: 20px;
}

.glance-row {
  margin-top: 13px;
  padding-top: 12px;

  border-top: 1px solid rgba(42, 63, 94, 0.64);
}

.glance-row:first-of-type {
  border-top: 0;
}

.glance-row span {
  display: block;

  color: var(--project-accent);

  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
}

.glance-row strong {
  display: block;

  margin-top: 2px;

  font-size: 0.88rem;
}

/* Workflow */

.case-block {
  margin-top: 14px;
  padding: 18px;
}

.workflow-grid {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));

  gap: 10px;

  margin-top: 16px;
}

.workflow-card {
  min-height: 194px;

  padding: 16px 13px;

  border: 1px solid var(--border);
  border-radius: 12px;

  background:
    linear-gradient(
      150deg,
      rgba(15, 31, 54, 0.98),
      rgba(7, 20, 36, 0.98)
    );

  transition:
    transform 0.2s ease,
    border-color 0.2s ease;
}

.workflow-card:hover {
  border-color: var(--project-accent);

  transform: translateY(-4px);
}

.step-number {
  width: 31px;
  height: 31px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 17px;

  border-radius: 50%;

  background: var(--project-accent);
  color: #06101d;

  font-size: 0.78rem;
  font-weight: 900;

  box-shadow:
    0 8px 22px
    color-mix(
      in srgb,
      var(--project-accent) 24%,
      transparent
    );
}

.workflow-card h3 {
  margin: 0 0 9px;

  font-size: 0.91rem;
  line-height: 1.2;
}

.workflow-card p {
  margin: 0;

  color: var(--muted);

  font-size: 0.76rem;
  line-height: 1.55;
}

/* Supporting components */

.support-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));

  gap: 10px;

  margin-top: 16px;
}

.support-card {
  min-height: 125px;

  padding: 14px;

  border: 1px solid var(--border);
  border-radius: 11px;

  background: #0d1b2f;

  transition:
    transform 0.2s ease,
    border-color 0.2s ease;
}

.support-card:hover {
  border-color: var(--project-accent);

  transform: translateY(-3px);
}

.support-card h3 {
  margin: 0 0 8px;

  font-size: 0.83rem;
}

.support-card p {
  margin: 0;

  color: var(--muted);

  font-size: 0.73rem;
  line-height: 1.5;
}

/* Challenge, role, tools, outcome */

.case-insights {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 14px;

  margin-top: 14px;
}

.case-column {
  display: grid;

  gap: 14px;
}

.case-panel {
  padding: 19px;
}

.case-panel h3 {
  margin: 10px 0 11px;

  font-size: 1.14rem;
  letter-spacing: -0.025em;
}

.case-panel p {
  margin: 0;

  color: var(--muted);

  font-size: 0.88rem;
}

.tool-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 9px;

  margin-top: 13px;
}

.tool-grid span {
  padding: 11px;

  border: 1px solid var(--border);
  border-radius: 9px;

  background: #0d1b2f;
  color: var(--text-soft);

  font-size: 0.8rem;
  font-weight: 650;
}

/* Skills */

.skills-row {
  margin-top: 13px;
}

.skills-row span {
  border-color:
    color-mix(
      in srgb,
      var(--project-accent) 50%,
      var(--border)
    );

  color: var(--text-soft);
}

/* Confidentiality footer */

.case-footer-panel {
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 24px;

  margin-top: 14px;
  padding: 19px;
}

.case-footer-panel p {
  max-width: 780px;

  margin: 6px 0 0;

  color: var(--muted);

  font-size: 0.84rem;
}

.case-actions {
  margin-top: 24px;
}

/* =========================================================
   FOOTER
========================================================= */

.site-footer,
.footer {
  padding: 34px 0;

  border-top: 1px solid var(--border);

  color: var(--muted);
}

.footer-row,
.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;

  font-size: 0.86rem;
}

/* =========================================================
   REVEAL ANIMATIONS
========================================================= */

.reveal {
  opacity: 0;

  transform: translateY(20px);

  transition:
    opacity 0.58s ease,
    transform 0.58s cubic-bezier(0.22, 1, 0.36, 1);
}

.reveal.is-visible,
.reveal.in-view {
  opacity: 1;

  transform: translateY(0);
}

/* =========================================================
   TABLET
========================================================= */

@media (max-width: 1050px) {
  .workflow-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .support-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .hero {
    min-height: auto;

    grid-template-columns: 1fr;

    padding-top: 74px;
  }

  .hero-panel {
    min-height: 300px;
  }

  .metrics {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .case-top,
  .case-insights {
    grid-template-columns: 1fr;
  }

  .timeline-card {
    grid-template-columns: 1fr;

    gap: 12px;
  }
}

/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 760px) {
  html {
    scroll-padding-top: 132px;
  }

  .nav-row,
  .nav .wrap {
    align-items: flex-start;
    flex-direction: column;

    gap: 10px;

    padding-top: 13px;
    padding-bottom: 13px;
  }

  .nav-links,
  .nav .links {
    width: 100%;

    justify-content: space-between;

    gap: 12px;
  }

  .nav-links a,
  .nav .links a {
    font-size: 0.8rem;
  }

  .hero {
    gap: 42px;

    padding-top: 62px;
    padding-bottom: 58px;
  }

  .hero h1 {
    font-size: clamp(2.7rem, 11vw, 3.9rem);
  }

  .section-heading {
    align-items: flex-start;
    flex-direction: column;

    gap: 16px;
  }

  .project-grid,
  .about-grid {
    grid-template-columns: 1fr;
  }

  .project-card {
    min-height: 270px;
  }

  .workflow-grid,
  .support-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .workflow-card {
    min-height: 176px;
  }

  .case-footer-panel,
  .footer-row,
  .footer-inner,
  .contact-row,
  .contact-item {
    align-items: flex-start;
    flex-direction: column;
  }
}

/* =========================================================
   SMALL MOBILE
========================================================= */

@media (max-width: 500px) {
  .container {
    padding-right: 20px;
    padding-left: 20px;
  }

  .hero-actions,
  .case-actions {
    align-items: stretch;
    flex-direction: column;
  }

  .button {
    width: 100%;
  }

  .metrics,
  .workflow-grid,
  .support-grid,
  .tool-grid {
    grid-template-columns: 1fr;
  }

  .hero-panel,
  .project-card,
  .timeline-card,
  .content-card {
    padding: 24px;
  }

  .case-layout {
    padding: 13px;

    border-radius: 18px;
  }

  .case-title-panel h2 {
    font-size: 2.25rem;
  }

  .case-block,
  .case-panel,
  .case-title-panel,
  .at-glance,
  .case-footer-panel {
    padding: 16px;
  }
}

/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;

    transition-duration: 0.01ms !important;
  }

  body {
    opacity: 1;
  }

  .reveal {
    opacity: 1;

    transform: none;
  }
}
/* =========================================================
   VISIBILITY FIX
========================================================= */

body {
  opacity: 1 !important;
}

.reveal,
.reveal.is-visible,
.reveal.in-view,
.project-card,
.timeline-card,
.content-card,
.contact-row,
.contact-item,
.case-layout {
  opacity: 1 !important;
  transform: none !important;
}
