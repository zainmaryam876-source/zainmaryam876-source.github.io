document.querySelectorAll("[data-year]").forEach(function (element) {
  element.textContent = new Date().getFullYear();
});

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderProjectCards() {
  var grid = document.querySelector("[data-project-grid]");

  if (!grid || !window.PORTFOLIO_PROJECTS) {
    return;
  }

  grid.innerHTML = window.PORTFOLIO_PROJECTS
    .map(function (project) {
      return `
        <article
          class="project-card"
          data-accent="${escapeHtml(project.accent)}"
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

function renderProjectPage() {
  var host = document.querySelector("[data-project-host]");

  if (!host || !window.PORTFOLIO_PROJECTS) {
    return;
  }

  var params = new URLSearchParams(window.location.search);
  var requestedSlug = params.get("id");

  var project =
    window.PORTFOLIO_PROJECTS.find(function (item) {
      return item.slug === requestedSlug;
    }) || window.PORTFOLIO_PROJECTS[0];

  document.title = project.title + " | Krishna Padmanabhan";

  host.innerHTML = `
    <header class="case-hero">
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

    <section
      class="case-layout"
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

      <section class="case-block">
        <div class="section-label">
          Solution workflow · End-to-end lifecycle
        </div>

        <div class="workflow-grid">
          ${project.workflow
            .map(function (step, index) {
              return `
                <article class="workflow-card">
                  <div class="step-number">${index + 1}</div>
                  <h3>${escapeHtml(step[0])}</h3>
                  <p>${escapeHtml(step[1])}</p>
                </article>
              `;
            })
            .join("")}
        </div>
      </section>

      <section class="case-block">
        <div class="section-label">Supporting components</div>

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

          <section class="case-panel">
            <div class="section-label">My contribution</div>
            <h3>Where I added value</h3>
            <p>${escapeHtml(project.role)}</p>
          </section>

        </div>

        <div class="case-column">

          <section class="case-panel">
            <div class="section-label">Technology and methods</div>

            <div class="tool-grid">
              ${project.tools
                .map(function (tool) {
                  return `<span>${escapeHtml(tool)}</span>`;
                })
                .join("")}
            </div>
          </section>

          <section class="case-panel">
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

document.body.classList.add("loaded");

(function highlightActiveNavigation() {
  var currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  document
    .querySelectorAll(".nav-links a, .links a")
    .forEach(function (link) {
      var href = link.getAttribute("href") || "";
      var hrefPage = href.split("#")[0].split("/").pop();

      if (hrefPage === currentPage) {
        link.setAttribute("aria-current", "page");
      }
    });
})();

(function navigationScrollState() {
  var header = document.querySelector(".site-header, .nav");

  if (!header) {
    return;
  }

  function updateHeader() {
    header.classList.toggle("scrolled", window.scrollY > 8);
  }

  updateHeader();

  window.addEventListener("scroll", updateHeader, {
    passive: true
  });
})();
