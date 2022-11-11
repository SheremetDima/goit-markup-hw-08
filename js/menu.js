(() => {
  const refs = {
    openmenuBtn: document.querySelector('[data-menu-open]'),
    closemenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    body: document.querySelector('body'),
    menuList: document.querySelector('.mob-menu__list'),
  };

  refs.openmenuBtn.addEventListener('click', togglemenu);
  refs.closemenuBtn.addEventListener('click', togglemenu);
  refs.menuList.addEventListener('click', togglemenu);

  function togglemenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
  function removeMenu() {
    refs.menu.classList.add('is-hidden');
    refs.body.classList.remove('no-scroll');
  }
})();
