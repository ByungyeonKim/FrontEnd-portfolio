import toc from './toc.js';
import * as scrollEvent from './scroll.js';
import { setClipboard } from './clipboard.js';

if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
} else {
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };
}

scrollEvent.showAndHideHeader();
scrollEvent.scrollIntoAbout();
scrollEvent.scrollIntoTopBtn();
toc();
setClipboard();
