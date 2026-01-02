document.addEventListener('DOMContentLoaded', () => {
  // Typed.js initialization for hero subtitle
  const typedTarget = document.getElementById('typed');
  if (typedTarget && typeof Typed !== 'undefined') {
    new Typed('#typed', {
      strings: [
        'Urban Design Enthusiast',
        'Transport Engineering Student',
        'Data Science Explorer'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      loop: true
    });
  }

  // Accordion toggling
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const isOpen = content.style.maxHeight;
      // Close any other open items in the same accordion
      const parentAccordion = header.closest('.accordion');
      parentAccordion.querySelectorAll('.accordion-content').forEach(section => {
        if (section !== content) {
          section.style.maxHeight = null;
          section.previousElementSibling.classList.remove('active');
        }
      });
      // Toggle current item
      if (isOpen) {
        content.style.maxHeight = null;
        header.classList.remove('active');
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        header.classList.add('active');
      }
    });
  });

  // Scroll spy to highlight current nav link
  const sections = document.querySelectorAll('main section');
  const navLinks = document.querySelectorAll('.nav-menu a');
  const observerOptions = { threshold: 0.4 };
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href').substring(1) === entry.target.id);
        });
      }
    });
  }, observerOptions);
  sections.forEach(section => {
    sectionObserver.observe(section);
  });

  // Skills bar animation
  const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.skill-level').forEach(bar => {
          const level = bar.getAttribute('data-level');
          bar.style.width = level + '%';
        });
        skillObserver.disconnect();
      }
    });
  }, { threshold: 0.5 });
  const skillsSection = document.getElementById('skills');
  if (skillsSection) {
    skillObserver.observe(skillsSection);
  }

  // Contact form submission handler
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      // basic validation can be done here if desired
      alert('Thank you for your message! I\'ll get back to you soon.');
      contactForm.reset();
    });
  }
});
