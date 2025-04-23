// Wait for DOM to load before applying behaviors
document.addEventListener('DOMContentLoaded', () => {

  // Scroll-in section animation using IntersectionObserver
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('section').forEach(section => observer.observe(section));

  // Initialize particles.js background
  particlesJS('particles-js', {
    particles: {
      number: { value: 60 },
      color: { value: '#3b82f6' },
      shape: { type: 'circle' },
      opacity: { value: 0.5 },
      size: { value: 3 },
      line_linked: {
        enable: true,
        distance: 120,
        color: '#60a5fa',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        attract: { enable: true, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" }
      },
      modes: {
        repulse: { distance: 100 },
        push: { particles_nb: 4 }
      }
    }
  });

  // Theme toggle between dark/light mode
  document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });

  // Animate on Scroll (AOS) initialization
  AOS.init({ duration: 1200 });

});
