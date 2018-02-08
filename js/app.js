$(document).ready(() => {
  const $email = $('#email-1');
  const $password = $('#password-1');
  const $logIn = $('#btn-enter');

  let valEmail, valPassword = false;

  $email.on('keyup', () => {
    const REGEXEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    if (REGEXEMAIL.test($email.val())) {
      // alert('correo correcto');
      valEmail = true;
      activeButton();
    } else {
      desactiveButton();
    }
    console.log(valEmail);
  });

  $password.on('keyup', () => {
    const REGEXNUMBERS = /^[0-9]+$/;
    if ((REGEXNUMBERS.test($password.val())) && ($password.val().length >= 6) && ($password.val() !== '') && ($password.val() !== '123456')) {
      valPassword = true;
      // alert('número correcto');
      activeButton();
    } else {
      desactiveButton();
    }
    console.log(valPassword);
  });

  activeButton = () => {
    if (valEmail && valPassword) {
      $logIn.attr('disabled', false);
    }
  };

  desactiveButton = () => {
    $logIn.attr('disabled', 'disabled');
  };

  $logIn.on('click', () => {
    window.location.href = 'views/insta-collage.html';
  });
});
