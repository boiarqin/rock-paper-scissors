'use strict';

var App = function() {
  var options = ['rock', 'paper', 'scissors'];
  var playerOneCount = 0;
  var playerTwoCount = 0;
  var playerOneCountTotal = 0;
  var playerTwoCountTotal = 0;

  // Retun a number between 0-2 to match element in options
  function getRandomInt() {
    return Math.floor(Math.random() * (4 - 1) + 1);
  }

  function getWinner(optionOne, optionTwo) {
    switch(optionOne) {
      case 'rock':
        if(optionTwo === 'rock') {
          return null;
        }

        if(optionTwo === 'scissors') {
          return true;
        }

        if(optionTwo === 'paper') {
          return false;
        }
        break;
      case 'paper':
        if(optionTwo ==='paper') {
          return null;
        }

        if(optionTwo ==='rock') {
          return true;
        }

        if(optionTwo === 'scissors') {
          return false;
        }
        break;
      case 'scissors':
        if(optionTwo === 'scissors') {
          return null;
        }

        if(optionTwo === 'paper') {
          return true;
        }

        if(optionTwo === 'rock') {
          return false;
        }
        break;
    }
    return null;
  }

  function getResult() {
    return options[getRandomInt() - 1];
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
      playerOneResult = getResult(),
      playerTwoResult = getResult(),
      winner = returnWinner(playerOneResult, playerTwoResult);

    $current.removeClass('btn-primary').addClass('btn-success');

    $('#result-player-one').text(playerOneResult);
    $('#player-one-count').text(playerOneCount);

    $('#result-player-two').text(playerTwoResult);
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
