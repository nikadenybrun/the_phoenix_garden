document.addEventListener('DOMContentLoaded', function () {
  const dialog = document.getElementById('bookingDialog');
  const openButtons = document.querySelectorAll('[data-open-booking]');
  const form = document.getElementById('bookingForm');
  const message = document.getElementById('formMessage');

  openButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (dialog && typeof dialog.showModal === 'function') {
        dialog.showModal();
      }
    });
  });

  if (dialog) {
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) {
        dialog.close();
      }
    });
  }

  if (form && message) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const name = form.querySelector('input[type="text"]').value.trim();
      const email = form.querySelector('input[type="email"]').value.trim();

      if (!name || !email) {
        message.textContent = 'Пожалуйста, заполните имя и email.';
        message.style.color = '#9b2d24';
        return;
      }

      message.textContent = 'Спасибо! Мы свяжемся с вами в ближайшее время.';
      message.style.color = '#245b35';
      form.reset();

      setTimeout(() => {
        message.textContent = '';
        if (dialog) {
          dialog.close();
        }
      }, 2500);
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (event) {
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
