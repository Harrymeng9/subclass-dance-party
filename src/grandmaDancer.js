var makeGrandmaDancer = function (top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="https://i.ebayimg.com/images/g/HZYAAOSwJJ5g3gtj/s-l225.jpg" alt="grandma" width="50" height="100">');

};

makeGrandmaDancer.prototype = Object.create(makeDancer.prototype);
makeGrandmaDancer.prototype.constructor = makeGrandmaDancer;
makeGrandmaDancer.prototype.oldStep = makeDancer.prototype.step;

makeGrandmaDancer.prototype.step = function() {

  this.oldStep();

  this.$node.width(Math.random() * 50 + 30);
  this.$node.height(Math.random() * 50 + 30);
  //this.setPosition(Math.random() * 1000, Math.random * 1000);

  //this.$node.toggle();
};


