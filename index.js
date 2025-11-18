// ...existing code...
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const userEl = document.getElementById('first');
  const passEl = document.getElementById('password');

  const DEFAULT_USER = 'harsha';
  const DEFAULT_PASS = '12345678';

  const showMessage = (text) => {
    let msg = document.getElementById('msg');
    if (!msg) {
      msg = document.createElement('div');
      msg.id = 'msg';
      msg.style.color = '#d00';
      msg.style.marginTop = '12px';
      form.appendChild(msg);
    }
    msg.textContent = text;
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = (userEl.value || '').trim();
    const pass = passEl.value || '';

    if (user !== DEFAULT_USER) {
      showMessage('Username was wrong');
      return;
    }

    if (pass !== DEFAULT_PASS) {
      showMessage('Password was wrong');
      return;
    }

    // password correct -> go to Google
    window.location.href = 'at.html';
  });
});



