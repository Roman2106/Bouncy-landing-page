import {menuScroll, menuShow} from "./menu";
import {fadeIn, fadeOut} from "./fade";
import {scrollTo} from "./scrollTo";
import {barOne, barTwo, barThree} from "./circleProgress";
import "../sass/index.scss";

const bouncy = document.getElementsByClassName("this-bouncy")[0];
const navButton = document.getElementsByClassName("nav-btn")[0];
const menu = document.getElementsByClassName("top-nav")[0];
const headerButtonToTop = document.getElementsByClassName("header-button-to-top")[0];
const btnThisBouncyReadMore = document.getElementsByClassName("this-bouncy-readMore")[0];
const readMoreText = document.getElementsByClassName("read-more-text")[0];
const imgIPad = document.getElementsByClassName("iPad")[0];
const firstDetailsLink = document.getElementsByClassName("firstDetailsLink")[0];
const creativeIdeasOne = document.getElementsByClassName("creativeIdeasOne")[0];
const secondDetailsLink = document.getElementsByClassName("secondDetailsLink")[0];
const creativeIdeasTwo = document.getElementsByClassName("creativeIdeasTwo")[0];
const thirdDetailsLink = document.getElementsByClassName("thirdDetailsLink")[0];
const creativeIdeasThree = document.getElementsByClassName("creativeIdeasThree")[0];
const closeCreativeIdeasOne = document.getElementsByClassName("closeCreativeIdeasOne")[0];
const closeCreativeIdeasTwo = document.getElementsByClassName("closeCreativeIdeasTwo")[0];
const closeCreativeIdeasThree = document.getElementsByClassName("closeCreativeIdeasThree")[0];
const featuredProjectSubmit = document.getElementsByClassName("featured-projects-footer-button")[0];
const feedbackPhone = document.getElementsByClassName("feedback")[0];
const closeFeedback = document.getElementsByClassName("closeFeedback")[0];
const linkNav = document.querySelectorAll("[href^=\"#nav\"]");

window.onscroll = () => {
  let scroll = document.documentElement.scrollTop;
  let sfScroll = document.body.scrollTop;
  menuScroll(scroll, sfScroll, bouncy, menu, headerButtonToTop);
};

window.onkeydown = e => {
  switch (e.keyCode) {
    case 27:
      fadeOut(feedbackPhone);
      fadeOut(creativeIdeasOne);
      fadeOut(creativeIdeasTwo);
      fadeOut(creativeIdeasThree);
  }
};

navButton.onclick = e => {
  e.preventDefault();
  menuShow();
};

btnThisBouncyReadMore.onclick = e => {
  e.preventDefault();
  imgIPad.classList.toggle("margin");
  readMoreText.classList.toggle("collapsed");
};

firstDetailsLink.onclick = e => {
  e.preventDefault();
  fadeIn(creativeIdeasOne);
};

secondDetailsLink.onclick = e => {
  e.preventDefault();
  fadeIn(creativeIdeasTwo);
};

thirdDetailsLink.onclick = e => {
  e.preventDefault();
  fadeIn(creativeIdeasThree);
};

closeCreativeIdeasOne.onclick = () => {
  fadeOut(creativeIdeasOne);
};

closeCreativeIdeasTwo.onclick = () => {
  fadeOut(creativeIdeasTwo);
};

closeCreativeIdeasThree.onclick = () => {
  fadeOut(creativeIdeasThree);
};

featuredProjectSubmit.onclick = e => {
  e.preventDefault();
  fadeIn(feedbackPhone);
};

closeFeedback.onclick = () => {
  fadeOut(feedbackPhone);
};

scrollTo(linkNav, 0.4);

barOne.animate(1.0);
barTwo.animate(0.45);
barThree.animate(0.6);

