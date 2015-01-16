'use strict';

var App = function() {
  var options = ['rock', 'paper', 'scissors'];

  // Retun a number between 0-2 to match element in options
  function getRandomInt() {
    return Math.floor(Math.random() * (4 - 1) + 1);
  }

  // attach click to trigger element
  $(document).on('click', '#trigger', function(e) {
    e.preventDefault();

    var $current = $(e.currentTarget);

    $current.attr('disabled', 'disabled');

    $('#result-player-one').text(options[getRandomInt() - 1]);
    $('#result-player-two').text(options[getRandomInt() - 1]);

    $current.removeAttr('disabled');
  });
};

new App();
