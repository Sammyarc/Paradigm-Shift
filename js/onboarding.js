document.addEventListener('DOMContentLoaded', () => {
    const ageInput = document.getElementById('age');
    const continueButton = document.querySelector('.btn1');
    const errorMessage1 = document.createElement('p');
    const step1 = document.querySelector('.step1 div');
    const step1Text = document.querySelector('.step1 span');
    const step2 = document.querySelector('.step2 div');
    const step2Text = document.querySelector('.step2 span');
    const page1 = document.querySelector('.page1');
    const page2 = document.querySelector('.page2');
    const backIcon1 = document.querySelector('.back-icon1');

    /*******STEP ONE VALIDATION ***/

    errorMessage1.style.color = 'red';
    errorMessage1.style.display = 'none';
    errorMessage1.textContent = 'You must be over 18 to continue.';
    ageInput
        .parentNode
        .appendChild(errorMessage1);

    ageInput.addEventListener('input', function () {
        const age = parseInt(ageInput.value, 10);
        if (age > 18) {
            continueButton.style.pointerEvents = 'auto';
            continueButton.style.opacity = '1';
            errorMessage1.style.display = 'none';
        } else {
            continueButton.style.pointerEvents = 'none';
            continueButton.style.opacity = '0.5';
            errorMessage1.style.display = 'block';
        }
    });

    continueButton.addEventListener('click', function (e) {
        const age = parseInt(ageInput.value, 10);
        if (age > 18) {
            page1
                .classList
                .remove('show');
            page1
                .classList
                .add('hide');
            page2
                .classList
                .remove('hide');
            page2
                .classList
                .add('show');
            backIcon1
                .classList
                .remove('hide');
            backIcon1
                .classList
                .add('show');

            step2.style.backgroundColor = 'var(--primary)';
            step2.style.color = '#fcf6f6';
            step2Text.style.color = 'var(--primary)';
        } else {
            e.preventDefault();
        }
    });

    /*********STEP TWO VALIDATION ******/

    const zipCodeInput = document.getElementById('zipCodeInput');
    const continueButton2 = document.querySelector('.btn2');
    const errorMessage2 = document.createElement('p');
    const step3 = document.querySelector('.step3 div');
    const step3Text = document.querySelector('.step3 span');
    const page3 = document.querySelector('.page3');
    const backIcon2 = document.querySelector('.back-icon2');

    errorMessage2.style.color = 'red';
    errorMessage2.style.display = 'none';
    errorMessage2.textContent = 'Please enter a valid ZIP code.';
    zipCodeInput
        .parentNode
        .appendChild(errorMessage2);

    zipCodeInput.addEventListener('input', function () {
        const zipCode = zipCodeInput.value;
        if (zipCode.length === 5 && /^[0-9]+$/.test(zipCode)) {
            continueButton2.style.pointerEvents = 'auto';
            continueButton2.style.opacity = '1';
            errorMessage2.style.display = 'none';
        } else {
            continueButton2.style.pointerEvents = 'none';
            continueButton2.style.opacity = '0.5';
            errorMessage2.style.display = 'block';
        }
    });

    continueButton2.addEventListener('click', function (e) {
        const zipCode = zipCodeInput.value;
        if (zipCode.length === 5 && /^[0-9]+$/.test(zipCode)) {
            page2
                .classList
                .remove('show');
            page2
                .classList
                .add('hide');
            page3
                .classList
                .remove('hide');
            page3
                .classList
                .add('show');
            backIcon2
                .classList
                .remove('hide');
            backIcon2
                .classList
                .add('show');

            step3.style.backgroundColor = 'var(--primary)';
            step3.style.color = '#fcf6f6';
            step3Text.style.color = 'var(--primary)';
        } else {
            e.preventDefault();
        }
    });

    backIcon1.addEventListener('click', function () {
        page2
            .classList
            .remove('show');
        page2
            .classList
            .add('hide');
        page1
            .classList
            .remove('hide');
        page1
            .classList
            .add('show');

        step2.style.backgroundColor = '#fcf6f6';
        step2.style.color = 'var(--primary)';
        step2Text.style.color = '#000';
    });

    /*********STEP THREE VALIDATION ******/

    const gridButtons = document.querySelectorAll('.grid-button');
    const continueButton3 = document.querySelector('.btn3');
    const page4 = document.querySelector('.page4');
    const backIcon3 = document.querySelector('.back-icon3');

    gridButtons.forEach(button => {
        button.addEventListener('click', function () {
            button
                .classList
                .toggle('selected');
            validateStep3Selection();
        });
    });

    function validateStep3Selection() {
        const selectedButtons = document.querySelectorAll('.grid-button.selected');
        if (selectedButtons.length > 0) {
            continueButton3.style.pointerEvents = 'auto';
            continueButton3.style.opacity = '1';
        } else {
            continueButton3.style.pointerEvents = 'none';
            continueButton3.style.opacity = '0.5';
        }
    }

    continueButton3.addEventListener('click', function (e) {
        e.preventDefault();

        const selectedButtons = document.querySelectorAll('.grid-button.selected');
        if (selectedButtons.length > 0) {
            page3
                .classList
                .remove('show');
            page3
                .classList
                .add('hide');
            page4
                .classList
                .remove('hide');
            page4
                .classList
                .add('show');
            backIcon3
                .classList
                .remove('hide');
            backIcon3
                .classList
                .add('show');

            const step4 = document.querySelector('.step4 div');
            const step4Text = document.querySelector('.step4 span');
            step4.style.backgroundColor = 'var(--primary)';
            step4.style.color = '#fcf6f6';
            step4Text.style.color = 'var(--primary)';
        } else {
            e.preventDefault();
        }
    });

    backIcon2.addEventListener('click', function () {
        page3
            .classList
            .remove('show');
        page3
            .classList
            .add('hide');
        page2
            .classList
            .remove('hide');
        page2
            .classList
            .add('show');

        step3.style.backgroundColor = '#fcf6f6';
        step3.style.color = 'var(--primary)';
        step3Text.style.color = '#000';
    });

    /*********STEP FOUR VALIDATION ******/

    const continueButton4 = document.querySelector('.btn4');
    const page5 = document.querySelector('.page5');
    const backIcon4 = document.querySelector('.back-icon4');
    const step4 = document.querySelector('.step4 div');
    const step4Text = document.querySelector('.step4 span');

    continueButton4.addEventListener('click', function () {
        page4
            .classList
            .remove('show');
        page4
            .classList
            .add('hide');
        page5
            .classList
            .remove('hide');
        page5
            .classList
            .add('show');
        backIcon4
            .classList
            .remove('hide');
        backIcon4
            .classList
            .add('show');

        const step5 = document.querySelector('.step5 div');
        const step5Text = document.querySelector('.step5 span');
        step5.style.backgroundColor = 'var(--primary)';
        step5.style.color = '#fcf6f6';
        step5Text.style.color = 'var(--primary)';
    });

    backIcon3.addEventListener('click', function () {
        page4
            .classList
            .remove('show');
        page4
            .classList
            .add('hide');
        page3
            .classList
            .remove('hide');
        page3
            .classList
            .add('show');

        step4.style.backgroundColor = '#fcf6f6';
        step4.style.color = 'var(--primary)';
        step4Text.style.color = '#000';
    });

    // Step 5 Validation
    const gridButtons2 = document.querySelectorAll('.grid-button2');
    const continueButton5 = document.querySelector('.btn5');
    const page6 = document.querySelector('.page6');
    const backIcon5 = document.querySelector('.back-icon5');

    gridButtons2.forEach(button => {
        button.addEventListener('click', function () {
            button
                .classList
                .toggle('selected');
            validateStep5Selection();
        });
    });

    function validateStep5Selection() {
        const selectedButtons2 = document.querySelectorAll('.grid-button2.selected');
        if (selectedButtons2.length > 0) {
            continueButton5.style.pointerEvents = 'auto';
            continueButton5.style.opacity = '1';
        } else {
            continueButton5.style.pointerEvents = 'none';
            continueButton5.style.opacity = '0.5';
        }
    }

    continueButton5.addEventListener('click', function (e) {
        e.preventDefault();

        const selectedButtons2 = document.querySelectorAll('.grid-button2.selected');
        if (selectedButtons2.length > 0) {
            // Update classes to hide the current page and show the next
            page5
                .classList
                .remove('show');
            page5
                .classList
                .add('hide');
            page6
                .classList
                .remove('hide');
            page6
                .classList
                .add('show');
            backIcon5
                .classList
                .remove('hide');
            backIcon5
                .classList
                .add('show');

            const step6 = document.querySelector('.step6 div');
            const step6Text = document.querySelector('.step6 span');
            step6.style.backgroundColor = 'var(--primary)';
            step6.style.color = '#fcf6f6';
            step6Text.style.color = 'var(--primary)';
        } else {
            e.preventDefault();
        }
    });

    backIcon4.addEventListener('click', function () {
        page5
            .classList
            .remove('show');
        page5
            .classList
            .add('hide');
        page4
            .classList
            .remove('hide');
        page4
            .classList
            .add('show');

        const step5 = document.querySelector('.step5 div');
        const step5Text = document.querySelector('.step5 span');
        step5.style.backgroundColor = '#fcf6f6';
        step5.style.color = 'var(--primary)';
        step5Text.style.color = '#000';
    });

    /*********STEP SIX VALIDATION ******/

    const continueButton6 = document.querySelector('.btn6');
    const page7 = document.querySelector('.page7');
    const backIcon6 = document.querySelector('.back-icon6')

    continueButton6.addEventListener('click', function () {
        // Update classes to hide the current page and show the next
        page6
            .classList
            .remove('show');
        page6
            .classList
            .add('hide');
        page7
            .classList
            .remove('hide');
        page7
            .classList
            .add('show');
        backIcon6
            .classList
            .remove('hide');
        backIcon6
            .classList
            .add('show');

        // Update step indicators
        const step7 = document.querySelector('.step7 div');
        const step7Text = document.querySelector('.step7 span');

        step7.style.backgroundColor = 'var(--primary)';
        step7.style.color = '#fcf6f6';
        step7Text.style.color = 'var(--primary)';
    });

    backIcon5.addEventListener('click', function () {
        page6
            .classList
            .remove('show');
        page6
            .classList
            .add('hide');
        page5
            .classList
            .remove('hide');
        page5
            .classList
            .add('show');

        const step6 = document.querySelector('.step6 div');
        const step6Text = document.querySelector('.step6 span');
        step6.style.backgroundColor = '#fcf6f6';
        step6.style.color = 'var(--primary)';
        step6Text.style.color = '#000';
    });

    /*********STEP 7 VALIDATION ******/

    const countryCodeSelect = document.getElementById('country-code');
    const selectedCountryCodeSpan = document.getElementById(
        'selected-country-code'
    );
    const firstname = document.getElementById('firstname');
    const lastname = document.getElementById('lastname');
    const email = document.getElementById('email');
    const phoneNumber = document.getElementById('phone-number');
    const btn7 = document.querySelector('.btn7');
    const errorMessage = document.createElement('p');
    const firstnameError = document.getElementById('firstname-error');
    const lastnameError = document.getElementById('lastname-error');
    const emailError = document.getElementById('email-error');
    const phoneError = document.getElementById('phone-error');

    errorMessage.style.color = 'red';
    errorMessage.style.display = 'none';
    document
        .querySelector('.form')
        .appendChild(errorMessage);

    // Fetch country codes
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            data.forEach(country => {
                if (country.idd && country.idd.root) {
                    const countryCode = country.idd.root + (
                        country.idd.suffixes
                            ? country.idd.suffixes[0]
                            : ''
                    );
                    const option = document.createElement('option');
                    option.value = countryCode;
                    option.textContent = `${country.name.common} (${countryCode})`;
                    countryCodeSelect.appendChild(option);
                }
            });

            // Set United Kingdom as default for Europe
            const ukOption = Array
                .from(countryCodeSelect.options)
                .find(option => option.textContent.includes('United Kingdom'));
            if (ukOption) {
                ukOption.selected = true;
                countryCodeSelect.value = ukOption.value;
                selectedCountryCodeSpan.textContent = ukOption.value;
            }

            updatePhoneNumberPrefix();
        })
        .catch(error => console.error('Error fetching country codes:', error));

    // Update the phone number prefix with the selected country code
    countryCodeSelect.addEventListener('change', updatePhoneNumberPrefix);

    function updatePhoneNumberPrefix() {
        selectedCountryCodeSpan.textContent = countryCodeSelect.value;
    }

    // Validate inputs on input change
    firstname.addEventListener('input', validateFirstName);
    lastname.addEventListener('input', validateLastName);
    email.addEventListener('input', validateEmailInput);

    function validateFirstName() {
        const isValid = firstname
            .value
            .trim()
            .length > 0;
        toggleError(firstnameError, isValid);
        return isValid;
    }

    function validateLastName() {
        const isValid = lastname
            .value
            .trim()
            .length > 0;
        toggleError(lastnameError, isValid);
        return isValid;
    }

    function validateEmailInput() {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = re.test(String(email.value).toLowerCase());
        toggleError(emailError, isValid);
        return isValid;
    }

    function toggleError(errorElement, isValid) {
        errorElement.style.display = isValid
            ? 'none'
            : 'block';
    }

    function validateForm() {
        const isFirstNameValid = validateFirstName();
        const isLastNameValid = validateLastName();
        const isEmailValid = validateEmailInput();

        if (isFirstNameValid && isLastNameValid && isEmailValid) {
            errorMessage.style.display = 'none';
            return true;
        } else {
            errorMessage.style.display = 'block';
            errorMessage.textContent = 'Please fill out all fields correctly.';
            return false;
        }
    }

    // Form submission
    btn7.addEventListener('click', function (event) {
        event.preventDefault();
        if (validateForm()) {
            window.location.href = 'index.html';
        }
    });

    backIcon6.addEventListener('click', function () {
        page7
            .classList
            .remove('show');
        page7
            .classList
            .add('hide');
        page6
            .classList
            .remove('hide');
        page6
            .classList
            .add('show');

        const step7 = document.querySelector('.step7 div');
        const step7Text = document.querySelector('.step7 span');
        step7.style.backgroundColor = '#fff';
        step7.style.color = 'var(--primary)';
        step7Text.style.color = '#000';
    });

});

function updatePriceRange() {
    const range = document.getElementById('priceRange');
    const rangeText = document.getElementById('priceRangeText');
    const value = range.value;

    if (value <= 0) {
        rangeText.textContent = 'Under $50k';
    } else if (value <= 10) {
        rangeText.textContent = '$50k - $75k';
    } else if (value <= 20) {
        rangeText.textContent = '$100k - $150k';
    } else if (value <= 30) {
        rangeText.textContent = '$150k - $200k';
    } else if (value <= 40) {
        rangeText.textContent = '$200k - $350k';
    } else if (value <= 50) {
        rangeText.textContent = '$350k - $400k';
    } else if (value <= 60) {
        rangeText.textContent = '$400k - $450k';
    } else if (value <= 70) {
        rangeText.textContent = '$450k - $500k';
    } else if (value <= 80) {
        rangeText.textContent = '$500k - $550k';
    } else if (value <= 90) {
        rangeText.textContent = '$550k - $600k';
    } else {
        rangeText.textContent = 'Over $600k';
    }
}