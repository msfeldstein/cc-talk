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

  var x1 = width / 2 - 100;
  var x2 = width / 2 + 100;
  var y = 0;

  return ({ context, width, height, time }) => {
    context.fillStyle = "white";
    context.globalAlpha = 0.01;
    context.fillRect(0, 0, width, height);
    context.globalAlpha = 1;

    line(x1, y, x2, y);
    x1 += util.random(-3, 3);
    x2 += util.random(-3, 3);
    y += 1;
    if (y > height) y = 0;
  };
};

canvasSketch(sketch, settings);
