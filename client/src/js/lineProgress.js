import ProgressBar from "progressbar.js";

const params = {
  strokeWidth: 4,
  easing: "easeInOut",
  duration: 1400,
  color: "#FFEA82",
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

export const lineBar1 = new ProgressBar.Line("#slider-progress-item1", params);
export const lineBar2 = new ProgressBar.Line("#slider-progress-item2", params);
export const lineBar3 = new ProgressBar.Line("#slider-progress-item3", params);