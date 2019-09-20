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

  return ({ context, width, height, time }) => {
    context.fillStyle = "#FCD8D9";
    context.fillRect(0, 0, width, height);
  };
};

canvasSketch(sketch, settings);
