const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [2048, 2048]
};

const sketch = ({ context }) => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
  };
};

canvasSketch(sketch, settings);
