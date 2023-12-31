// Creates and returns a new dancer object that can step
var makeDancer = function (top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  this.step();
  this.setPosition(top, left);
};

makeDancer.prototype.step = function () {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var test = this;
  setTimeout(function () {
    test.step();
  }, this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function (top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  this.top = top;
  this.left = left;

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function(x, y) {
  if (y !== undefined ) {
    this.setPosition(y, x);
  } else {
    this.setPosition(150, x);
  }
};
