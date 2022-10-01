var makeGrandmaDancer = function (top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="https://i.ebayimg.com/images/g/HZYAAOSwJJ5g3gtj/s-l225.jpg" alt="grandma" width="50" height="100">');
  this.count = 0;

};

makeGrandmaDancer.prototype = Object.create(makeDancer.prototype);
makeGrandmaDancer.prototype.constructor = makeGrandmaDancer;
makeGrandmaDancer.prototype.oldStep = makeDancer.prototype.step;

makeGrandmaDancer.prototype.step = function() {

  this.oldStep();
  if (this.count % 2 === 0) {
    this.$node = $('<img src="https://spirit.scene7.com/is/image/Spirit/01416049-a?$Detail$" alt="grandma" width="50" height="100">');
  } else {
    this.$node = $('<img src="https://i.ebayimg.com/images/g/HZYAAOSwJJ5g3gtj/s-l225.jpg" alt="grandma" width="50" height="100">');
  }
  this.count++;
  //this.$node.toggle();
};


