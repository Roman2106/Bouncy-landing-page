import ProgressBar from "progressbar.js";

const params = {
  strokeWidth: 4,
  easing: "easeInOut",
  duration: 1400,
  color: "#00BD99",
  trailColor: "#eee",
  trailWidth: 1,
  svgStyle: {width: "100%", height: "100%"},
  text: {
    style: {
      color: "#999",
      position: "absolute",
      right: "0",
      top: "0",
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: "#FFEA82"},
  to: {color: "#ED6A5A"},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + " %");
  }
};

let lineBar1 = new ProgressBar.Line("#slider-progress-item1", params);
let lineBar2 = new ProgressBar.Line("#slider-progress-item2", params);
let lineBar3 = new ProgressBar.Line("#slider-progress-item3", params);
let lineBar4 = new ProgressBar.Line("#slider-progress-item4", params);
let lineBar5 = new ProgressBar.Line("#slider-progress-item5", params);
let lineBar6 = new ProgressBar.Line("#slider-progress-item6", params);
let lineBar7 = new ProgressBar.Line("#slider-progress-item7", params);
let lineBar8 = new ProgressBar.Line("#slider-progress-item8", params);
let lineBar9 = new ProgressBar.Line("#slider-progress-item9", params);

export const startFirstLine = () => {
  lineBar1.animate(.8);
  lineBar2.animate(.5);
  lineBar3.animate(.9);
  lineBar4.animate(0);
  lineBar5.animate(0);
  lineBar6.animate(0);
  lineBar7.animate(0);
  lineBar8.animate(0);
  lineBar9.animate(0);
};

export const startSecondLine = () => {
  lineBar1.animate(0);
  lineBar2.animate(0);
  lineBar3.animate(0);
  lineBar4.animate(.7);
  lineBar5.animate(.9);
  lineBar6.animate(.6);
  lineBar7.animate(0);
  lineBar8.animate(0);
  lineBar9.animate(0);
};

export const startThirdLine = () => {
  lineBar1.animate(0);
  lineBar2.animate(0);
  lineBar3.animate(0);
  lineBar4.animate(0);
  lineBar5.animate(0);
  lineBar6.animate(0);
  lineBar7.animate(.8);
  lineBar8.animate(1);
  lineBar9.animate(.7);
};