document.querySelectorAll("[data-year]").forEach(function(el){el.textContent=new Date().getFullYear();});

// Highlight the current page in the nav
(function highlightActiveNav(){
  var current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav .links a").forEach(function(link){
    var hrefFile = (link.getAttribute("href") || "").split("#")[0].split("/").pop();
    if (hrefFile === current) {
      link.setAttribute("aria-current", "page");
    }
  });
})();

// Fade the page in once loaded (avoids a flash of unstyled content)
window.addEventListener("load", function(){
  document.body.classList.add("loaded");
});
// Fallback in case 'load' already fired before this script ran
if (document.readyState === "complete") {
  document.body.classList.add("loaded");
}

// Nav background intensifies once the page has scrolled
(function navScrollState(){
  var nav = document.querySelector(".nav");
  if (!nav) return;
  function update() {
    if (window.scrollY > 8) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  }
  update();
  window.addEventListener("scroll", update, { passive: true });
})();

// Scroll-triggered reveal for cards and key content, with a gentle stagger.
// Targets existing elements directly — no HTML changes required.
(function scrollReveal(){
  var targets = document.querySelectorAll(
    ".card, .contact-item, .hero-grid > div, .hero-grid > .portrait-placeholder"
  );
  if (!targets.length) return;

  if (!("IntersectionObserver" in window)) {
    // Progressive enhancement: if unsupported, just show everything
    targets.forEach(function(el){ el.classList.add("reveal", "in-view"); });
    return;
  }

  targets.forEach(function(el){
    el.classList.add("reveal");
  });

  // Stagger by position within their own parent container
  var parents = new Set(Array.prototype.map.call(targets, function(el){ return el.parentElement; }));
  parents.forEach(function(parent){
    var siblings = Array.prototype.filter.call(parent.children, function(c){
      return c.classList.contains("reveal");
    });
    siblings.forEach(function(el, i){
      el.style.transitionDelay = Math.min(i * 70, 420) + "ms";
    });
  });

  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

  targets.forEach(function(el){ observer.observe(el); });
})();
