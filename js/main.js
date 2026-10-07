document.addEventListener('DOMContentLoaded', () => {
  const togglePassword = document.getElementById('togglePassword');
  const passwordField = document.getElementById('password');

  if (togglePassword && passwordField) {
    togglePassword.addEventListener('click', () => {
      const isHidden = passwordField.type === 'password';
      passwordField.type = isHidden ? 'text' : 'password';
      togglePassword.classList.toggle('fa-eye', isHidden);
      togglePassword.classList.toggle('fa-eye-slash', !isHidden);
    });
  }

  const markAllPresentBtn = document.getElementById('markAllPresent');
  if (markAllPresentBtn) {
    markAllPresentBtn.addEventListener('click', () => {
      document.querySelectorAll('input[type="radio"]').forEach(radio => {
        if (radio.value === 'Present') radio.checked = true;
      });
    });
  }

  const markAllAbsentBtn = document.getElementById('markAllAbsent');
  if (markAllAbsentBtn) {
    markAllAbsentBtn.addEventListener('click', () => {
      document.querySelectorAll('input[type="radio"]').forEach(radio => {
        if (radio.value === 'Absent') radio.checked = true;
      });
    });
  }
});
