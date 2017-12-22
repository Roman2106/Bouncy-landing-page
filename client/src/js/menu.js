export const menuScroll = (scroll, sfScroll, thisBouncy, menu) => {
  const offsetBouncy = thisBouncy.offsetTop;
  if (scroll > offsetBouncy || sfScroll > offsetBouncy) {
    menu.classList.remove("menu-height");
    menu.classList.add("menu-height");
    menu.classList.add("fixed-menu");
  } else {
    menu.classList.add("menu-height");
    menu.classList.remove("fixed-menu");
  }
};

