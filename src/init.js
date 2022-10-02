$(document).ready(function () {
  window.dancers = [];

  $('.addDancerButton').on('click', function (event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    window.dancers.push(dancer);
  });

  //
  $('.lineUpButton').on('click', function (event) {



    for (var x = 0; x < window.dancers.length; x++) {
      console.log(window.dancers[x]);
      window.dancers[x].lineUp(x * 110);
    }
  });

  $('.dancerInteraction').on('click', function (event) {

    var grandmaCount = 0;
    var grandpaCount = 0;
    var blinkyCount = 0;

    for (var x = 0; x < window.dancers.length; x++) {

      if (window.dancers[x].name === 'grandma') {

        window.dancers[x].lineUp(grandmaCount * 110, 150);
        grandmaCount++;
      } else if (window.dancers[x].name === 'grandpa') {

        window.dancers[x].lineUp(grandpaCount * 110, 300);
        grandpaCount++;
      } else if (window.dancers[x].name === 'blinky') {

        window.dancers[x].lineUp(blinkyCount * 110, 450);
        blinkyCount++;
      }
    }
  });

});

