import {menuScroll, menuShow} from "./menu";
import "../sass/index.scss";

const bouncy = document.getElementsByClassName("this-bouncy")[0];
const navBar = document.getElementsByClassName("nav-bar")[0];
const navButton = document.getElementsByClassName("nav-btn")[0];
const menu = document.getElementsByClassName("top-nav")[0];
const headerButtonToTop = document.getElementsByClassName("header-button-to-top")[0];

window.onscroll = () => {
  let scroll = document.documentElement.scrollTop;
  let sfScroll = document.body.scrollTop;
  menuScroll(scroll, sfScroll, bouncy, menu, headerButtonToTop);
};

navButton.onclick = e => {
  e.preventDefault();
  menuShow(navBar);
};

