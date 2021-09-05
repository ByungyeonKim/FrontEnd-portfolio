'use strict';
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}

const header = document.querySelector('header');

const scrollEvent = () => {
  let lastScrollTop = 8;

  window.addEventListener('scroll', () => {
    let scrollTop = document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      header.style.transform = 'translateY(-68px)';
    } else {
      header.style.transform = 'translateY(0px)';
    }

    if (scrollTop > 0) {
      header.style.backgroundColor = '#fff';
    } else {
      header.style.backgroundColor = 'transparent';
      scrollTop = 8;
    }

    lastScrollTop = scrollTop;
  });
};

scrollEvent();

const navMenu = document.querySelector('.nav-menu');
const scrollIntoAbout = document.querySelector('.scroll-into-about');

const scrollIntoView = (selector) => {
  const scrollInto = document.querySelector(selector);
  scrollInto.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

navMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

const arrowUp = document.querySelector('.arrow-up');

arrowUp.addEventListener('click', () => {
  scrollIntoView('#intro');
});

scrollIntoAbout.addEventListener('click', () => {
  scrollIntoView('#about');
});

const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.menu-list li');
const manuList = document.querySelector('.menu-list');
const sectionIds = [];
sections.forEach((section) => sectionIds.push(section.id));
let navItem = navItems[0];

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

const observerCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio > 0) {
      const index = sectionIds.indexOf(entry.target.id);
      navItem = navItems[index];
      if (entry.boundingClientRect.y > 0) {
        navItem.style.color = 'cornflowerblue';
        navItem.style.transform = 'scale(1.1)';
      } else {
        navItem = navItems[index + 1];
        navItem.style.color = '#868e96';
        navItem.style.transform = 'scale(1)';
      }
    }
  });
};

const observer = new IntersectionObserver(
  observerCallback,
  observerOptions
);

sections.forEach((section) => observer.observe(section));

// ClipboardJS
const clipboard = new ClipboardJS('.copy-btn');
const tooltip = document.querySelector('.tooltip');

clipboard.on('success', (e) => {
  tooltip.innerText = '복사 되었습니다!';
  tooltip.classList.add('show-tooltip');
  setTimeout(() => {
    tooltip.classList.remove('show-tooltip');
  }, 1500);
  e.clearSelection();
});

clipboard.on('error', (e) => {
  tooltip.innerText = '지원하지 않는 브라우저입니다.';
  tooltip.classList.add('show-tooltip');
  setTimeout(() => {
    tooltip.classList.remove('show-tooltip');
  }, 1500);
  e.clearSelection();
});
