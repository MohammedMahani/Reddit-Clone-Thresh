const signinBtn = document.querySelector('.btn');
const form = document.querySelector('form');

const passErr = document.querySelector('.err-pass');
const emailErr = document.querySelector('.err-email');

form.addEventListener('submit', (e) => e.preventDefault());

signinBtn.addEventListener('click', () => {
  const email = document.querySelector('#emailInp');
  const password = document.querySelector('#passInp');

  fetch('/api/v1/users/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (!data.error) {
        window.location.href = '/logged';
      } else {
        data.data.detalis.forEach((e) => {
          if (e.message.includes('email')) {
            emailErr.textContent = e.message;
          } else if (e.message.includes('password')) {
            passErr.textContent = e.message;
          }
        });
      }
    });
});
