// Navbar scroll effect
const navbar = document.querySelector('.navbar-redolotus');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id], .story-section-wrap');
const navLinks = document.querySelectorAll('.nav-links .nav-link');

window.addEventListener('scroll', () => {
  let current = 'home';
  sections.forEach(section => {
    const top = section.offsetTop - 140;
    if (window.scrollY >= top) {
      current = section.getAttribute('id') || current;
    }
  });
  navLinks.forEach(link => {
    const href = link.getAttribute('href').replace('#', '');
    link.classList.toggle('active', href === current);
  });
});

// Scroll reveal
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
);

document.querySelectorAll('.fade-up, .collection-card-img').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 0.1}s`;
  observer.observe(el);
});

// Close mobile menu on link click
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const collapse = document.querySelector('.navbar-collapse');
    if (collapse.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(collapse).hide();
    }
  });
});

// Collection card click → scroll to contact
document.querySelectorAll('.collection-card-img').forEach(card => {
  card.addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });
});
