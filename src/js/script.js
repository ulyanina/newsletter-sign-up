
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


const submitBtn = document.querySelector('#submit-button');

submitBtn.addEventListener('click', () => {
  
})