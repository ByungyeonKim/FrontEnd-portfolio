import { scrollIntoSection } from './scroll.js';

export default function toc() {
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.menu-list li');
  const sectionIds = [...sections].map((section) => section.id);
  let navItem = navItems[0];

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6,
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio > 0) {
        const index = sectionIds.indexOf(entry.target.id);
        navItem = navItems[index];
        navItem.style.color = 'cornflowerblue';

        if (index == 6) {
          navItem = navItems[index - 1];
        } else {
          navItem = navItems[index + 1];
          navItem.style.color = '#868e96';
        }
      }
    });
  };

  const observer = new IntersectionObserver(
    observerCallback,
    observerOptions
  );

  sections.forEach((section) => observer.observe(section));
  scrollIntoSection();
}
