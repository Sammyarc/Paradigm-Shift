
function toggleDropdown(event, dropdownId) {
    event.preventDefault();
    var dropdownContent = document.getElementById(dropdownId);
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
}

const text = document.querySelector('.text p');
text.innerHTML = text
    .innerText
    .split("")
    .map((char, i) => `<span style="transform:rotate(${i * 7}deg)">${char}</span>`)
    .join("")

document.addEventListener('DOMContentLoaded', () => {
    const animations = {
        'lottie-container': 'assets/Animation1.json',
        'how1': 'assets/Animation2.json',
        'how2': 'assets/Animation6.json',
        'how3': 'assets/Animation4.json',
        'how4': 'assets/Animation5.json',
        'embrace': 'assets/embracelottie.json'
    };

    for (const [id, path] of Object.entries(animations)) {
        const element = document.getElementById(id);

        if (element) {
            lottie.loadAnimation({
                container: element, // the DOM element to render the animation
                renderer: 'svg', // render as 'svg' or 'canvas'
                loop: true, // boolean, if the animation should loop
                autoplay: true, // boolean, if the animation should start playing immediately
                path: path // the path to the animation json
            });
        }
    }

    // CIRCLE ENTERING THE FOOTER SECTION
    const circle = document.querySelector('.circle');
    const footer = document.getElementById('footer');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                circle
                    .classList
                    .add('in-footer');
            } else {
                circle
                    .classList
                    .remove('in-footer');
            }
        });
    }, {threshold: 0.1});

    observer.observe(footer);



});
