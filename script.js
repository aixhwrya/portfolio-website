// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
          targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      }
  });
});

// Form validation and Formspree submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  // The browser will naturally POST to Formspree because action="https://formspree.io/f/xwpopnow" is set.
  // Just validating here before it happens.
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || message === '') {
      e.preventDefault(); // Stop the form from submitting
      alert('Please fill in all fields.');
      return;
  }

  // Allow Formspree to handle the actual sending
  // Optional: You can show a loading spinner or disable the button while sending
});
