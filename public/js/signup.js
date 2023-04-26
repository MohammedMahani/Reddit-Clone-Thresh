const signupBtn = document.querySelector('.btn');
const form = document.querySelector('form');
const usernameErr = document.querySelector('.err-username');
const emailErr = document.querySelector('.err-email');
const passErr = document.querySelector('.err-pass');

form.addEventListener('submit', (e) => e.preventDefault());

signupBtn.addEventListener('click', async () => {
  const username = document.querySelector('#usernameInp');
  const email = document.querySelector('#emailInp');
  const password = document.querySelector('#passInp');
  const confPassword = document.querySelector('#confPassInp');

  try {
    fetch('/api/v1/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value,
        confirmPassword: confPassword.value,
      }),
    }).then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          window.location.href = '/logged';
        } else {
          data.data.detalis.forEach((e) => {
            if (e.message.includes('Username')) {
              usernameErr.textContent = e.message;
            } else if (e.message.includes('Email')) {
              emailErr.textContent = e.message;
            } else if (e.message.includes('password')) {
              passErr.textContent = e.message;
            }
          });
        }
      }).catch((err) => console.log(err));
  } catch (err) { console.log(err); }
});
