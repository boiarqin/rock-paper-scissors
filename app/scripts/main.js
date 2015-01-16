'use strict';

var App = function() {
  var options = ['rock', 'paper', 'scissors'];
  var playerOneCount = 0;
  var playerTwoCount = 0;
  var playerOneCountTotal = 0;
  var playerTwoCountTotal = 0;

  // Retun a number between 0-2 to match element in options
  function getRandomInt() {
    return Math.floor(Math.random() * 3);
  }

  function getWinner(optionOne, optionTwo) {
    if (optionOne === optionTwo){
      return null;
    }
    else if (optionOne - optionTwo === 1 || optionOne - optionTwo === -2){
      return true;
    }
    return false;
  }

  function returnWinner(playerOneResult, playerTwoResult) {
    var winner = getWinner(playerOneResult, playerTwoResult);

    if(winner === null) {
      winner = 'Match';
    } else if (winner) {
      winner = 'Player One';
      playerOneCount++;
    } else {
      winner = 'Player Two';
      playerTwoCount++;
    }

    return winner;
  }

  // attach click to trigger element
  $(document).on('click', '.btn-primary', function(e) {
    e.preventDefault();

    var $current = $(e.currentTarget),
      playerOneResult = getRandomInt(),
      playerTwoResult = getRandomInt(),
      winner = returnWinner(playerOneResult, playerTwoResult);

    $current.removeClass('btn-primary').addClass('btn-success');

    $('#result-player-one').text(options[playerOneResult]);
    $('#player-one-count').text(playerOneCount);

    $('#result-player-two').text(options[playerTwoResult]);
    $('#player-two-count').text(playerTwoCount);

    if(playerOneCount === 3) {
      playerOneCountTotal++;
      $('#player-one-count-total').text(playerOneCountTotal);
    }

    if(playerTwoCount === 3) {
      playerTwoCountTotal++;
      $('#player-two-count-total').text(playerTwoCountTotal);
    }

    if(playerOneCount === 3 || playerTwoCount === 3) {
      $('#result').text(winner + ' Wins!');
      $current.html('Winner! <span class="glyphicon glyphicon-ok"></span>');
    } else {
      $current.removeClass('btn-success').addClass('btn-primary');
    }
  });

  $(document).on('click', '.btn-success', function(e) {
    e.preventDefault();
    playerOneCount = 0;
    playerTwoCount = 0;

    $(e.currentTarget).html('Go! <span class="glyphicon glyphicon-ok"></span>').removeClass('btn-success').addClass('btn-primary');

    $('#result-player-one').text('Player One Result');
    $('#player-one-count').text(playerOneCount);

    $('#result-player-two').text('Player Two Result');
    $('#player-two-count').text(playerTwoCount);

    $('#result').text('');
  });
};

new App();
