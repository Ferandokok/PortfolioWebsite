document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if(name === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
      return;
    }
  
    // Here you can integrate with a backend service or API to handle form submissions
    // For demonstration, we'll just show an alert
  
    alert(`Thank you, ${name}! Your message has been sent.`);
  
    // Reset the form
    document.getElementById('contact-form').reset();
  });