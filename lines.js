const canvasSketch = require("canvas-sketch");
const util = require("./util");
const settings = {
  dimensions: [1024, 1024],
  animate: true
};

const sketch = ({ context }) => {
  function line(x1, y1, x2, y2, opts = { lineWidth: 1, color: 0x000000 }) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.strokeStyle = opts.color;
    context.lineWidth = opts.lineWidth;
    context.stroke();
  }

  return ({ context, width, height, time }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    const centerX = width / 2;
    for (var centerY = 0; centerY < height; centerY += 1) {
      line(
        centerX + Math.cos((centerY / height) * Math.PI * 4 + time / 2) * 200,
        centerY,
        centerX - Math.cos((centerY / height) * Math.PI * 4 + time) * 200,
        centerY
      );
    }
  };
};

canvasSketch(sketch, settings);
