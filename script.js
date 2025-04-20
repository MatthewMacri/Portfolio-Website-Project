document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
  
    document.querySelectorAll('section').forEach(section => observer.observe(section));
  });
  
  // Init particles.js
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
      move: { enable: true, speed: 2 }
    }
  });  