
function toggleDropdown(event, dropdownId) {
    event.preventDefault();
    var dropdownContent = document.getElementById(dropdownId);
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const tab1 = document.getElementById('tab1');
    const tab2 = document.getElementById('tab2');
    const tab3 = document.getElementById('tab3');
    const tabTrigger1 = document.getElementById('tab-trigger1');
    const tabTrigger2 = document.getElementById('tab-trigger2');
    const tabTrigger3 = document.getElementById('tab-trigger3');

    // Ensure tab1 is shown by default
    tab1.classList.add('tab-show');
    tab2.classList.add('tab-hide');
    tab3.classList.add('tab-hide');
    tabTrigger1.classList.add('active');

    tabTrigger1.addEventListener('click', function (e) {
        tab1.classList.add('tab-show');
        tab1.classList.remove('tab-hide');
        tab2.classList.add('tab-hide');
        tab2.classList.remove('tab-show');
        tab3.classList.add('tab-hide');
        tab3.classList.remove('tab-show');

        tabTrigger1.classList.add('active');
        tabTrigger2.classList.remove('active');
        tabTrigger3.classList.remove('active');
    });

    tabTrigger2.addEventListener('click', function (e) {
        tab2.classList.add('tab-show');
        tab2.classList.remove('tab-hide');
        tab1.classList.add('tab-hide');
        tab1.classList.remove('tab-show');
        tab3.classList.add('tab-hide');
        tab3.classList.remove('tab-show');

        tabTrigger2.classList.add('active');
        tabTrigger1.classList.remove('active');
        tabTrigger3.classList.remove('active');
    });

    tabTrigger3.addEventListener('click', function (e) {
        tab3.classList.add('tab-show');
        tab3.classList.remove('tab-hide');
        tab1.classList.add('tab-hide');
        tab1.classList.remove('tab-show');
        tab2.classList.add('tab-hide');
        tab2.classList.remove('tab-show');

        tabTrigger3.classList.add('active');
        tabTrigger1.classList.remove('active');
        tabTrigger2.classList.remove('active');
    });


    const countrySelect = document.getElementById('country-select');

    // Fetch European countries
    fetch('https://restcountries.com/v3.1/region/europe')
        .then(response => response.json())
        .then(data => {
            data.forEach(country => {
                const option = document.createElement('option');
                option.value = country.name.common;
                option.textContent = country.name.common;
                countrySelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching countries:', error));




        //  RETIREMENT QUIZ VALIDATION 

        const page1 = document.querySelector(".page1");
        const page2 = document.querySelector(".page2");
        const page3 = document.querySelector(".page3");
        const page4 = document.querySelector(".page4");
        const page5 = document.querySelector(".page5");
        const page6 = document.querySelector(".page6");
        const step1 = document.getElementById('step1');
        const step2 = document.getElementById('step2');
        const step3 = document.getElementById('step3');
        const step4 = document.getElementById('step4');
        const step5 = document.getElementById('step5');
        const step6 = document.getElementById('step6');
        const ageInput = document.getElementById('age-input');
        const incomeInput = document.getElementById('income-input');
        const savingsInput = document.getElementById('savings-input');
        const retirementInput = document.getElementById('retirement-input');
        const spendBtns = document.querySelectorAll('.choice');
        const riskStyles = document.querySelectorAll('.choice2');


        // STEP ONE VALIDATION

        const errorMessage1 = document.createElement('p');
        const btn1 = document.getElementById('q-btn1')
        errorMessage1.style.color = 'red';
        errorMessage1.style.display = 'none';
        errorMessage1.textContent = 'You must be over 18 to continue.';

        ageInput
        .parentNode
        .appendChild(errorMessage1);

        function validateAge() {
            const age = parseInt(ageInput.value, 10);
            if (age > 18) {
                btn1.style.pointerEvents = 'auto';
                errorMessage1.style.display = 'none';
            } else {
                btn1.style.pointerEvents = 'none';
                errorMessage1.style.display = 'block';
            }
        }
    
        // Validate on input (while typing)
        ageInput.addEventListener('input', validateAge);
    
        // Validate on blur (when leaving the field)
        ageInput.addEventListener('blur', validateAge);

    btn1.addEventListener('click', function (e) {
        const age = parseInt(ageInput.value, 10);
        if (age > 18) {
            page1
                .classList
                .remove('page-show');
            page1
                .classList
                .add('page-hide');
            page2
                .classList
                .remove('page-hide');
            page2
                .classList
                .add('page-show');
            step2
                .classList
                .add('q-active');
        } else {
            e.preventDefault();
        }
    });



    // STEP TWO VALIDATION

    const errorMessage2 = document.createElement('p');
        const btn2 = document.getElementById('q-btn2')
        errorMessage2.style.color = 'red';
        errorMessage2.style.display = 'none';
        errorMessage2.textContent = 'Please enter your income.';

        incomeInput
        .parentNode
        .appendChild(errorMessage2);


        function validateIncome() {
            const incomeValue = incomeInput.value.trim();
            if (incomeValue !== '') {
                btn2.style.pointerEvents = 'auto';
                errorMessage2.style.display = 'none';
            } else {
                btn2.style.pointerEvents = 'none';
                errorMessage2.style.display = 'block';
            }
        }
    
        // Validate on input (while typing)
         incomeInput.addEventListener('input', validateIncome);

        // Validate on blur (when leaving the field)
         incomeInput.addEventListener('blur', validateIncome);

        btn2.addEventListener('click', function (e) {
            const incomeValue = incomeInput.value.trim();
            if (!incomeValue !== '') {
                page2
                    .classList
                    .remove('page-show');
                page2
                    .classList
                    .add('page-hide');
                page3
                    .classList
                    .remove('page-hide');
                page3
                    .classList
                    .add('page-show');
                step3
                    .classList
                    .add('q-active');
            } else {
                e.preventDefault();
            }
        });


        // STEP THREE VALIDATION

        const errorMessage3 = document.createElement('p');
        const btn3 = document.getElementById('q-btn3')
        errorMessage3.style.color = 'red';
        errorMessage3.style.display = 'none';
        errorMessage3.textContent = 'Please enter your savings.';

        savingsInput
        .parentNode
        .appendChild(errorMessage3);


        function validateSavings() {
            const savingsValue = savingsInput.value.trim();
            if (savingsValue !== '') {
                btn3.style.pointerEvents = 'auto';
                errorMessage3.style.display = 'none';
            } else {
                btn3.style.pointerEvents = 'none';
                errorMessage3.style.display = 'block';
            }
        }
    
        // Validate on input (while typing)
        savingsInput.addEventListener('input', validateSavings);

        // Validate on blur (when leaving the field)
        savingsInput.addEventListener('blur', validateSavings);

        btn3.addEventListener('click', function (e) {
            const savingsValue = savingsInput.value.trim();
            if (!savingsValue !== '') {
                page3
                    .classList
                    .remove('page-show');
                page3
                    .classList
                    .add('page-hide');
                page4
                    .classList
                    .remove('page-hide');
                page4
                    .classList
                    .add('page-show');
                step4
                    .classList
                    .add('q-active');
            } else {
                e.preventDefault();
            }
        });


        //STEP FOUR VALIDATION

        const errorMessage4 = document.createElement('p');
        const btn4 = document.getElementById('q-btn4')
        errorMessage4.style.color = 'red';
        errorMessage4.style.display = 'none';
        errorMessage4.textContent = 'Please enter your retirement amount.';

        retirementInput
        .parentNode
        .appendChild(errorMessage4);


        function validateRetirement() {
            const retirementValue = retirementInput.value.trim();
            if (retirementValue !== '') {
                btn4.style.pointerEvents = 'auto';
                errorMessage4.style.display = 'none';
            } else {
                btn4.style.pointerEvents = 'none';
                errorMessage4.style.display = 'block';
            }
        }
    
        // Validate on input (while typing)
        retirementInput.addEventListener('input', validateRetirement);

        // Validate on blur (when leaving the field)
        retirementInput.addEventListener('blur', validateRetirement);

        btn4.addEventListener('click', function (e) {
            const retirementValue = retirementInput.value.trim();
            if (!retirementValue !== '') {
                page4
                    .classList
                    .remove('page-show');
                page4
                    .classList
                    .add('page-hide');
                page5
                    .classList
                    .remove('page-hide');
                page5
                    .classList
                    .add('page-show');
                step5
                    .classList
                    .add('q-active');
            } else {
                e.preventDefault();
            }
        });


        // STEP FIVE VALIDATION

        const btn5 = document.getElementById('q-btn5')

        spendBtns.forEach(item => {
            item.addEventListener('click', function () {
                item.classList.toggle('selected');
                validateStep5Selection();
            });
        });

        function validateStep5Selection() {
            const selectedButtons = document.querySelectorAll('.choice.selected');
            if (selectedButtons.length > 0) {
                btn5.style.pointerEvents = 'auto';
            } else {
                btn5.style.pointerEvents = 'none';
            }
        }
    
        btn5.addEventListener('click', function (e) {
            e.preventDefault();
    
            const selectedButtons = document.querySelectorAll('.choice.selected');
            if (selectedButtons.length > 0) {
                page5
                    .classList
                    .remove('page-show');
                page5
                    .classList
                    .add('page-hide');
                page6
                    .classList
                    .remove('page-hide');
                page6
                    .classList
                    .add('page-show');
                step6
                    .classList
                    .add('q-active');
    
            } else {
                e.preventDefault();
            }
        });

});


