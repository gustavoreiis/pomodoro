const home = document.querySelector(".bx-home");
home.addEventListener("click", function() {
    window.location.href = "../index.html";
});

const config = document.querySelector(".bx-cog");
config.addEventListener("click", function() {
    window.location.href = "config.html";
});

const list = document.querySelector('.bx-list-ul');
list.addEventListener('click', function() {
    window.location.href = "taskList.html";
});

const nomeInput = document.getElementById('nome');
const descricaoInput = document.getElementById('descricao')
const ciclosInput = document.getElementById('ciclos');
const tituloCard = document.querySelector('.tituloCard');

if (localStorage.getItem('atualizandoTask')) {
    tituloCard.innerHTML = "Editar tarefa";
    var x = localStorage.getItem('taskAtualizar');
    var taskAtualizar = JSON.parse(x);

    nomeInput.value = taskAtualizar.name;
    descricaoInput.value = taskAtualizar.description;
    ciclosInput.value = taskAtualizar.cicles;
};


document.getElementById('forms').addEventListener('submit', function() {
    const nome = nomeInput.value;
    const descricao = descricaoInput.value;
    const ciclos = ciclosInput.value;

    if (localStorage.getItem('atualizandoTask')) {
        const taskAtualizar = localStorage.getItem('taskAtualizar');
        var y = taskAtualizar.current;
    } else {
        var y = 0;
    }
    

    const dataTask = {
        name: nome,
        description: descricao,
        cicles: ciclos,
        current: y
    }

    if (localStorage.getItem('atualizandoTask')) {
        const indexTaskAtualizar = localStorage.getItem('indexTaskAtualizar');
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        tasks[indexTaskAtualizar] = dataTask;

        localStorage.setItem('tasks', JSON.stringify(tasks));

        localStorage.removeItem('atualizandoTask');
        localStorage.removeItem('indexTaskAtualizar');
        localStorage.removeItem('taskAtualizar');
        alert('Tarefa atualizada.')
    } else {
        var vetorTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        vetorTasks.push(dataTask);
        localStorage.setItem("tasks", JSON.stringify(vetorTasks));
        alert('Tarefa criada.')
    }

    nomeInput.value = '';
    descricaoInput.value = '';
    ciclosInput.value = '';
});
