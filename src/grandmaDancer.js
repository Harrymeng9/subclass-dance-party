var makeGrandmaDancer = function (top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  //this.$node = $('<span class="dancer"></span>');

};

makeGrandmaDancer.prototype = Object.create(makeDancer.prototype);
makeGrandmaDancer.prototype.constructor = makeGrandmaDancer;
makeGrandmaDancer.prototype.oldStep = makeDancer.prototype.step;

makeGrandmaDancer.prototype.step = function() {

  this.oldStep();

  this.$node.toggle();
};


