const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const toggleButton = document.querySelector('.password-toggle');
const statusMessage = document.getElementById('statusMessage');

if (toggleButton && passwordInput) {
  toggleButton.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    toggleButton.textContent = isPassword ? 'Hide' : 'Show';
    toggleButton.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
  });
}

function setStatus(message, type) {
  if (!statusMessage) return;
  statusMessage.textContent = message;
  statusMessage.className = `status-message visible ${type}`;
}

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      setStatus('Please enter both your email and password.', 'error');
      return;
    }

    const button = form.querySelector('.primary-button');
    setStatus('Welcome back! Preparing your feed...', 'success');

    button.disabled = true;
    button.textContent = 'Loading...';

    setTimeout(() => {
      form.reset();
      button.disabled = false;
      button.textContent = 'Continue';
      setStatus('You are signed in. Welcome to Pulse!', 'success');
    }, 1800);
  });
}
