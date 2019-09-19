const canvasSketch = require("canvas-sketch");
const util = require("./util");
const settings = {
  dimensions: [2048, 2048]
};

const sketch = ({ context }) => {
  function line(x1, y1, x2, y2, opts = { lineWidth: 1, color: 0x000000 }) {
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.strokeStyle = opts.color;
    context.lineWidth = opts.lineWidth;
    context.stroke();
  }

  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    const centerX = width / 2;
    for (var centerY = 0; centerY < height; centerY += 10) {
      line(
        centerX + util.random(-500, 500),
        centerY,
        centerX + util.random(-500, 500),
        centerY
      );
      console.log(util.random(-50, 50));
    }
  };
};

canvasSketch(sketch, settings);
