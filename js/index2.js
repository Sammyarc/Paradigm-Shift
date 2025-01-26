
function toggleDropdown(event, dropdownId) {
    event.preventDefault();
    var dropdownContent = document.getElementById(dropdownId);
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
}

const year = document.getElementById('year');
year.textContent = new Date().getFullYear();


function toggleAnswer(id) {
    // Get all FAQ answers and questions
    var answers = document.querySelectorAll('.faq-answer');
    var questions = document.querySelectorAll('.faq-question');

    // Hide all answers and remove active class from all questions
    answers.forEach(function(answer) {
      answer.classList.remove('open');
    });
    questions.forEach(function(question) {
      question.classList.remove('open');
    });

    // Show the selected answer and add active class to the clicked question
    var selectedAnswer = document.getElementById(id);
    var selectedQuestion = document.querySelector(`[onclick="toggleAnswer('${id}')"]`);
    selectedAnswer.classList.add('open');
    selectedQuestion.classList.add('open');
  }


