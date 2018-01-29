import ProgressBar from "progressbar.js";

const params = {
  color: "#81868F",
  strokeWidth: 4,
  trailWidth: 1,
  easing: "easeInOut",
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: {color: "#007378", width: 1},
  to: {color: "#00BD99", width: 4},
  step: (state, circle) => {
    circle.path.setAttribute("stroke", state.color);
    circle.path.setAttribute("stroke-width", state.width);
    const value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText("");
    } else {
      circle.setText(value + " %");
    }
  }
};

export const barOne = new ProgressBar.Circle(container1, params);
export const barTwo = new ProgressBar.Circle(container2, params);
export const barThree = new ProgressBar.Circle(container3, params);
