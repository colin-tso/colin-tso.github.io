// Randomize P&ID flow dot animation durations
(function () {
  var dots = document.querySelectorAll(".pid-flow");
  function randomize() {
    dots.forEach(function (dot) {
      var duration = 3 + Math.random() * 3;
      var animations = dot.querySelectorAll("animate, animateMotion");
      animations.forEach(function (el) {
        el.setAttribute("dur", duration + "s");
      });
    });
  }
  randomize();
})();
