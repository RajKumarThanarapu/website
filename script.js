const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

// Close mobile menu on link click
navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});
