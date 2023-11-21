let currentFilter = 'all';
    
function addLesson() {
    const dayInput = document.getElementById("day");
    const timeInput = document.getElementById("time");
    const typeInput = document.getElementById("type");

    const day = dayInput.value;
    const time = timeInput.value;
    const type = typeInput.value;

    const lessonList = document.getElementById("lessons");
    const lessonItem = document.createElement("div");
    lessonItem.className = "lesson";
    lessonItem.dataset.day = day;
    lessonItem.dataset.type = type;
    lessonItem.innerHTML = `
        <span>${day} - ${time} (${type === 'individual' ? 'Individual' : 'Grupo'})</span>
        <button onclick="deleteLesson(this)">X</button>
    `;

    lessonList.appendChild(lessonItem);
}

function deleteLesson(button) {
    const lessonItem = button.parentElement;
    lessonItem.remove();
}

function filterLessons(day) {
    currentFilter = day;
    const lessons = document.querySelectorAll('.lesson');

    lessons.forEach(lesson => {
        if (day === 'all' || lesson.dataset.day === day) {
            lesson.style.display = 'flex';
        } else {
            lesson.style.display = 'none';
        }
    });

    updateFilterButtons(day);
}

function updateFilterButtons(activeDay) {
    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
        const buttonDay = button.textContent.toLowerCase();
        if (buttonDay === activeDay || (activeDay === 'all' && buttonDay === 'todos')) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}    

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}

function populateHoursSelect() {
    const timeInput = document.getElementById("time");

    for (let i = 9; i <= 19; i++) {
        const option = document.createElement("option");
        option.value = `${i < 10 ? '0' : ''}${i}:00`;
        option.text = `${i < 10 ? '0' : ''}${i}:00`;
        timeInput.add(option);
    }
}

window.onload = function () {
    populateHoursSelect();
};