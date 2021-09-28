import { showAndHideHeader, scrollClickEvent } from './scroll.js';
import toc from './toc.js';
import setClipboard from './clipboard.js';

if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
} else {
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };
}

showAndHideHeader();
scrollClickEvent();
toc();
setClipboard();
