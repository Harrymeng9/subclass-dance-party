var makeGrandpaDancer = function (top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.name = 'grandpa';

  // Replace the dot with image
  this.$node = $('<img class="dancer grandpa" src="https://media2.giphy.com/media/qDjHkvHsFt00fX9ZWV/200w.webp?cid=ecf05e47x5e4kmieq40044yabtcr2kmsiju5xoftct6hlnwz&rid=200w.webp&ct=g alt="grandpa" width="50" height="100">');
  // Reset the dancer position
  this.setPosition(top, left);

};

makeGrandpaDancer.prototype = Object.create(makeDancer.prototype);
makeGrandpaDancer.prototype.constructor = makeGrandpaDancer;
makeGrandpaDancer.prototype.oldStep = makeDancer.prototype.step;

makeGrandpaDancer.prototype.step = function() {

  this.oldStep();
  this.$node.toggle();
};
