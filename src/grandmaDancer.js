var makeGrandmaDancer = function (top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.name = 'grandma';

  this.$node.html('<img class="dancer grandma" src="https://media4.giphy.com/media/3rgXBQIDHkFNniTNRu/200w.gif?cid=82a1493bp7gmrwlaj6jst37ngul2c41c9stomsrwh7wwaud6&rid=200w.gif&ct=g" alt="grandma" width="50" height="100">');
};

makeGrandmaDancer.prototype = Object.create(makeDancer.prototype);
makeGrandmaDancer.prototype.constructor = makeGrandmaDancer;
makeGrandmaDancer.prototype.oldStep = makeDancer.prototype.step;

makeGrandmaDancer.prototype.step = function () {

  this.oldStep();
  //this.$node.toggle();
};


