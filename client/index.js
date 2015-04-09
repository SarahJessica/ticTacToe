'use strict';

$(document).ready(init);

var p1;
var p2;

function init(){
  $('#reset').click(reset);
  $('#start').click(start);
  $('td').click(selecting);
}

function selecting(){
    var color = $('.active').css('background-color');
    $(this).css('background-color', color);
    var activePlayer = $('.active').attr('id');
    $(this).addClass(activePlayer);
    $('.player').toggleClass('active');
    winner();
}

function reset(){
  $('#chooser').show();
  $('#players').hide();
  $('td').css('background-color', '#ffffff');
}

function start(){
  $('#players').show();
  p1 = $('#p1-choose').val();
  p2 = $('#p2-choose').val();
  $('#p1').css('background-color', p1);
  $('#p2').css('background-color', p2);
  $('#chooser').hide();

  var random = Math.floor(Math.random() * 2) + 1;
  $('.player').removeClass('active');
  $('#p' + random).addClass('active');
}

function winner(){
  console.log("you're in the winner function");
  var X = 'p1';
  var O = 'p2';

  if (    ($('#A1').hasClass(X) && $('#A2').hasClass(X) && $('#A3').hasClass(X)) || ($('#A1').hasClass(X) && $('#B1').hasClass(X) && $('#C1').hasClass(X)) ||
          ($('#A1').hasClass(X) && $('#B2').hasClass(X) && $('#C3').hasClass(X)) || ($('#B1').hasClass(X) && $('#B2').hasClass(X) && $('#B3').hasClass(X)) ||
          ($('#C1').hasClass(X) && $('#C2').hasClass(X) && $('#C3').hasClass(X)) || ($('#C1').hasClass(X) && $('#B2').hasClass(X) && $('#A3').hasClass(X)) ||
          ($('#A1').hasClass(X) && $('#B1').hasClass(X) && $('#C1').hasClass(X)) || ($('#A2').hasClass(X) && $('#B2').hasClass(X) && $('#C2').hasClass(X)) ||
          ($('#A3').hasClass(X) && $('#B3').hasClass(X) && $('#C3').hasClass(X))){

            console.log('X Wins!');

  }else if ( ($('#A1').hasClass(O) && $('#A2').hasClass(O) && $('#A3').hasClass(O)) || ($('#A1').hasClass(O) && $('#B1').hasClass(O) && $('#C1').hasClass(O)) ||
             ($('#A1').hasClass(O) && $('#B2').hasClass(O) && $('#C3').hasClass(O)) || ($('#B1').hasClass(O) && $('#B2').hasClass(O) && $('#B3').hasClass(O)) ||
             ($('#C1').hasClass(O) && $('#C2').hasClass(O) && $('#C3').hasClass(O)) || ($('#C1').hasClass(O) && $('#B2').hasClass(O) && $('#A3').hasClass(O)) ||
             ($('#A1').hasClass(O) && $('#B1').hasClass(O) && $('#C1').hasClass(O)) || ($('#A2').hasClass(O) && $('#B2').hasClass(O) && $('#C2').hasClass(O)) ||
             ($('#A3').hasClass(O) && $('#B3').hasClass(O) && $('#C3').hasClass(O))){

            console.log('O Wins!');
      }

}
