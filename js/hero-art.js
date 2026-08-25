// Generate a 30deg triangular tube-field pattern for the hero art, echoing
// the real tubesheet-generator output.
(function () {
  var svgNS = "http://www.w3.org/2000/svg";
  var g = document.getElementById("tube-field");
  var cx = 150,
    cy = 150,
    r = 132;
  var pitch = 22;
  var rowH = pitch * Math.sin(Math.PI / 3);
  var tubeR = 8;
  var rows = Math.ceil((r * 2) / rowH) + 2;
  var circles = [];
  for (var i = -rows; i <= rows; i++) {
    var y = cy + i * rowH;
    var offset = i % 2 !== 0 ? pitch / 2 : 0;
    var cols = Math.ceil((r * 2) / pitch) + 2;
    for (var j = -cols; j <= cols; j++) {
      var x = cx + j * pitch + offset;
      var dx = x - cx,
        dy = y - cy;
      if (Math.sqrt(dx * dx + dy * dy) <= r - tubeR - 4) {
        var c = document.createElementNS(svgNS, "circle");
        c.setAttribute("cx", x.toFixed(1));
        c.setAttribute("cy", y.toFixed(1));
        c.setAttribute("r", tubeR);
        c.setAttribute("class", "tube");
        g.appendChild(c);
        circles.push(c);
      }
    }
  }

  function highlight() {
    for (var k = 0; k < circles.length; k++) {
      circles[k].classList.remove("live");
    }
    var n = Math.ceil(circles.length * 0.06);
    for (var k = 0; k < n; k++) {
      var idx = Math.floor(Math.random() * circles.length);
      circles[idx].classList.add("live");
    }
  }

  highlight();
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setInterval(highlight, 1000);
  }
})();
