describe('grandmaDancer', function () {

  var grandmaDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function () {
    clock = sinon.useFakeTimers();
    grandmaDancer = new makeGrandmaDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function () {
    expect(grandmaDancer.$node).to.be.an.instanceof(jQuery);
  });


  describe('dance', function () {
    it('should call step at least once per second', function () {
      sinon.spy(grandmaDancer, 'step');
      expect(grandmaDancer.step.callCount).to.be.equal(0);
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(grandmaDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(grandmaDancer.step.callCount).to.be.equal(2);
    });
  });

  // New test to check the functionality for lineUp
  it('should have same top top level after click lineUp button', function () {
    var timeBetweenSteps = 100;

    grandmaDancer = new makeGrandmaDancer(10, 20, timeBetweenSteps);
    grandpaDancer = new makeGrandpaDancer(10, 20, timeBetweenSteps);

    grandmaDancer.lineUp(100);
    grandpaDancer.lineUp(100);

    expect(grandmaDancer.top === grandpaDancer.top).to.be.true;
  });

});
