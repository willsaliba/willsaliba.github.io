// Reveal content as it enters the viewport. The page remains fully usable
// without JavaScript; this only adds a subtle entrance effect.
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

// Project placeholders currently point to "#". Keep them from jumping to the
// top until real project URLs are added.
document.querySelectorAll('.project-card[href="#"]').forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});
