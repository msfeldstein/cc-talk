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

  return ({ context, width, height, time }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    context.translate(width / 2, height / 2);
    for (var theta = 0; theta < 2 * Math.PI; theta += Math.PI / 600) {
      var rStart = 60 + 50 * Math.cos(theta * 50 + time);
      var rEnd = 300 + 80 * Math.sin(theta * 2 + time);

      var x1 = Math.cos(theta) * rStart;
      var y1 = Math.sin(theta) * rStart;
      var x2 = Math.cos(theta) * rEnd;
      var y2 = Math.sin(theta) * rEnd;
      line(x1, y1, x2, y2);
    }
  };
};

canvasSketch(sketch, settings);
