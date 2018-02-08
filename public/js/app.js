'use strict';

$(document).ready(function () {
  var $email = $('#email-1');
  var $password = $('#password-1');
  var $logIn = $('#btn-enter');

  var valEmail = void 0,
      valPassword = false;

  $email.on('keyup', function () {
    var REGEXEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    if (REGEXEMAIL.test($email.val())) {
      // alert('correo correcto');
      valEmail = true;
      activeButton();
    } else {
      desactiveButton();
    }
    console.log(valEmail);
  });

  $password.on('keyup', function () {
    var REGEXNUMBERS = /^[0-9]+$/;
    if (REGEXNUMBERS.test($password.val()) && $password.val().length >= 6 && $password.val() !== '' && $password.val() !== '123456') {
      valPassword = true;
      // alert('número correcto');
      activeButton();
    } else {
      desactiveButton();
    }
    console.log(valPassword);
  });

  var activeButton = function activeButton() {
    if (valEmail && valPassword) {
      $logIn.attr('disabled', false);
      $logIn.addClass('active');
    }
  };

  var desactiveButton = function desactiveButton() {
    $logIn.attr('disabled', 'disabled');
  };

  $logIn.on('click', function () {
    window.location.href = 'views/insta-collage.html';
  });
});