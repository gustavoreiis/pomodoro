const home = document.querySelector(".bx-home");
home.addEventListener("click", function() {
    window.location.href = "../index.html";
});

const task = document.querySelector(".bx-plus");
task.addEventListener("click", function() {
    window.location.href = "tasks.html";
});

const list = document.querySelector('.bx-list-ul');
list.addEventListener('click', function() {
    window.location.href = "taskList.html";
});

const pomodoroInput = document.getElementById('pomodoroInput');
const shortBreakInput = document.getElementById('shortBreakInput');
const longBreakInput = document.getElementById('longBreakInput');
const ciclesInput = document.getElementById('ciclesInput')

pomodoroInput.value = localStorage.getItem('timePomodoroInput');
shortBreakInput.value = localStorage.getItem('timeShortBreakInput');
longBreakInput.value = localStorage.getItem('timeLongBreakInput');
ciclesInput.value = localStorage.getItem('numCiclesInput');

document.getElementById('configForm').addEventListener('submit', function(event) {
    event.preventDefault();

    if (pomodoroInput.value == '' || shortBreakInput.value == '' || longBreakInput.value == '' || ciclesInput.value == '') {
        alert('Preencha todos os espaços antes de salvar!')
    } else {
        var timePomodoroInput = pomodoroInput.value;
        var timeShortBreakInput = shortBreakInput.value;
        var timeLongBreakInput = longBreakInput.value;
        var numCiclesInput = ciclesInput.value;

        localStorage.setItem('timePomodoroInput', timePomodoroInput);
        localStorage.setItem('timeShortBreakInput', timeShortBreakInput);
        localStorage.setItem('timeLongBreakInput', timeLongBreakInput);
        localStorage.setItem('numCiclesInput', numCiclesInput);
        alert('Dados salvos.');
        window.location.href = "../index.html";
    }
});