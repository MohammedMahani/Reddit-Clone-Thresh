const logoutBtn = document.querySelector('.logout-btn');

logoutBtn.addEventListener('click', () => {
  fetch('/api/v1/users/logout')
    .then((res) => res.json())
    .then((res) => {
      if (res.status === 200) {
        window.location.href = '/';
      }
    });
});
