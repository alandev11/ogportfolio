// ============================================
// 1. MOBILE NAV TOGGLE
// ============================================
const navToggle = document.getElementById('nav-toggle');
const sidebar = document.getElementById('sidebar');

navToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  navToggle.classList.toggle('open');
});

// close mobile nav after clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('open');
    navToggle.classList.remove('open');
  });
});

// ============================================
// 2. SCROLL REVEAL (fade/slide sections in)
// ============================================
const sections = document.querySelectorAll('.section');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.15 });

sections.forEach(section => revealObserver.observe(section));

// ============================================
// 3. SCROLL-SPY (highlight active nav link)
// ============================================
const navLinks = document.querySelectorAll('.nav-link');

const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.section === id);
      });
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => spyObserver.observe(section));

// ============================================
// 4. TYPING EFFECT IN HERO TERMINAL
// ============================================
const statuses = ['"learning to code"', '"open to internships"', '"building something new"'];
const typedEl = document.getElementById('typed-status');
let statusIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const current = statuses[statusIndex];

  if (!deleting) {
    typedEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1400); // pause before deleting
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      statusIndex = (statusIndex + 1) % statuses.length;
    }
  }

  setTimeout(typeLoop, deleting ? 40 : 70);
}

typeLoop();

// ============================================
// 5. CONTACT FORM (front-end only demo)
// ============================================
const contactForm = document.getElementById('contact-form');
const formNote = document.getElementById('form-note');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // NOTE: this is a placeholder. To actually receive messages, connect this
  // form to a backend or a service like Formspree / EmailJS / Netlify Forms.
  formNote.textContent = '✓ message captured locally (connect a backend to actually send this).';
  contactForm.reset();
});

// ============================================
// 6. FOOTER YEAR
// ============================================
document.getElementById('year').textContent = new Date().getFullYear();
