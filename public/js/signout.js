logoutIcon.addEventListener('click', () => {
  fetch('/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ session: 'logout' }),
  })
    .then(() => {
      window.location.href = '/html';
    })
    .catch((err) => console.log(err));
});
