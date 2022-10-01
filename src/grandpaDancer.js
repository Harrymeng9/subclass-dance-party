var makeGrandpaDancer = function (top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="https://c8.alamy.com/comp/GK51H8/grandpa-grandfather-closeup-GK51H8.jpg" alt="grandpa" width="50" height="100">');
};

makeGrandpaDancer.prototype = Object.create(makeDancer.prototype);
makeGrandpaDancer.prototype.constructor = makeGrandpaDancer;
makeGrandpaDancer.prototype.oldStep = makeDancer.prototype.step;

makeGrandpaDancer.prototype.step = function() {

  this.oldStep();

  this.$node.toggle();
};
