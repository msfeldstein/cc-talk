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
    function eclipse(x, y, size, moonPhaseAmount) {
      // Sun
      context.globalCompositeOperation = "lighter";
      circle(x, y, size, "#FF0000", true);
      circle(x + Math.sin(time) * 5, y, size, "#00FF00", true);
      circle(x + Math.sin(time * 1.2) * 5, y, size, "#0000FF", true);
      // Moon
      // circle(x + size * moonPhaseAmount, y, size * 0.99, "black", true);
    }
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
    const numMoons = 18;
    for (var i = 0; i < numMoons; i++) {
      eclipse(
        width / 2 + Math.sin((i / numMoons) * 2 * Math.PI) * 350,
        height / 2 + Math.cos((i / numMoons) * 2 * Math.PI) * 350,
        80,
        -1 + (i / numMoons) * 2 + Math.sin(i / 10 + time)
      );
    }
  };
};

canvasSketch(sketch, settings);
