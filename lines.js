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
    context.translate(width / 2, height / 2);
    function drawLeaf(pos) {
      var theta = -Math.PI / 2; // up
      var x = 0;
      var y = 0;
      var curlAmount = 0;
      var amount = Math.cos(time + pos * Math.PI * 2) + 1;
      for (var i = 0; i < 100; i++) {
        circle(x, y, 5 - (i / 100) * 5, "#003C28", true);
        x += Math.cos(theta) * 5;
        y += Math.sin(theta) * 5;
        theta += (curlAmount * i) / 100;
        curlAmount += 0.01 * amount;
      }
    }
    var numLeafs = 12;
    for (var i = 0; i < numLeafs; i++) {
      context.rotate((Math.PI * 2) / numLeafs);
      drawLeaf(i / numLeafs);
    }
  };
};

canvasSketch(sketch, settings);
