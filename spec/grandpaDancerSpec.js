describe('grandpaDancer', function() {

  var grandpaDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    grandpaDancer = new makeGrandpaDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(grandpaDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(grandpaDancer.$node, 'toggle');
    grandpaDancer.step();
    expect(grandpaDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(grandpaDancer, 'step');
      expect(grandpaDancer.step.callCount).to.be.equal(0);
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(grandpaDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(grandpaDancer.step.callCount).to.be.equal(2);
    });
  });
});