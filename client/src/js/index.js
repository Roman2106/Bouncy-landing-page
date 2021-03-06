import {menuScroll, menuShow} from "./menu";
import {fadeIn, fadeOut} from "./fade";
import {scrollTo} from "./scrollTo";
import {barOne, barTwo, barThree} from "./circleProgress";
import {startFirstLine, startSecondLine, startThirdLine} from "./lineProgress";
import Masonry from "masonry-layout";
import Swiper from "swiper";
import {initMap} from "./ymap";
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
const linksServices = document.getElementsByClassName("forClick");
const grid = document.querySelector(".grid");
const subscribeFormButton = document.querySelector(".subscribe-form-button");
const yandexMapOverlay = document.querySelector(".yandexMap-overlay");
const wrapper = document.querySelector(".wrapper");
const arrSocIcons = document.getElementsByClassName("socIcons");
const contactFormButton = document.querySelector(".contact-form-button");

yandexMapOverlay.onclick = () => {
  fadeOut(yandexMapOverlay);
};

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

window.onload = () => {
  initMap();
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

for (let i = 0; i < linksServices.length; i++) {
  linksServices[i].onclick = e => {
    e.preventDefault();
    switch (e.target.className) {
      case "first-services-link forClick":
        barOne.animate(0.85);
        barTwo.animate(0.8);
        barThree.animate(0.75);
        break;
      case "second-services-link forClick":
        barOne.animate(0.75);
        barTwo.animate(0.48);
        barThree.animate(0.96);
        break;
      case "third-services-link forClick":
        barOne.animate(0.55);
        barTwo.animate(0.7);
        barThree.animate(0.85);
        break;
      case "forth-services-link forClick":
        barOne.animate(0.99);
        barTwo.animate(0.9);
        barThree.animate(0.6);
        break;
    }
  };
  barOne.animate(0.6);
  barTwo.animate(0.9);
  barThree.animate(0.35);
}

new Masonry(grid, {
  itemSelector: ".grid-item",
  columnWidth: 270,
  gutter: 8,
  fitWidth: true
});

const firstSwiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 300,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  autoplay: {
    delay: 5000
  },
  on: {
    init: () => {
      startFirstLine();
    },
  }
});

firstSwiper.on("slideChange", () => {
  switch (firstSwiper.activeIndex) {
    case 0:
      startFirstLine();
      break;
    case 1:
      startSecondLine();
      break;
    case 2:
      startThirdLine();
      break;
  }
});

new Swiper(".swiper-container2", {
  slidesPerView: 1,
  spaceBetween: 300,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true
  },
  autoplay: {
    delay: 5000
  },
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2"
  }
});

new Swiper(".swiper-container3", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 300,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination3",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3"
  }
});

subscribeFormButton.onclick = e => {
  e.preventDefault();
};

for (let i = 0; i < arrSocIcons.length; i++) {
  arrSocIcons[i].onclick = e => {
    e.preventDefault();
  }
}

contactFormButton.onclick = e => {
  e.preventDefault();
};