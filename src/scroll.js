const header = document.querySelector('header');
const aboutBtn = document.querySelector('.scroll-into-about');
const arrowUp = document.querySelector('.arrow-up');
const navMenu = document.querySelector('.nav-menu');

const scrollIntoView = (selector) => {
  const scrollInto = document.querySelector(selector);
  scrollInto.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

const showAndHideHeader = () => {
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    let scrollTop = document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      header.style.transform = 'translateY(-70px)';
    } else {
      header.style.transform = 'translateY(0px)';
    }
    lastScrollTop = scrollTop;
  });
};

const scrollClickEvent = () => {
  arrowUp.addEventListener('click', () => {
    scrollIntoView('#intro');
  });
  aboutBtn.addEventListener('click', () => {
    scrollIntoView('#about');
  });
  navMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
      return;
    }
    scrollIntoView(link);
  });
};

export { showAndHideHeader, scrollClickEvent };
