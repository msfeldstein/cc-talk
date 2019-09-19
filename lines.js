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
    for (var x = 0; x < width; x += 100) {
      for (var y = 0; y < height; y += 100) {
        circle(x, y, 50, "#000000");
      }
    }
  };
};

canvasSketch(sketch, settings);
