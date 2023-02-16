document
        .getElementById('submit-btn')
        .addEventListener('click', function () {
          // get email vale
          const emailField = document.getElementById('email-field'); //get pass value
          const passField = document.getElementById('pass-field');
          if (
            emailField.value == 'example@example.com' &&
            passField.value == 'example'
          ) {
            window.location.href = 'dashboard.html';
          } else {
            alert('invalid user');
          }
        });