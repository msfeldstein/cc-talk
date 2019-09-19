const canvasSketch = require("canvas-sketch");
const util = require("./util");
const settings = {
  dimensions: [1024, 1024],
  animate: true
};

const sketch = ({ context, width, height }) => {
  function circle(px, py, r, color) {
    context.beginPath();
    context.arc(px, py, r, 0, 2 * Math.PI);
    context.strokeStyle = color;
    context.stroke();
  }

  return ({ context, width, height, time }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    circle(width / 2, height / 2, 100, "#000000");
  };
};

canvasSketch(sketch, settings);
