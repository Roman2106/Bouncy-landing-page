export const fadeIn = elem => {
  elem.style.opacity = 0;
  elem.style.display = "block";
  const tick = () => {
    elem.style.opacity = +elem.style.opacity + 0.05;
    if (+elem.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 700)
    }
  };
  tick();
};

export const fadeOut = elem => {
  elem.style.opacity = 1;
  const tick = () => {
    elem.style.opacity = +elem.style.opacity - 0.05;
    if (+elem.style.opacity > 0) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 700);
    } else {
      elem.style.display = "none";
    }
  };
  tick();
};