// main.js
// Small enhancements. The page reads fine without JavaScript.

// ---------- Draggable stickers, notes, avatars, and photos ----------
// Drag to move. Double-click to send an item back to its spot.
let topLayer = 10;

document.querySelectorAll("[data-drag]").forEach((el) => {
  let startX = 0;
  let startY = 0;
  let baseX = 0;
  let baseY = 0;

  el.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    el.setPointerCapture(event.pointerId);
    startX = event.clientX;
    startY = event.clientY;
    baseX = parseFloat(el.style.getPropertyValue("--dx")) || 0;
    baseY = parseFloat(el.style.getPropertyValue("--dy")) || 0;
    el.style.zIndex = ++topLayer;
    el.classList.add("is-dragging");
  });

  el.addEventListener("pointermove", (event) => {
    if (!el.classList.contains("is-dragging")) return;
    el.style.setProperty("--dx", `${baseX + event.clientX - startX}px`);
    el.style.setProperty("--dy", `${baseY + event.clientY - startY}px`);
  });

  const stop = () => el.classList.remove("is-dragging");
  el.addEventListener("pointerup", stop);
  el.addEventListener("pointercancel", stop);

  el.addEventListener("dblclick", () => {
    el.style.setProperty("--dx", "0px");
    el.style.setProperty("--dy", "0px");
  });
});

// ---------- Project tabs ----------
const tabs = [...document.querySelectorAll('[role="tab"]')];

function selectTab(tab, focus = false) {
  tabs.forEach((t) => {
    const selected = t === tab;
    const panel = document.getElementById(t.getAttribute("aria-controls"));
    t.setAttribute("aria-selected", String(selected));
    t.tabIndex = selected ? 0 : -1;
    panel.hidden = !selected;

    if (selected) {
      panel.classList.remove("is-entering");
      void panel.offsetWidth; // restart the animation
      panel.classList.add("is-entering");
    }
  });
  if (focus) tab.focus();
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectTab(tab));

  tab.addEventListener("keydown", (event) => {
    const keys = {
      ArrowRight: (index + 1) % tabs.length,
      ArrowLeft: (index - 1 + tabs.length) % tabs.length,
      Home: 0,
      End: tabs.length - 1,
    };
    if (event.key in keys) {
      event.preventDefault();
      selectTab(tabs[keys[event.key]], true);
    }
  });
});

// ---------- Copy email ----------
const toast = document.querySelector(".toast");
let toastTimer;

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      showToast("Email copied");
    } catch {
      showToast(button.dataset.copy);
    }
  });
});

// ---------- Manila local time ----------
const clocks = document.querySelectorAll("[data-clock]");
const manilaTime = new Intl.DateTimeFormat("en-US", {
  timeZone: "Asia/Manila",
  hour: "numeric",
  minute: "2-digit",
});

function tick() {
  const now = manilaTime.format(new Date());
  clocks.forEach((clock) => (clock.textContent = now));
}

if (clocks.length) {
  tick();
  setInterval(tick, 30000);
}

// ---------- Highlight the current section in the nav ----------
const navLinks = [...document.querySelectorAll('.nav__link[href^="#"]')];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window && sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          const active = link.getAttribute("href") === `#${entry.target.id}`;
          if (active) link.setAttribute("aria-current", "page");
          else link.removeAttribute("aria-current");
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((section) => observer.observe(section));
}

// ---------- Footer year ----------
const year = document.querySelector("[data-year]");
if (year) year.textContent = new Date().getFullYear();
