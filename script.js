// Smooth scrolling for navigation links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Scroll Animation for sections
  const sections = document.querySelectorAll('section');
  const options = { threshold: 0.3 };
  
  const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    });
  }, options);
  
  sections.forEach(section => {
    section.classList.add('fade-in');
    appearOnScroll.observe(section);
  });
  
  // Popup effect for project cards on hover
document.querySelectorAll('#projects .card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('popup');
  });

  card.addEventListener('mouseleave', () => {
    card.classList.remove('popup');
  });
});