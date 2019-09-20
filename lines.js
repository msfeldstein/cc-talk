const canvasSketch = require("canvas-sketch");
const util = require("./util");
const settings = {
  dimensions: [1024, 1024],
  animate: true
};

const sketch = ({ context, width, height }) => {
  function circle(px, py, r, color, fill, opacity = 1) {
    context.beginPath();
    context.arc(px, py, r, 0, 2 * Math.PI);
    context.globalAlpha = opacity;
    if (fill) {
      context.fillStyle = color;
      context.fill();
    } else {
      context.strokeStyle = color;
      context.stroke();
    }
  }

  function eclipse(x, y, size, moonPhaseAmount) {
    // Sun
    circle(x, y, size, "white", true);
    // Moon
    circle(x + size * moonPhaseAmount, y, size * 0.99, "black", true);
  }

  return ({ context, width, height, time }) => {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
    eclipse(width / 2, height / 2, 200, Math.sin(time) + 1);
  };
};

canvasSketch(sketch, settings);
