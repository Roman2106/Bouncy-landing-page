export const menuScroll = (scroll, sfScroll, bouncy, menu, headerButtonToTop) => {
  const offsetBouncy = bouncy.offsetTop;
  if (scroll > offsetBouncy || sfScroll > offsetBouncy) {
    menu.classList.add("fixed-menu");
    menu.style.height = "72px";
    headerButtonToTop.setAttribute("class", "anchor-to-top");
    headerButtonToTop.style.display = "block";
  } else if (scroll + 50 > offsetBouncy || sfScroll + 50 > offsetBouncy) {
    menu.style.height = "0px";
  } else {
    menu.classList.remove("fixed-menu");
    headerButtonToTop.classList.remove("anchor-to-top");
    headerButtonToTop.style.display = "none";
  }
};

export const menuShow = navBar => {
  if (navBar.style.top === "0px") {
    navBar.style.top = "-400vh";
  } else {
    navBar.style.top = 0;
  }
};

