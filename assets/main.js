// Navbar scroll effect
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('hidden');
}
function closeMenu() {
  document.getElementById('mobileMenu').classList.add('hidden');
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 75);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Animated counters
document.querySelectorAll('[data-count]').forEach(el => {
  const target = +el.dataset.count;
  const suffix = el.dataset.suffix || '';
  const obs = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    obs.disconnect();
    let n = 0;
    const step = Math.ceil(target / 60);
    const t = setInterval(() => {
      n = Math.min(n + step, target);
      el.textContent = n + suffix;
      if (n >= target) clearInterval(t);
    }, 25);
  });
  obs.observe(el);
});
