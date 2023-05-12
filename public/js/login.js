const loginIn= async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const email = document.querySelector('').value.trim();
    const password = document.querySelector('').value.trim();
  
    if (email && password) {
      // Send the e-mail and password to the server
      const response = await fetch('', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { '': '' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Error: Incorrect username or password ');
      }
    }
  };
  
  document
    .querySelector('')
    .addEventListener('', loginIn);
  