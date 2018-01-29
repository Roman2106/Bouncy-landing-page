import {menuShow} from "./menu";

export const scrollTo = (linkNav, V) => {
  for (let i = 0; i < linkNav.length; i++) {
    linkNav[i].onclick = e => {
      let w = window.pageYOffset;
      let hash = e.target.href.replace(/[^#]*(.*)/, '$1');
      let t = document.querySelector(hash).getBoundingClientRect().top;
      let start = null;
      const step = time => {
        if (start === null) start = time;
        let progress = time - start;
        let r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
        window.scrollTo(0, r);
        if (r !== w + t) {
          requestAnimationFrame(step)
        } else {
          location.hash = hash
        }
      };
      requestAnimationFrame(step);
      menuShow();
      return false;
    }
  }
};