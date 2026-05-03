// Subtle parallax on hero stickers
const stickers = document.querySelectorAll('.sticker');
let raf = null;
window.addEventListener('mousemove', (e) => {
  if (raf) return;
  raf = requestAnimationFrame(() => {
    const x = (e.clientX / window.innerWidth - 0.5);
    const y = (e.clientY / window.innerHeight - 0.5);
    stickers.forEach((s, i) => {
      const depth = (i + 1) * 6;
      const baseRot = s.classList.contains('sticker-1') ? 8 : s.classList.contains('sticker-2') ? -6 : -4;
      s.style.transform = `translate(${x * depth}px, ${y * depth}px) rotate(${baseRot + x * 3}deg)`;
    });
    raf = null;
  });
});

// Highlight nav link in view
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');
const obs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(a => {
        a.style.background = a.getAttribute('href') === '#' + id ? 'var(--accent)' : '';
        a.style.color = a.getAttribute('href') === '#' + id ? 'var(--ink)' : '';
        if (a.classList.contains('cta')) { a.style.background = 'var(--accent)'; a.style.color = 'var(--ink)'; }
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => obs.observe(s));