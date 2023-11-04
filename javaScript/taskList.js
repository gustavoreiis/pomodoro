const home = document.querySelector(".bx-home");
home.addEventListener("click", function() {
    window.location.href = "../index.html";
});

const config = document.querySelector(".bx-cog");
config.addEventListener("click", function() {
    window.location.href = "config.html";
});

const list = document.querySelector('.bx-plus');
list.addEventListener('click', function() {
    window.location.href = "tasks.html";
})

const container = document.querySelector('.containerCard');

function criarCards() {
    const tarefas = JSON.parse(localStorage.getItem('tasks')) || [];

    tarefas.forEach((tarefa, index) => {
        const card = document.createElement('div');
        const tarefaSelecionada = tarefas[index];
        const cardTitle = document.createElement('h1')
        const cardDescription = document.createElement('p');

        cardTitle.innerHTML = tarefaSelecionada.name;
        cardDescription.innerHTML = tarefaSelecionada.description;

        card.appendChild(cardTitle);
        card.appendChild(cardDescription);

        const botoes = document.createElement('div')
        botoes.classList.add('buttons');
        const editar = document.createElement('button')
        const excluir = document.createElement('button')

        excluir.textContent = "Excluir";
        excluir.addEventListener('click', excluirTarefa);

        editar.textContent = "Editar";
        editar.addEventListener('click', editarTarefa);

        botoes.appendChild(editar);
        botoes.appendChild(excluir);
        card.appendChild(botoes);

        card.classList.add('card')
        document.body.appendChild(card)
        
    });

    
        

}

criarCards();

function excluirTarefa() {
    console.log("Excluindo")
}


function editarTarefa() {
    console.log("Editando")
}