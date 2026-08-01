(function () {
  "use strict";

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

  function iconSvg(name) {
    var icons = {
      requirements: '<path d="M4 5h16v11H8l-4 4V5Z"/><path d="M8 9h8M8 13h5"/>',
      products: '<path d="m12 2 8 4.5v9L12 20l-8-4.5v-9L12 2Z"/><path d="m4.5 6.5 7.5 4 7.5-4M12 10.5V20"/>',
      logic: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h.01M11 8h.01M15 8h.01M7 13h4M14 12l3 3-3 3"/>',
      validation: '<path d="M12 2 4 5v6c0 5 3.4 8.6 8 11 4.6-2.4 8-6 8-11V5l-8-3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/>',
      compatibility: '<path d="M8 3v4H4v4H1v5h5v4h5v-3h4v3h5v-5h3v-5h-5V6h-5V3H8Z"/><path d="M8 7h5v4h5v4h-7v3"/>',
      approval: '<circle cx="9" cy="8" r="4"/><path d="M2 21c.6-4.1 3-6 7-6 2.2 0 4 .6 5.2 1.8"/><circle cx="18" cy="18" r="4"/><path d="m16.5 18 1 1 2-2"/>',
      output: '<path d="M6 2h9l5 5v15H6V2Z"/><path d="M14 2v6h6M9 13h7M9 17h5"/>',
      database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
      sliders: '<path d="M4 6h8M16 6h4M4 12h3M11 12h9M4 18h11M19 18h1"/><circle cx="14" cy="6" r="2"/><circle cx="9" cy="12" r="2"/><circle cx="17" cy="18" r="2"/>',
      chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
      workflow: '<rect x="3" y="3" width="6" height="5" rx="1"/><rect x="15" y="3" width="6" height="5" rx="1"/><rect x="9" y="16" width="6" height="5" rx="1"/><path d="M6 8v4h12V8M12 12v4"/>',
      document: '<path d="M6 2h9l5 5v15H6V2Z"/><path d="M14 2v6h6M9 12h7M9 16h7"/>',
      shield: '<path d="M12 2 4 5v6c0 5 3.4 8.6 8 11 4.6-2.4 8-6 8-11V5l-8-3Z"/><path d="M12 8v8M8 12h8"/>',
      transform: '<path d="M4 7h11l-3-3M20 17H9l3 3M15 4l3 3-3 3M9 14l-3 3 3 3"/>',
      api: '<path d="M8 9 4 12l4 3M16 9l4 3-4 3M14 5l-4 14"/>'
    };

    return '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' +
      (icons[name] || icons.document) +
      '</svg>';
  }

  qsa("[data-year]").forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });

  function setProjectVariables(element, accent) {
    var colors = {
      cyan: "#35d4f1",
      blue: "#59aaff",
      violet: "#9f7cff",
      green: "#3ad8aa",
      orange: "#f2b45c",
      magenta: "#eb6aca"
    };

    element.style.setProperty("--project", colors[accent] || colors.cyan);
  }

  function renderProjectCards() {
    var grid = qs("[data-project-grid]");

    if (!grid || !window.PORTFOLIO_PROJECTS) return;

    grid.innerHTML = window.PORTFOLIO_PROJECTS.map(function (project) {
      var previewIndexes = [0, 2, 4, 6];
      var preview = previewIndexes.map(function (index) {
        return project.workflow[index];
      });

      var searchable = [
        project.title,
        project.category,
        project.summary,
        project.tools.join(" "),
        project.skills.join(" ")
      ].join(" ");

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

          <div class="project-preview" aria-label="Workflow preview">
            <div class="preview-flow">
              ${preview.map(function (stage, index) {
                return `
                  <div class="preview-stage">
                    <span class="preview-icon">${iconSvg(stage.icon)}</span>
                    <strong>${escapeHtml(stage.title)}</strong>
                  </div>
                `;
              }).join("")}
            </div>

            <div class="preview-tools">
              ${project.tools.slice(0, 4).map(function (tool) {
                return `<span>${escapeHtml(tool)}</span>`;
              }).join("")}
            </div>
          </div>

          <a href="project.html?id=${encodeURIComponent(project.slug)}">
            Explore case study →
          </a>
        </article>
      `;
    }).join("");

    qsa(".project-card", grid).forEach(function (card) {
      setProjectVariables(card, card.getAttribute("data-accent"));
    });
  }

  function renderProjectPage() {
    var host = qs("[data-project-host]");

    if (!host || !window.PORTFOLIO_PROJECTS) return;

    var slug = new URLSearchParams(window.location.search).get("id");
    var project = window.PORTFOLIO_PROJECTS.find(function (item) {
      return item.slug === slug;
    }) || window.PORTFOLIO_PROJECTS[0];

    document.title = project.title + " | Krishna Padmanabhan";

    host.innerHTML = `
      <header class="case-hero" id="overview">
        <div class="eyebrow">Project case study · Public portfolio edition</div>
        <h1>${escapeHtml(project.title)}</h1>
        <p>${escapeHtml(project.summary)}</p>

        <div class="chip-row">
          ${project.skills.slice(0, 4).map(function (skill) {
            return `<span>${escapeHtml(skill)}</span>`;
          }).join("")}
        </div>
      </header>

      <nav class="case-subnav" aria-label="Case study navigation">
        <a href="#overview">Overview</a>
        <a href="#workflow">Workflow</a>
        <a href="#contribution">Contribution</a>
        <a href="#technology">Technology</a>
        <a href="#outcome">Outcome</a>
      </nav>

      <section class="infographic reveal" data-accent="${escapeHtml(project.accent)}">
        <section class="info-hero">
          <div class="info-title">
            <div class="section-label">Enterprise case study</div>
            <h2>${escapeHtml(project.title)}</h2>
            <p>${escapeHtml(project.summary)}</p>

            <div class="info-capabilities">
              ${project.skills.slice(0, 4).map(function (skill) {
                return `<span>${escapeHtml(skill)}</span>`;
              }).join("")}
            </div>
          </div>

          <aside class="info-glance">
            <div class="section-label">At a glance</div>

            <div class="glance-item">
              <span>${iconSvg("products")}</span>
              <div><small>Domain</small><strong>${escapeHtml(project.glance.domain)}</strong></div>
            </div>

            <div class="glance-item">
              <span>${iconSvg("approval")}</span>
              <div><small>My role</small><strong>${escapeHtml(project.glance.role)}</strong></div>
            </div>

            <div class="glance-item">
              <span>${iconSvg("workflow")}</span>
              <div><small>Team</small><strong>${escapeHtml(project.glance.team)}</strong></div>
            </div>

            <div class="glance-item">
              <span>${iconSvg("document")}</span>
              <div><small>Delivery</small><strong>${escapeHtml(project.glance.delivery)}</strong></div>
            </div>
          </aside>
        </section>

        <section class="info-section" id="workflow">
          <div class="section-label">Solution workflow · End-to-end lifecycle</div>

          <div class="workflow-track">
            ${project.workflow.map(function (stage, index) {
              return `
                <article class="workflow-node" tabindex="0">
                  <span class="node-number">${index + 1}</span>
                  <span class="node-icon">${iconSvg(stage.icon)}</span>
                  <h3>${escapeHtml(stage.title)}</h3>
                  <p>${escapeHtml(stage.description)}</p>

                  <div class="node-tools">
                    ${stage.tools.map(function (tool) {
                      return `<span>${escapeHtml(tool)}</span>`;
                    }).join("")}
                  </div>
                </article>
              `;
            }).join("")}
          </div>
        </section>

        <section class="info-section supporting-section">
          <div class="section-label">Supporting components</div>

          <div class="supporting-track">
            ${project.supporting.map(function (component) {
              return `
                <article class="supporting-item">
                  <span class="supporting-icon">${iconSvg(component.icon)}</span>
                  <div>
                    <h3>${escapeHtml(component.title)}</h3>
                    <p>${escapeHtml(component.description)}</p>
                  </div>
                </article>
              `;
            }).join("")}
          </div>
        </section>

        <section class="info-grid">
          <div class="info-column">
            <article class="detail-panel">
              <div class="section-label">Business challenge</div>
              <div class="panel-body">
                <span class="large-icon">${iconSvg("requirements")}</span>
                <p>${escapeHtml(project.challenge)}</p>
              </div>
            </article>

            <article class="detail-panel" id="contribution">
              <div class="section-label">My contributions</div>
              <div class="panel-body">
                <span class="large-icon">${iconSvg("approval")}</span>
                <ul>
                  ${project.contributions.map(function (item) {
                    return `<li>${escapeHtml(item)}</li>`;
                  }).join("")}
                </ul>
              </div>
            </article>

            <article class="detail-panel">
              <div class="section-label">Key features</div>
              <div class="panel-body">
                <span class="large-icon">${iconSvg("validation")}</span>
                <ul>
                  ${project.features.map(function (item) {
                    return `<li>${escapeHtml(item)}</li>`;
                  }).join("")}
                </ul>
              </div>
            </article>
          </div>

          <div class="info-column">
            <article class="detail-panel" id="technology">
              <div class="section-label">Technology stack</div>
              <div class="technology-grid">
                ${project.tools.map(function (tool, index) {
                  var iconNames = ["products","workflow","database","transform","sliders","document","api","chart"];
                  return `
                    <div class="technology-item">
                      <span>${iconSvg(iconNames[index % iconNames.length])}</span>
                      <strong>${escapeHtml(tool)}</strong>
                    </div>
                  `;
                }).join("")}
              </div>
            </article>

            <article class="detail-panel outcome-panel" id="outcome">
              <div class="section-label">Business outcomes</div>
              <div class="panel-body">
                <span class="large-icon">${iconSvg("chart")}</span>
                <ul>
                  ${project.outcomes.map(function (item) {
                    return `<li>${escapeHtml(item)}</li>`;
                  }).join("")}
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section class="skills-strip">
          <span class="skills-icon">${iconSvg("logic")}</span>
          <div>
            <div class="section-label">Skills demonstrated</div>
            <div class="skills-list">
              ${project.skills.map(function (skill) {
                return `<span>${escapeHtml(skill)}</span>`;
              }).join("")}
            </div>
          </div>
        </section>

        <section class="info-cta">
          <span class="cta-icon">${iconSvg("requirements")}</span>

          <div>
            <div class="section-label">Interested in discussing similar solutions?</div>
            <p>Let’s connect to discuss how product thinking, business analysis, and enterprise delivery can support your team.</p>
          </div>

          <div class="info-cta-actions">
            <a class="button" href="contact.html">Contact me</a>
            <a class="button secondary" href="experience.html">View experience</a>
          </div>
        </section>
      </section>

      <p class="confidentiality-note">
        Sanitized conceptual representation. Employer names, internal product names,
        customer details, proprietary screenshots, and confidential operational information are excluded.
      </p>

      <div class="case-actions">
        <a class="button secondary" href="index.html#projects">Back to projects</a>
      </div>
    `;

    var infographic = qs(".infographic", host);
    setProjectVariables(infographic, project.accent);
  }

  renderProjectCards();
  renderProjectPage();

  function setupFilters() {
    var grid = qs("[data-project-grid]");

    if (!grid || !window.PORTFOLIO_PROJECTS) return;

    var categories = ["All"].concat(Array.from(new Set(
      window.PORTFOLIO_PROJECTS.map(function (project) {
        return project.category;
      })
    )));

    var filter = document.createElement("div");
    filter.className = "project-filter";

    filter.innerHTML = `
      <input class="project-search" type="search" placeholder="Search projects, technologies, or skills" aria-label="Search projects">
      <div class="filter-buttons">
        ${categories.map(function (category, index) {
          return `<button type="button" class="filter-pill${index === 0 ? " is-active" : ""}" data-category="${escapeHtml(category)}">${escapeHtml(category)}</button>`;
        }).join("")}
      </div>
    `;

    grid.parentElement.insertBefore(filter, grid);

    var search = qs(".project-search", filter);
    var buttons = qsa(".filter-pill", filter);
    var active = "All";

    function apply() {
      var query = normalize(search.value);

      qsa(".project-card", grid).forEach(function (card) {
        var categoryMatch = active === "All" || card.getAttribute("data-category") === active;
        var searchMatch = !query || normalize(card.getAttribute("data-search")).includes(query);
        card.hidden = !(categoryMatch && searchMatch);
      });
    }

    search.addEventListener("input", apply);

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        active = button.getAttribute("data-category");

        buttons.forEach(function (item) {
          item.classList.toggle("is-active", item === button);
        });

        apply();
      });
    });
  }

  setupFilters();

  function setupReveal() {
    var elements = qsa(".reveal, .project-card, .timeline-card, .content-card, .contact-row");

    if (!("IntersectionObserver" in window)) {
      elements.forEach(function (element) {
        element.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -28px 0px" });

    elements.forEach(function (element, index) {
      element.classList.add("reveal");
      element.style.transitionDelay = Math.min(index * 28, 180) + "ms";
      observer.observe(element);
    });
  }

  setupReveal();

  function setupNavigation() {
    var current = window.location.pathname.split("/").pop() || "index.html";

    qsa(".nav-links a").forEach(function (link) {
      var page = (link.getAttribute("href") || "").split("#")[0].split("/").pop();

      if (page === current) {
        link.setAttribute("aria-current", "page");
      }
    });

    var header = qs(".site-header");

    if (header) {
      function update() {
        header.classList.toggle("scrolled", window.scrollY > 8);
      }

      update();
      window.addEventListener("scroll", update, { passive: true });
    }
  }

  setupNavigation();

  function setupProgress() {
    var progress = document.createElement("div");
    progress.className = "page-progress";
    document.body.appendChild(progress);

    function update() {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var percentage = max > 0 ? (window.scrollY / max) * 100 : 0;
      progress.style.width = Math.min(100, Math.max(0, percentage)) + "%";
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  }

  setupProgress();

  function setupWorkflowFocus() {
    qsa(".workflow-node").forEach(function (node) {
      node.addEventListener("click", function () {
        var track = node.parentElement;
        var open = !node.classList.contains("is-active");

        qsa(".workflow-node", track).forEach(function (item) {
          item.classList.remove("is-active");
        });

        track.classList.toggle("has-active", open);

        if (open) {
          node.classList.add("is-active");
        }
      });

      node.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          node.click();
        }
      });
    });
  }

  setupWorkflowFocus();

  function finePointer() {
    return window.matchMedia &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  }

  function reducedMotion() {
    return window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  /* =======================================================
     ANIMATED METRIC COUNTERS
  ======================================================= */

  function setupCounters() {
    var nodes = qsa(".metrics strong");

    if (!nodes.length || reducedMotion()) return;

    var pattern = /^(\d[\d,]*)(.*)$/;

    nodes.forEach(function (node) {
      var match = pattern.exec(node.textContent.trim());

      if (!match) return;

      var target = parseInt(match[1].replace(/,/g, ""), 10);
      var suffix = match[2];

      if (!Number.isFinite(target)) return;

      node.textContent = "0" + suffix;

      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;

          observer.disconnect();

          var start = null;
          var duration = 900;

          function step(timestamp) {
            if (start === null) start = timestamp;

            var progress = Math.min(1, (timestamp - start) / duration);
            var eased = 1 - Math.pow(1 - progress, 3);
            var value = Math.round(target * eased);

            node.textContent = value.toLocaleString() + suffix;

            if (progress < 1) window.requestAnimationFrame(step);
          }

          window.requestAnimationFrame(step);
        });
      }, { threshold: 0.4 });

      observer.observe(node);
    });
  }

  setupCounters();

  /* =======================================================
     CURSOR-REACTIVE GLOW
  ======================================================= */

  function setupGlowSurfaces() {
    if (!finePointer() || reducedMotion()) return;

    qsa(".hero-panel, .info-title").forEach(function (surface) {
      surface.addEventListener("mousemove", function (event) {
        var bounds = surface.getBoundingClientRect();

        surface.style.setProperty(
          "--glow-x",
          ((event.clientX - bounds.left) / bounds.width) * 100 + "%"
        );

        surface.style.setProperty(
          "--glow-y",
          ((event.clientY - bounds.top) / bounds.height) * 100 + "%"
        );

        surface.classList.add("is-glowing");
      });

      surface.addEventListener("mouseleave", function () {
        surface.classList.remove("is-glowing");
      });
    });
  }

  setupGlowSurfaces();

  /* =======================================================
     MAGNETIC BUTTONS
  ======================================================= */

  function setupMagneticButtons() {
    if (!finePointer() || reducedMotion()) return;

    qsa(".button").forEach(function (button) {
      button.addEventListener("mousemove", function (event) {
        var bounds = button.getBoundingClientRect();
        var dx = (event.clientX - bounds.left - bounds.width / 2) * 0.28;
        var dy = (event.clientY - bounds.top - bounds.height / 2) * 0.34;

        button.style.transform =
          "translate(" + dx.toFixed(1) + "px, " + dy.toFixed(1) + "px)";
      });

      button.addEventListener("mouseleave", function () {
        button.style.transform = "";
      });
    });
  }

  setupMagneticButtons();

  /* =======================================================
     COPY TO CLIPBOARD
  ======================================================= */

  function setupCopyContact() {
    var rows = qsa(".contact-row").filter(function (row) {
      return row.tagName !== "A" && row.querySelector("span");
    });

    if (!rows.length) return;

    var toast = document.createElement("div");
    toast.className = "copy-toast";
    toast.setAttribute("role", "status");
    document.body.appendChild(toast);

    var toastTimer = null;

    function showToast(message) {
      toast.textContent = message;
      toast.classList.add("is-visible");

      window.clearTimeout(toastTimer);
      toastTimer = window.setTimeout(function () {
        toast.classList.remove("is-visible");
      }, 1800);
    }

    function legacyCopy(text) {
      var scratch = document.createElement("textarea");
      scratch.value = text;
      scratch.setAttribute("readonly", "");
      scratch.style.position = "fixed";
      scratch.style.opacity = "0";
      document.body.appendChild(scratch);
      scratch.select();

      var copied = false;

      try {
        copied = document.execCommand("copy");
      } catch (error) {
        copied = false;
      }

      document.body.removeChild(scratch);
      return copied;
    }

    rows.forEach(function (row) {
      var value = row.querySelector("span");

      row.classList.add("is-copyable");
      row.setAttribute("tabindex", "0");
      row.setAttribute("role", "button");
      row.setAttribute("aria-label", "Copy " + value.textContent.trim());

      function copy() {
        var text = value.textContent.trim();

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(
            function () {
              showToast("Copied: " + text);
            },
            function () {
              showToast(legacyCopy(text) ? "Copied: " + text : text);
            }
          );

          return;
        }

        showToast(legacyCopy(text) ? "Copied: " + text : text);
      }

      row.addEventListener("click", copy);

      row.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          copy();
        }
      });
    });
  }

  setupCopyContact();
})();
