const registerFormHandler = async function(event) {
  event.preventDefault();

  const username = document.querySelector('#username-new');
  const email = document.querySelector('#email-new');
  const password = document.querySelector('#password-new');

  const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({
      username: username.value,
      email: email.value,
      password: password.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/protected');
  } else {
    alert('Registration Unsuccessful');
  }
};

document
  .querySelector('#register-form')
  .addEventListener('submit', registerFormHandler);
