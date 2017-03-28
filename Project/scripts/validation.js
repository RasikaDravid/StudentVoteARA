(function(window) {
    'use strict';
    var App = window.App || {};

  var password = document.getElementById("password");
  var confirm_password = document.getElementById("confirm_password");

    function validatePasswordFields() {
        if (password.value != confirm_password.value) {
            confirm_password.setCustomValidtiy('Passwords do not match!');
        } else {
            confirm_password.setCustomValidtiy('');
        }
    }

    password.onchange = validatePasswordFields;
    confirm_password.onkeyup = validatePasswordFields;

    App.Validation = Validation;
    window.App = App;
})(window);
