
// ─── LOADER (BULLETPROOF) ───
document.body.style.overflow = 'hidden';

function hideLoader() {
  var loader = document.getElementById('loader');
  if (loader) {
    loader.style.opacity = '0';
    loader.style.visibility = 'hidden';
    document.body.style.overflow = 'auto';
  }
}
// Multiple fallbacks — whichever fires first wins
document.addEventListener('DOMContentLoaded', function() { setTimeout(hideLoader, 1800); });
window.addEventListener('load', function() { setTimeout(hideLoader, 1500); });
setTimeout(hideLoader, 3500); // Absolute safety net

// ─── CURSOR ───
const cur = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0;
document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cur.style.left = mx + 'px'; cur.style.top = my + 'px';
});
setInterval(() => {
  ring.style.left = mx + 'px'; ring.style.top = my + 'px';
}, 80);
document.querySelectorAll('a, button, .skill-box, .service-card, .project-item').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});

// ─── NAVBAR SCROLL ───
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  // Progress bar
  const h = document.documentElement;
  const pct = (window.scrollY / (h.scrollHeight - h.clientHeight)) * 100;
  document.getElementById('progress').style.width = pct + '%';
});

// ─── MOBILE MENU ───
function openMobile() { document.getElementById('mobile-menu').classList.add('open'); }
function closeMobile() { document.getElementById('mobile-menu').classList.remove('open'); }

// ─── THEME TOGGLE ───
const html = document.documentElement;
const icon = document.getElementById('themeIcon');
let dark = true;
document.getElementById('themeToggle').addEventListener('click', () => {
  dark = !dark;
  html.setAttribute('data-theme', dark ? 'dark' : 'light');
  icon.className = dark ? 'fas fa-sun' : 'fas fa-moon';
});

// ─── SCROLL REVEAL ───
const srEls = document.querySelectorAll('.sr');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });
srEls.forEach(el => observer.observe(el));

// Also reveal any .sr elements already in viewport on load
setTimeout(function() {
  srEls.forEach(el => {
    var rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) { el.classList.add('visible'); }
  });
}, 2100);

// ─── FORM SUBMIT ───
function handleSubmit(btn) {
  const orig = btn.innerHTML;
  btn.innerHTML = '<i class="fas fa-check"></i> &nbsp; Message Sent!';
  btn.style.background = '#2d6a4f';
  setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; }, 3000);
}

// ─── SMOOTH ANCHOR ───
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if(target) { e.preventDefault(); target.scrollIntoView({ behavior:'smooth' }); }
  });
});
