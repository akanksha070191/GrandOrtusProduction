document.addEventListener('DOMContentLoaded', function () {
  const navItems = document.querySelectorAll('.nav-item.dropdown');
  let timeout;

  navItems.forEach(item => {
    const menu = item.querySelector('.dropdown-menu');

    item.addEventListener('mouseenter', () => {
      clearTimeout(timeout);

      navItems.forEach(otherItem => {
        if (otherItem !== item) {
          const otherMenu = otherItem.querySelector('.dropdown-menu');
          if (otherMenu) {
            otherMenu.style.display = 'none';
            otherMenu.style.opacity = '0';
            otherMenu.style.visibility = 'hidden';
          }
        }
      });

      if (menu) {
        menu.style.display = 'block';
        menu.style.opacity = '1';
        menu.style.visibility = 'visible';
      }
    });

    item.addEventListener('mouseleave', () => {
      timeout = setTimeout(() => {
        if (menu) {
          menu.style.display = 'none';
          menu.style.opacity = '0';
          menu.style.visibility = 'hidden';
        }
      }, 300); 
    });
  });
});