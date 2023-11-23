
function validateForms(form) {
  $(form).validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      email: {
        // required: 'Please enter your email',
        email: 'Valid email required',
      },
    },
  });
}

validateForms('#content-input');


const card = document.querySelector('#card'),
  submitBtn = document.querySelector('#submit-button'),
  successMessage = document.querySelector('#success-message'),
  successBtn = document.querySelector('#success-button');

