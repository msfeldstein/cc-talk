const canvasSketch = require("canvas-sketch");
const util = require("./util");
const settings = {
  dimensions: [1024, 1024],
  animate: true
};

const sketch = ({ context, width, height }) => {
  function line(x1, y1, x2, y2, opts = { lineWidth: 1, color: 0x000000 }) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.strokeStyle = opts.color;
    context.lineWidth = opts.lineWidth;
    context.stroke();
  }

  function drawBlobLine(x, time) {
    for (var centerY = 0; centerY < height; centerY += 1) {
      line(
        x + Math.cos((centerY / height) * Math.PI * 4 + time / 2) * 200,
        centerY,
        x - Math.cos((centerY / height) * Math.PI * 4 + time) * 200,
        centerY
      );
    }
  }

  return ({ context, width, height, time }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    context.globalAlpha = 0.1;
    for (var x = width / 2 - 600; x < width / 2 + 600; x += 50) {
      drawBlobLine(x, time + ((x * 5232.325235) % 100));
    }
  };
};

canvasSketch(sketch, settings);
