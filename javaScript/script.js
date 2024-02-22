const config = document.querySelector(".bx-cog");
config.addEventListener("click", function() {
    window.location.href = "html/config.html";
});

const task = document.querySelector(".bx-plus");
task.addEventListener("click", function() {
    window.location.href = "html/tasks.html";
});

const list = document.querySelector('.bx-list-ul');
list.addEventListener('click', function() {
    window.location.href = "html/taskList.html";
});

if (localStorage.getItem('timePomodoroInput') == null) {
    localStorage.setItem('timePomodoroInput', 25);
}
if (localStorage.getItem('timeShortBreakInput') == null) {
    localStorage.setItem('timeShortBreakInput', 5);
}
if (localStorage.getItem('timeLongBreakInput') == null) {
    localStorage.setItem('timeLongBreakInput', 15);
}
if (localStorage.getItem('numCiclesInput') == null) {
    localStorage.setItem('numCiclesInput', 4);
}

const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const timerDisplay = document.querySelector('.timerDisplay')

var workTime = localStorage.getItem('timePomodoroInput') * 60;
var shortBreakTime = localStorage.getItem('timeShortBreakInput') * 60;
var longBreakTime = localStorage.getItem('timeLongBreakInput') * 60;
var current = "work";
var pomodoros = 0;
var cicloAtual = 0; 
var timer;

function atualizarTimer(tempo) {
    var minutes = Math.floor(tempo / 60);
    var seconds = tempo % 60;
    if (minutes < 10) {
        timerDisplay.innerHTML = `0${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    } else {
        timerDisplay.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    document.getElementById('spanpt2').innerHTML = localStorage.getItem('numCiclesInput')
    document.getElementById('spanpt1').innerHTML = cicloAtual;
}

function IniciarTimer() {
    startButton.disabled = true;
    startButton.classList.add('selected');
    stopButton.disabled = false;
    stopButton.classList.remove('selected');

    timer = setInterval(function() {
        workTime--;
        atualizarTimer(workTime);

        if (workTime === 0) {
            clearInterval(timer);
            startButton.disabled = false;
            stopButton.disabled = true;

            if (current === "work") {
                pomodoros++;
                cicloAtual++;
                verificarTarefaSelecionada();
                if (pomodoros < localStorage.getItem('numCiclesInput')) {
                    document.querySelector('.pt').classList.remove('typeActive');
                    document.querySelector('.st').classList.add('typeActive');
                    document.querySelector('.lt').classList.remove('typeActive');
                    current = "shortBreak";
                    workTime = shortBreakTime;
                    startButton.classList.remove('selected');
                } else {
                    current = "longBreak";
                    workTime = longBreakTime;
                    startButton.classList.remove('selected');
                    pomodoros = 0;
                    cicloAtual = 0;
                    document.querySelector('.pt').classList.remove('typeActive');
                    document.querySelector('.st').classList.remove('typeActive');
                    document.querySelector('.lt').classList.add('typeActive');
                }
            } else {
                startButton.classList.remove('selected');
                current = "work";
                document.querySelector('.pt').classList.add('typeActive');
                document.querySelector('.st').classList.remove('typeActive');
                document.querySelector('.lt').classList.remove('typeActive');
                workTime = localStorage.getItem('timePomodoroInput') * 60;
            }

            atualizarTimer(workTime)
        }
    }, 1000);

}

function pararTimer() {
    clearInterval(timer);
    startButton.disabled = false;
    stopButton.disabled = true;
    startButton.classList.remove('selected');
    stopButton.classList.add('selected');
}

startButton.addEventListener("click", IniciarTimer);
stopButton.addEventListener("click", pararTimer);

atualizarTimer(workTime)


function preencherSeletor() {
    const seletorTarefas = document.getElementById('seletorTarefas');
    seletorTarefas.innerHTML = '<option value="">Selecione uma tarefa</option>';
    const tarefas = JSON.parse(localStorage.getItem('tasks')) || [];
    
    tarefas.forEach((tarefa, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.text = tarefa.name;
        seletorTarefas.appendChild(option);
    });
}

function atualizarSeletor() {
    const tituloTarefa = document.querySelector('.taskTitle');
    const ciclosTarefa = document.querySelector('.span2pt2');
    const descricaoTarefa = document.querySelector('.taskDescription');
    const selectedIndex = seletorTarefas.value;
    const currentCicle = document.querySelector('.span2pt1');

    if (selectedIndex !== "") {
        const tarefas = JSON.parse(localStorage.getItem('tasks')) || [];
        const tarefaSelecionada = tarefas[selectedIndex];
        tituloTarefa.innerHTML = tarefaSelecionada.name;
        console.log(tarefaSelecionada.current);
        currentCicle.innerHTML = tarefaSelecionada.current;
        ciclosTarefa.innerHTML = tarefaSelecionada.cicles;
        descricaoTarefa.innerHTML = tarefaSelecionada.description;
    } else {
        tituloTarefa.innerHTML = "Nome da tarefa";
        ciclosTarefa.innerHTML = "0";
        descricaoTarefa.innerHTML = "Descrição da tarefa";
    }
}

function verificarTarefaSelecionada() {
    const selectedIndex = seletorTarefas.value;
    if (selectedIndex !== "") {
        const tarefas = JSON.parse(localStorage.getItem('tasks')) || [];
        const tarefa = tarefas[selectedIndex];
        if (tarefa.current < tarefa.cicles) {
            tarefa.current += 1;
            if (tarefa.current == tarefa.cicles) {
                tarefa.concluded = true;
            }
        }
        localStorage.setItem('tasks', JSON.stringify(tarefas));
    }
    atualizarSeletor();
}


preencherSeletor();
seletorTarefas.addEventListener('change', atualizarSeletor);



