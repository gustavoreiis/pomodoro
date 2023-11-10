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
})

//-----------------------------------
const user = document.querySelector('.bx-user');
user.addEventListener('click', function() {
    window.location.href = "puzzle.html";
})
//----------------------------------

const nomeInput = document.getElementById('nome');
const descricaoInput = document.getElementById('descricao')
const ciclosInput = document.getElementById('ciclos');


document.getElementById('forms').addEventListener('submit', function() {
    const nome = nomeInput.value;
    const descricao = descricaoInput.value;
    const ciclos = ciclosInput.value;

    const dataTask = {
        name: nome,
        description: descricao,
        cicles: ciclos,
        concluded: false
    }

    alert('Tarefa criada.')

    nomeInput.value = '';
    descricaoInput.value = '';
    ciclosInput.value = '';

    var vetorTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    vetorTasks.push(dataTask);
    localStorage.setItem("tasks", JSON.stringify(vetorTasks));
});