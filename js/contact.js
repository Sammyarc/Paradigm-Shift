document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('submitBtn');

    function validateFirstName() {
        const firstname = document.getElementById('firstname');
        const firstnameError = document.getElementById('firstname-error');
        if (firstname.value.trim().length === 0) {
            firstnameError.style.display = 'block';
            return false;
        } else {
            firstnameError.style.display = 'none';
            return true;
        }
    }

    function validateLastName() {
        const lastname = document.getElementById('lastname');
        const lastnameError = document.getElementById('lastname-error');
        if (lastname.value.trim().length === 0) {
            lastnameError.style.display = 'block';
            return false;
        } else {
            lastnameError.style.display = 'none';
            return true;
        }
    }

    function validateEmailInput() {
        const email = document.getElementById('email');
        const emailError = document.getElementById('email-error');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.toLowerCase())) {
            emailError.style.display = 'block';
            return false;
        } else {
            emailError.style.display = 'none';
            return true;
        }
    }

    function validatePhoneInput() {
        const phonenumber = document.getElementById('phonenumber');
        const phoneError = document.getElementById('phone-error');
        const phonePattern = /^[0-9]+$/;
        if (!phonePattern.test(phonenumber.value.trim())) {
            phoneError.style.display = 'block';
            return false;
        } else {
            phoneError.style.display = 'none';
            return true;
        }
    }

    function validateMessageInput() {
        const message = document.getElementById('message');
        const messageError = document.getElementById('message-error');
        if (message.value.trim().length === 0) {
            messageError.style.display = 'block';
            return false;
        } else {
            messageError.style.display = 'none';
            return true;
        }
    }

    function validateForm() {
        const isFirstNameValid = validateFirstName();
        const isLastNameValid = validateLastName();
        const isEmailValid = validateEmailInput();
        const isPhoneValid = validatePhoneInput();
        const isMessageValid = validateMessageInput();
        return isFirstNameValid && isLastNameValid && isEmailValid && isPhoneValid && isMessageValid;
    }

    function sendMail() {
        const firstname = document.getElementById('firstname').value;
        const lastname = document.getElementById('lastname').value;
        const email = document.getElementById('email').value;
        const phonenumber = document.getElementById('phonenumber').value;
        const message = document.getElementById('message').value;

        const params = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            phonenumber: phonenumber,
            message: message,
        };

        const serviceID = 'service_eu671ye';
        const templateID = 'template_i33faf5';

        return emailjs.send(serviceID, templateID, params);
    }
    
    btn.addEventListener('click', function(event) {
        event.preventDefault();
        
        if (validateForm()) {
            sendMail()
                .then(function(response) {
                    console.log('Email sent successfully:', response);
                    document.getElementById('popup').style.display = 'block';
                    document.getElementById('overlay').style.display = 'block';
                })
                .catch(function(error) {
                    console.error('Error sending email:', error);
                    // Optional: display an error message to the user
                });
        }
    });

   // Validate inputs on blur (when the user leaves the input field)
   document.getElementById('firstname').addEventListener('blur', validateFirstName);
   document.getElementById('lastname').addEventListener('blur', validateLastName);
   document.getElementById('email').addEventListener('blur', validateEmailInput);
   document.getElementById('phonenumber').addEventListener('blur', validatePhoneInput);
   document.getElementById('message').addEventListener('blur', validateMessageInput);
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';

    // Clear the form fields
    document.getElementById('firstname').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phonenumber').value = '';
    document.getElementById('message').value = '';
});
