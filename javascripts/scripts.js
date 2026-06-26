document.addEventListener('DOMContentLoaded', function () {
  const dialog = document.getElementById('bookingDialog');
  const openButtons = document.querySelectorAll('[data-open-booking]');
  const form = document.getElementById('bookingForm');
  const message = document.getElementById('formMessage');

  openButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.href = '404.html';
    });
  });

  if (dialog) {
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) {
        dialog.close();
      }
    });
  }

  document.querySelectorAll("#top").forEach((anchor) => {
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

  const stickyNav = document.querySelector('.nav');

  if (stickyNav) {
    const lightSelectors = [
      '.hero',
      '.events-hero',
      '.about-top',
      '.shop-showcase',
      '.application_to_participate',
      '.tea-story'
    ];

    const updateNavColor = () => {
      const navMiddleX = window.innerWidth / 2;
      const navMiddleY = stickyNav.getBoundingClientRect().top + stickyNav.offsetHeight / 2;
      const elementBelow = document
        .elementsFromPoint(navMiddleX, navMiddleY + 2)
        .find((element) => !stickyNav.contains(element));
      const isOnDark = Boolean(elementBelow && elementBelow.closest(lightSelectors.join(',')));

      stickyNav.classList.toggle('is-light', isOnDark);
      stickyNav.classList.toggle('is-dark', !isOnDark);
    };

    updateNavColor();
    window.addEventListener('scroll', updateNavColor, { passive: true });
    window.addEventListener('resize', updateNavColor);
  }
});
