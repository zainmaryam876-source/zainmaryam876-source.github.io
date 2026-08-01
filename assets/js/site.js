/* =========================================================
   KRISHNA PORTFOLIO — ADVANCED UI/UX ENGINE
   Replace: assets/js/site.js
   Works with the current HTML, site.css, and projects-data.js
========================================================= */

(function () {
  "use strict";

  /* =======================================================
     HELPERS
  ======================================================= */

  function qs(selector, scope) {
    return (scope || document).querySelector(selector);
  }

  function qsa(selector, scope) {
    return Array.from((scope || document).querySelectorAll(selector));
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function normalize(value) {
    return String(value || "").trim().toLowerCase();
  }

  function isFinePointer() {
    return window.matchMedia &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  }

  function prefersReducedMotion() {
    return window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  /* =======================================================
     YEAR
  ======================================================= */

  qsa("[data-year]").forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });

  /* =======================================================
     ADVANCED STYLES
     Injected so this remains a one-file upgrade.
  ======================================================= */

  var style = document.createElement("style");

  style.textContent = `
    :root {
      --page-progress: 0%;
    }

    html {
      view-transition-name: root;
    }

    ::view-transition-old(root),
    ::view-transition-new(root) {
      animation-duration: 260ms;
      animation-timing-function: cubic-bezier(.22, 1, .36, 1);
    }

    .page-progress {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 9999;
      width: var(--page-progress);
      height: 3px;
      pointer-events: none;
      background:
        linear-gradient(
          90deg,
          var(--accent, #35d4f1),
          #7c8cff 60%,
          #ba79ff
        );
      box-shadow:
        0 0 14px rgba(53, 212, 241, .46),
        0 0 28px rgba(124, 140, 255, .22);
    }

    .floating-actions {
      position: fixed;
      right: 18px;
      bottom: 18px;
      z-index: 150;
      display: flex;
      gap: 10px;
    }

    .floating-action {
      width: 46px;
      height: 46px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(54, 87, 121, .9);
      border-radius: 14px;
      background: rgba(7, 17, 31, .82);
      color: #eef5ff;
      cursor: pointer;
      box-shadow:
        0 18px 42px rgba(0, 0, 0, .34),
        inset 0 1px 0 rgba(255, 255, 255, .05);
      backdrop-filter: blur(16px) saturate(140%);
      transition:
        transform .22s cubic-bezier(.22, 1, .36, 1),
        border-color .22s ease,
        background .22s ease,
        box-shadow .22s ease;
    }

    .floating-action:hover {
      transform: translateY(-4px) scale(1.03);
      border-color: var(--accent, #35d4f1);
      background: rgba(13, 35, 59, .95);
      box-shadow:
        0 22px 48px rgba(0, 0, 0, .38),
        0 0 0 1px rgba(53, 212, 241, .18);
    }

    .project-filter {
      margin: 0 0 26px;
      padding: 14px;
      border: 1px solid var(--line, #243b59);
      border-radius: 16px;
      background: rgba(10, 23, 40, .74);
      backdrop-filter: blur(14px);
      box-shadow: 0 14px 34px rgba(0, 0, 0, .18);
    }

    .project-filter-row {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
    }

    .project-search {
      flex: 1 1 280px;
      min-height: 42px;
      padding: 10px 13px;
      border: 1px solid var(--line, #243b59);
      border-radius: 11px;
      background: rgba(11, 24, 42, .92);
      color: var(--text, #f4f7fb);
      outline: none;
      transition:
        border-color .2s ease,
        box-shadow .2s ease,
        background .2s ease;
    }

    .project-search:focus {
      border-color: var(--accent, #35d4f1);
      background: rgba(14, 32, 55, .98);
      box-shadow:
        0 0 0 4px rgba(53, 212, 241, .09),
        0 10px 28px rgba(0, 0, 0, .18);
    }

    .filter-pill {
      min-height: 40px;
      padding: 9px 13px;
      border: 1px solid var(--line, #243b59);
      border-radius: 999px;
      background: rgba(11, 24, 42, .92);
      color: var(--muted, #9eafc3);
      cursor: pointer;
      font-size: .79rem;
      font-weight: 750;
      transition:
        transform .2s ease,
        border-color .2s ease,
        color .2s ease,
        background .2s ease;
    }

    .filter-pill:hover {
      transform: translateY(-2px);
      color: var(--text, #f4f7fb);
      border-color: var(--line-2, #365779);
    }

    .filter-pill.is-active {
      color: #041019;
      border-color: var(--accent, #35d4f1);
      background: var(--accent, #35d4f1);
      box-shadow: 0 10px 24px rgba(53, 212, 241, .16);
    }

    .project-card[hidden] {
      display: none !important;
    }

    .project-empty {
      grid-column: 1 / -1;
      padding: 28px;
      border: 1px dashed var(--line, #243b59);
      border-radius: 16px;
      color: var(--muted, #9eafc3);
      text-align: center;
    }

    /* Premium pointer-following card interaction */
    .project-card {
      --pointer-x: 50%;
      --pointer-y: 50%;
      --tilt-x: 0deg;
      --tilt-y: 0deg;
      --lift: 0px;

      transform:
        perspective(1100px)
        rotateX(var(--tilt-x))
        rotateY(var(--tilt-y))
        translateY(var(--lift));

      transform-style: preserve-3d;
      will-change: transform;
      transition:
        transform 260ms cubic-bezier(.22, 1, .36, 1),
        border-color 220ms ease,
        box-shadow 260ms ease;
    }

    .project-card::after {
      content: "";
      position: absolute;
      inset: 0;
      z-index: 0;
      pointer-events: none;
      border-radius: inherit;
      opacity: 0;
      background:
        radial-gradient(
          360px circle at var(--pointer-x) var(--pointer-y),
          color-mix(in srgb, var(--project-card-accent, #35d4f1) 20%, transparent),
          transparent 62%
        );
      transition: opacity 220ms ease;
    }

    .project-card > * {
      position: relative;
      z-index: 1;
    }

    .project-card.is-interactive {
      --lift: -7px;
      border-color: color-mix(
        in srgb,
        var(--project-card-accent, #35d4f1) 72%,
        var(--line, #243b59)
      );
      box-shadow:
        0 30px 72px rgba(0, 0, 0, .38),
        0 0 0 1px color-mix(
          in srgb,
          var(--project-card-accent, #35d4f1) 18%,
          transparent
        );
    }

    .project-card.is-interactive::after {
      opacity: 1;
    }

    .project-card .project-meta,
    .project-card h3,
    .project-card p,
    .project-card > a {
      transform: translateZ(0);
      transition: transform 260ms cubic-bezier(.22, 1, .36, 1);
    }

    .project-card.is-interactive h3 {
      transform: translateZ(18px);
    }

    .project-card.is-interactive .project-meta,
    .project-card.is-interactive p {
      transform: translateZ(10px);
    }

    .project-card.is-interactive > a {
      transform: translateZ(16px) translateX(4px);
    }

    .command-palette {
      position: fixed;
      inset: 0;
      z-index: 10000;
      display: none;
      align-items: flex-start;
      justify-content: center;
      padding: 10vh 18px 18px;
    }

    .command-palette.is-open {
      display: flex;
    }

    .command-backdrop {
      position: absolute;
      inset: 0;
      background: rgba(2, 8, 16, .8);
      backdrop-filter: blur(12px);
    }

    .command-dialog {
      position: relative;
      z-index: 1;
      width: min(680px, 100%);
      overflow: hidden;
      border: 1px solid rgba(54, 87, 121, .94);
      border-radius: 18px;
      background: #07111f;
      box-shadow: 0 34px 100px rgba(0, 0, 0, .58);
      animation: command-enter 220ms cubic-bezier(.22, 1, .36, 1);
    }

    @keyframes command-enter {
      from {
        opacity: 0;
        transform: translateY(14px) scale(.985);
      }
      to {
        opacity: 1;
        transform: none;
      }
    }

    .command-input {
      width: 100%;
      padding: 18px 20px;
      border: 0;
      border-bottom: 1px solid var(--line, #243b59);
      background: transparent;
      color: var(--text, #f4f7fb);
      outline: none;
      font-size: 1rem;
    }

    .command-results {
      max-height: 58vh;
      overflow: auto;
      padding: 10px;
    }

    .command-item {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 18px;
      padding: 13px 14px;
      border: 0;
      border-radius: 11px;
      background: transparent;
      color: var(--text, #f4f7fb);
      text-align: left;
      cursor: pointer;
      transition: background .16s ease;
    }

    .command-item:hover,
    .command-item.is-selected {
      background: rgba(53, 212, 241, .1);
    }

    .command-item small {
      color: var(--muted, #9eafc3);
    }

    .case-subnav {
      position: sticky;
      top: 68px;
      z-index: 75;
      margin: 0 0 18px;
      border-top: 1px solid rgba(36, 59, 89, .7);
      border-bottom: 1px solid rgba(36, 59, 89, .7);
      background: rgba(7, 17, 31, .9);
      backdrop-filter: blur(14px);
    }

    .case-subnav-inner {
      min-height: 48px;
      display: flex;
      align-items: center;
      gap: 18px;
      overflow-x: auto;
      scrollbar-width: none;
    }

    .case-subnav-inner::-webkit-scrollbar {
      display: none;
    }

    .case-subnav a {
      white-space: nowrap;
      color: var(--muted, #9eafc3);
      font-size: .8rem;
      font-weight: 750;
    }

    .case-subnav a:hover,
    .case-subnav a.is-active {
      color: var(--project-accent, var(--accent, #35d4f1));
    }

    .workflow-card {
      cursor: pointer;
      position: relative;
    }

    .workflow-grid.has-focus .workflow-card:not(.is-focused) {
      opacity: .34;
      transform: scale(.98);
      filter: saturate(.65);
    }

    .workflow-card.is-focused {
      border-color: var(--project-accent, var(--accent, #35d4f1));
      box-shadow:
        0 18px 42px rgba(0, 0, 0, .28),
        0 0 0 1px color-mix(
          in srgb,
          var(--project-accent, #35d4f1) 45%,
          transparent
        );
    }

    .stage-detail {
      display: grid;
      grid-template-rows: 0fr;
      margin-top: 0;
      opacity: 0;
      transition:
        grid-template-rows 220ms ease,
        opacity 220ms ease,
        margin-top 220ms ease;
    }

    .stage-detail > div {
      overflow: hidden;
      padding: 0 12px;
      border: 1px solid transparent;
      border-radius: 10px;
      background: rgba(7, 17, 31, .92);
      color: var(--muted, #9eafc3);
      font-size: .78rem;
      line-height: 1.55;
    }

    .workflow-card.is-focused .stage-detail {
      grid-template-rows: 1fr;
      margin-top: 12px;
      opacity: 1;
    }

    .workflow-card.is-focused .stage-detail > div {
      padding: 12px;
      border-color: var(--line, #243b59);
    }

    .theme-light {
      --bg: #eef3f8;
      --bg-2: #f7fafc;
      --bg-3: #ffffff;
      --panel: #ffffff;
      --panel-2: #f4f7fb;
      --panel-3: #edf3f8;
      --text: #102033;
      --text-soft: #25384d;
      --muted: #64748b;
      --line: #d5e0ea;
      --line-2: #b9c9d9;
      --shadow-sm: 0 14px 36px rgba(15, 35, 58, .08);
      --shadow-lg: 0 28px 80px rgba(15, 35, 58, .12);

      background:
        radial-gradient(circle at 82% -8%, rgba(117, 190, 220, .22) 0, transparent 34%),
        linear-gradient(180deg, #f8fbfe 0%, #eef4f8 100%);
      color: var(--text);
    }

    .theme-light .site-header,
    .theme-light .case-subnav {
      background: rgba(248, 251, 254, .92);
    }

    .theme-light .hero-panel,
    .theme-light .project-card,
    .theme-light .metrics article,
    .theme-light .timeline-card,
    .theme-light .content-card,
    .theme-light .contact-row,
    .theme-light .case-layout,
    .theme-light .case-title-panel,
    .theme-light .at-glance,
    .theme-light .case-block,
    .theme-light .case-panel,
    .theme-light .case-footer-panel,
    .theme-light .workflow-card,
    .theme-light .support-card,
    .theme-light .tool-grid span {
      background: #ffffff;
    }

    .theme-light .floating-action,
    .theme-light .project-filter,
    .theme-light .command-dialog {
      background: rgba(255, 255, 255, .96);
      color: var(--text);
    }

    @media (max-width: 760px) {
      .case-subnav {
        top: 116px;
      }

      .floating-actions {
        right: 12px;
        bottom: 12px;
      }

      .floating-action {
        width: 42px;
        height: 42px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .page-progress {
        display: none;
      }

      .project-card,
      .project-card * {
        transform: none !important;
      }
    }
  `;

  document.head.appendChild(style);

  /* =======================================================
     PAGE TRANSITIONS
  ======================================================= */

  document.addEventListener("click", function (event) {
    var anchor = event.target.closest("a");

    if (!anchor) {
      return;
    }

    var href = anchor.getAttribute("href") || "";

    if (
      !href ||
      href.startsWith("#") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.startsWith("http") ||
      anchor.target === "_blank" ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    if (!("startViewTransition" in document)) {
      return;
    }

    event.preventDefault();

    document.startViewTransition(function () {
      window.location.href = href;
    });
  });

  /* =======================================================
     ACTIVE NAV
  ======================================================= */

  (function highlightActiveNavigation() {
    var current =
      window.location.pathname.split("/").pop() || "index.html";

    qsa(".nav-links a, .links a").forEach(function (link) {
      var href = link.getAttribute("href") || "";
      var page = href.split("#")[0].split("/").pop();

      if (page === current) {
        link.setAttribute("aria-current", "page");
      }
    });
  })();

  /* =======================================================
     NAV SCROLL STATE
  ======================================================= */

  (function setupNavScrollState() {
    var header = qs(".site-header, .nav");

    if (!header) {
      return;
    }

    function update() {
      header.classList.toggle("scrolled", window.scrollY > 8);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
  })();

  /* =======================================================
     SCROLL PROGRESS
  ======================================================= */

  var progress = document.createElement("div");
  progress.className = "page-progress";
  document.body.appendChild(progress);

  function updateProgress() {
    var max =
      document.documentElement.scrollHeight - window.innerHeight;

    var value =
      max > 0
        ? Math.min(100, Math.max(0, (window.scrollY / max) * 100))
        : 0;

    document.documentElement.style.setProperty(
      "--page-progress",
      value + "%"
    );
  }

  updateProgress();

  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);

  /* =======================================================
     PROJECT CARDS
  ======================================================= */

  function renderProjectCards() {
    var grid = qs("[data-project-grid]");

    if (!grid || !window.PORTFOLIO_PROJECTS) {
      return;
    }

    grid.innerHTML = window.PORTFOLIO_PROJECTS
      .map(function (project) {
        var searchable =
          project.title +
          " " +
          project.category +
          " " +
          project.summary +
          " " +
          project.tools.join(" ");

        return `
          <article
            class="project-card reveal"
            data-accent="${escapeHtml(project.accent)}"
            data-category="${escapeHtml(project.category)}"
            data-search="${escapeHtml(searchable)}"
          >
            <div class="project-meta">
              <span>${escapeHtml(project.id)}</span>
              <span>${escapeHtml(project.category)}</span>
            </div>

            <h3>${escapeHtml(project.title)}</h3>

            <p>${escapeHtml(project.summary)}</p>

            <a href="project.html?id=${encodeURIComponent(project.slug)}">
              View case study →
            </a>
          </article>
        `;
      })
      .join("");
  }

  /* =======================================================
     PROJECT PAGE
  ======================================================= */

  function renderProjectPage() {
    var host = qs("[data-project-host]");

    if (!host || !window.PORTFOLIO_PROJECTS) {
      return;
    }

    var params = new URLSearchParams(window.location.search);
    var slug = params.get("id");

    var project =
      window.PORTFOLIO_PROJECTS.find(function (item) {
        return item.slug === slug;
      }) || window.PORTFOLIO_PROJECTS[0];

    document.title = project.title + " | Krishna Padmanabhan";

    host.innerHTML = `
      <header class="case-hero" id="overview">
        <div class="eyebrow">Public portfolio case study</div>

        <h1>${escapeHtml(project.title)}</h1>

        <p>${escapeHtml(project.summary)}</p>

        <div class="chip-row">
          ${project.tools
            .slice(0, 6)
            .map(function (tool) {
              return `<span>${escapeHtml(tool)}</span>`;
            })
            .join("")}
        </div>
      </header>

      <nav class="case-subnav" aria-label="Case study sections">
        <div class="case-subnav-inner">
          <a href="#overview">Overview</a>
          <a href="#workflow">Workflow</a>
          <a href="#contribution">Contribution</a>
          <a href="#technology">Technology</a>
          <a href="#outcome">Outcome</a>
        </div>
      </nav>

      <section
        class="case-layout reveal"
        data-accent="${escapeHtml(project.accent)}"
      >
        <div class="case-top">
          <article class="case-title-panel">
            <div class="section-label">
              Project case study · Public portfolio edition
            </div>

            <h2>${escapeHtml(project.title)}</h2>

            <p>${escapeHtml(project.summary)}</p>
          </article>

          <aside class="at-glance">
            <div class="section-label">At a glance</div>

            <div class="glance-row">
              <span>Domain</span>
              <strong>${escapeHtml(project.category)}</strong>
            </div>

            <div class="glance-row">
              <span>Role</span>
              <strong>Business analysis and product delivery</strong>
            </div>

            <div class="glance-row">
              <span>Project type</span>
              <strong>Sanitized public case study</strong>
            </div>

            <div class="glance-row">
              <span>Delivery</span>
              <strong>Enterprise workflow</strong>
            </div>
          </aside>
        </div>

        <section class="case-block" id="workflow">
          <div class="section-label">
            Solution workflow · End-to-end lifecycle
          </div>

          <div class="workflow-grid">
            ${project.workflow
              .map(function (step, index) {
                return `
                  <article
                    class="workflow-card"
                    tabindex="0"
                    role="button"
                    aria-pressed="false"
                  >
                    <div class="step-number">${index + 1}</div>

                    <h3>${escapeHtml(step[0])}</h3>

                    <p>${escapeHtml(step[1])}</p>

                    <div class="stage-detail">
                      <div>
                        <strong>Contribution focus:</strong>
                        requirements clarity, validation, stakeholder alignment,
                        and delivery readiness for this stage.
                      </div>
                    </div>
                  </article>
                `;
              })
              .join("")}
          </div>
        </section>

        <section class="case-block">
          <div class="section-label">
            Supporting components
          </div>

          <div class="support-grid">
            ${project.supporting
              .map(function (item) {
                return `
                  <article class="support-card">
                    <h3>${escapeHtml(item[0])}</h3>
                    <p>${escapeHtml(item[1])}</p>
                  </article>
                `;
              })
              .join("")}
          </div>
        </section>

        <div class="case-insights">
          <div class="case-column">
            <section class="case-panel">
              <div class="section-label">Business challenge</div>
              <h3>What needed to be solved</h3>
              <p>${escapeHtml(project.challenge)}</p>
            </section>

            <section class="case-panel" id="contribution">
              <div class="section-label">My contribution</div>
              <h3>Where I added value</h3>
              <p>${escapeHtml(project.role)}</p>
            </section>
          </div>

          <div class="case-column">
            <section class="case-panel" id="technology">
              <div class="section-label">Technology and methods</div>

              <div class="tool-grid">
                ${project.tools
                  .map(function (tool) {
                    return `<span>${escapeHtml(tool)}</span>`;
                  })
                  .join("")}
              </div>
            </section>

            <section class="case-panel" id="outcome">
              <div class="section-label">Business outcome</div>
              <h3>Result</h3>
              <p>${escapeHtml(project.outcome)}</p>
            </section>
          </div>
        </div>

        <section class="case-block">
          <div class="section-label">Skills demonstrated</div>

          <div class="skills-row">
            ${project.skills
              .map(function (skill) {
                return `<span>${escapeHtml(skill)}</span>`;
              })
              .join("")}
          </div>
        </section>

        <footer class="case-footer-panel">
          <div>
            <div class="section-label">Confidentiality</div>
            <p>
              Employer names, product names, customer details,
              proprietary screenshots and internal metrics are
              intentionally excluded.
            </p>
          </div>

          <a class="button" href="contact.html">Contact</a>
        </footer>
      </section>

      <div class="case-actions">
        <a class="button" href="index.html#projects">
          Back to projects
        </a>

        <a class="button secondary" href="experience.html">
          View experience
        </a>
      </div>
    `;
  }

  renderProjectCards();
  renderProjectPage();

  /* =======================================================
     FILTERS
  ======================================================= */

  function setupFilters() {
    var grid = qs("[data-project-grid]");

    if (!grid || !window.PORTFOLIO_PROJECTS) {
      return;
    }

    var categories = ["All"].concat(
      Array.from(
        new Set(
          window.PORTFOLIO_PROJECTS.map(function (project) {
            return project.category;
          })
        )
      )
    );

    var shell = document.createElement("div");
    shell.className = "project-filter";

    shell.innerHTML = `
      <div class="project-filter-row">
        <input
          class="project-search"
          type="search"
          placeholder="Search projects, technologies, or skills"
          aria-label="Search case studies"
        >

        ${categories
          .map(function (category, index) {
            return `
              <button
                class="filter-pill${index === 0 ? " is-active" : ""}"
                type="button"
                data-category="${escapeHtml(category)}"
              >
                ${escapeHtml(category)}
              </button>
            `;
          })
          .join("")}
      </div>
    `;

    grid.parentElement.insertBefore(shell, grid);

    var search = qs(".project-search", shell);
    var buttons = qsa(".filter-pill", shell);
    var activeCategory = "All";

    function applyFilters() {
      var query = normalize(search.value);
      var visible = 0;

      qsa(".project-card", grid).forEach(function (card) {
        var matchesCategory =
          activeCategory === "All" ||
          card.getAttribute("data-category") === activeCategory;

        var matchesSearch =
          !query ||
          normalize(card.getAttribute("data-search")).includes(query);

        var show = matchesCategory && matchesSearch;

        card.hidden = !show;

        if (show) {
          visible += 1;
        }
      });

      var empty = qs(".project-empty", grid);

      if (empty) {
        empty.remove();
      }

      if (visible === 0) {
        empty = document.createElement("div");
        empty.className = "project-empty";
        empty.textContent = "No case studies match your search.";
        grid.appendChild(empty);
      }
    }

    search.addEventListener("input", applyFilters);

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        activeCategory = button.getAttribute("data-category");

        buttons.forEach(function (item) {
          item.classList.toggle("is-active", item === button);
        });

        applyFilters();
      });
    });
  }

  setupFilters();

  /* =======================================================
     PREMIUM CARD INTERACTION
  ======================================================= */

  function setupPremiumCards() {
    if (!isFinePointer() || prefersReducedMotion()) {
      return;
    }

    qsa(".project-card").forEach(function (card) {
      var bounds = null;

      function reset() {
        card.classList.remove("is-interactive");
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
        card.style.setProperty("--pointer-x", "50%");
        card.style.setProperty("--pointer-y", "50%");
      }

      card.addEventListener("mouseenter", function () {
        bounds = card.getBoundingClientRect();
        card.classList.add("is-interactive");
      });

      card.addEventListener("mousemove", function (event) {
        if (!bounds) {
          bounds = card.getBoundingClientRect();
        }

        var x = event.clientX - bounds.left;
        var y = event.clientY - bounds.top;

        var px = x / bounds.width;
        var py = y / bounds.height;

        var tiltY = (px - 0.5) * 5;
        var tiltX = (0.5 - py) * 4;

        card.style.setProperty("--pointer-x", px * 100 + "%");
        card.style.setProperty("--pointer-y", py * 100 + "%");
        card.style.setProperty("--tilt-x", tiltX.toFixed(2) + "deg");
        card.style.setProperty("--tilt-y", tiltY.toFixed(2) + "deg");
      });

      card.addEventListener("mouseleave", reset);
      card.addEventListener("blur", reset, true);
    });
  }

  setupPremiumCards();

  /* =======================================================
     WORKFLOW INTERACTION
  ======================================================= */

  function setupWorkflowInteraction() {
    var grid = qs(".workflow-grid");

    if (!grid) {
      return;
    }

    var cards = qsa(".workflow-card", grid);

    function clear() {
      grid.classList.remove("has-focus");

      cards.forEach(function (card) {
        card.classList.remove("is-focused");
        card.setAttribute("aria-pressed", "false");
      });
    }

    function toggle(card) {
      var open = !card.classList.contains("is-focused");

      clear();

      if (open) {
        grid.classList.add("has-focus");
        card.classList.add("is-focused");
        card.setAttribute("aria-pressed", "true");
      }
    }

    cards.forEach(function (card) {
      card.addEventListener("click", function () {
        toggle(card);
      });

      card.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggle(card);
        }
      });
    });

    document.addEventListener("click", function (event) {
      if (!event.target.closest(".workflow-card")) {
        clear();
      }
    });
  }

  setupWorkflowInteraction();

  /* =======================================================
     ACTIVE CASE SUBNAV
  ======================================================= */

  function setupCaseTracking() {
    var links = qsa(".case-subnav a");

    if (!links.length) {
      return;
    }

    var sections = links
      .map(function (link) {
        return qs(link.getAttribute("href"));
      })
      .filter(Boolean);

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }

          links.forEach(function (link) {
            link.classList.toggle(
              "is-active",
              link.getAttribute("href") === "#" + entry.target.id
            );
          });
        });
      },
      {
        rootMargin: "-32% 0px -58% 0px",
        threshold: 0
      }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  setupCaseTracking();

  /* =======================================================
     REVEAL
  ======================================================= */

  function setupReveal() {
    var targets = qsa(
      ".reveal, .project-card, .timeline-card, .content-card, .contact-row, .case-layout"
    );

    if (!targets.length) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (element) {
        element.classList.add("is-visible");
      });

      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px"
      }
    );

    targets.forEach(function (element, index) {
      element.classList.add("reveal");
      element.style.transitionDelay = Math.min(index * 34, 200) + "ms";
      observer.observe(element);
    });
  }

  setupReveal();

  /* =======================================================
     THEME
  ======================================================= */

  function preferredTheme() {
    var saved = localStorage.getItem("portfolio-theme");

    if (saved === "light" || saved === "dark") {
      return saved;
    }

    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  }

  function applyTheme(theme) {
    document.body.classList.toggle("theme-light", theme === "light");
    localStorage.setItem("portfolio-theme", theme);

    var button = qs("[data-theme-toggle]");

    if (button) {
      button.textContent = theme === "light" ? "☾" : "☀";
      button.setAttribute(
        "aria-label",
        theme === "light"
          ? "Switch to dark theme"
          : "Switch to light theme"
      );
    }
  }

  /* =======================================================
     COMMAND PALETTE
  ======================================================= */

  var commandItems = [
    { title: "Home", description: "Portfolio homepage", href: "index.html" },
    { title: "Experience", description: "Professional experience", href: "experience.html" },
    { title: "About", description: "Professional approach", href: "about.html" },
    { title: "Contact", description: "Contact information", href: "contact.html" }
  ];

  if (window.PORTFOLIO_PROJECTS) {
    window.PORTFOLIO_PROJECTS.forEach(function (project) {
      commandItems.push({
        title: project.title,
        description: project.category,
        href: "project.html?id=" + encodeURIComponent(project.slug)
      });
    });
  }

  var palette = document.createElement("div");
  palette.className = "command-palette";
  palette.setAttribute("aria-hidden", "true");

  palette.innerHTML = `
    <div class="command-backdrop" data-command-close></div>

    <div
      class="command-dialog"
      role="dialog"
      aria-modal="true"
      aria-label="Quick navigation"
    >
      <input
        class="command-input"
        type="search"
        placeholder="Search pages and case studies"
        aria-label="Search pages and case studies"
      >

      <div class="command-results"></div>
    </div>
  `;

  document.body.appendChild(palette);

  var commandInput = qs(".command-input", palette);
  var commandResults = qs(".command-results", palette);
  var selectedIndex = 0;

  function renderCommandResults(query) {
    var filtered = commandItems.filter(function (item) {
      return normalize(item.title + " " + item.description)
        .includes(normalize(query));
    });

    if (!filtered.length) {
      commandResults.innerHTML =
        '<div class="project-empty">No results found.</div>';
      return;
    }

    selectedIndex = Math.min(selectedIndex, filtered.length - 1);

    commandResults.innerHTML = filtered
      .map(function (item, index) {
        return `
          <button
            class="command-item${index === selectedIndex ? " is-selected" : ""}"
            type="button"
            data-href="${escapeHtml(item.href)}"
          >
            <span>${escapeHtml(item.title)}</span>
            <small>${escapeHtml(item.description)}</small>
          </button>
        `;
      })
      .join("");
  }

  function openPalette() {
    palette.classList.add("is-open");
    palette.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    selectedIndex = 0;
    commandInput.value = "";
    renderCommandResults("");
    setTimeout(function () {
      commandInput.focus();
    }, 0);
  }

  function closePalette() {
    palette.classList.remove("is-open");
    palette.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function goToSelected() {
    var selected = qs(".command-item.is-selected", commandResults);

    if (selected) {
      window.location.href = selected.getAttribute("data-href");
    }
  }

  commandInput.addEventListener("input", function () {
    selectedIndex = 0;
    renderCommandResults(commandInput.value);
  });

  commandResults.addEventListener("click", function (event) {
    var item = event.target.closest(".command-item");

    if (item) {
      window.location.href = item.getAttribute("data-href");
    }
  });

  palette.addEventListener("click", function (event) {
    if (event.target.hasAttribute("data-command-close")) {
      closePalette();
    }
  });

  document.addEventListener("keydown", function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      palette.classList.contains("is-open")
        ? closePalette()
        : openPalette();
      return;
    }

    if (!palette.classList.contains("is-open")) {
      return;
    }

    if (event.key === "Escape") {
      closePalette();
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      var itemsDown = qsa(".command-item", commandResults);
      if (itemsDown.length) {
        selectedIndex = (selectedIndex + 1) % itemsDown.length;
        renderCommandResults(commandInput.value);
      }
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      var itemsUp = qsa(".command-item", commandResults);
      if (itemsUp.length) {
        selectedIndex =
          (selectedIndex - 1 + itemsUp.length) % itemsUp.length;
        renderCommandResults(commandInput.value);
      }
    }

    if (event.key === "Enter") {
      event.preventDefault();
      goToSelected();
    }
  });

  /* =======================================================
     FLOATING ACTIONS
  ======================================================= */

  var floating = document.createElement("div");
  floating.className = "floating-actions";

  floating.innerHTML = `
    <button
      class="floating-action"
      type="button"
      data-command-open
      aria-label="Open quick navigation"
      title="Quick navigation (Ctrl+K)"
    >
      ⌘
    </button>
  `;

  document.body.appendChild(floating);

  qs("[data-command-open]", floating).addEventListener("click", openPalette);

  applyTheme("dark");
})();
