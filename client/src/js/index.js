import {menuScroll} from "./menu";
import "../sass/index.scss";

const thisBouncy = document.getElementsByClassName("this-bouncy")[0];
const menu = document.getElementsByClassName("menu")[0];

window.onscroll = () => {
  let scroll = document.documentElement.scrollTop;
  let sfScroll = document.body.scrollTop;
  menuScroll(scroll, sfScroll, thisBouncy, menu);
};


