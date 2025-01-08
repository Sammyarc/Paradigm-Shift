
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



