var makeGrandpaDancer = function (top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeGrandpaDancer.prototype = Object.create(makeDancer.prototype);
makeGrandpaDancer.prototype.constructor = makeGrandpaDancer;
makeGrandpaDancer.prototype.oldStep = makeDancer.prototype.step;

makeGrandpaDancer.prototype.step = function() {

  this.oldStep();

  this.$node.toggle();
};
