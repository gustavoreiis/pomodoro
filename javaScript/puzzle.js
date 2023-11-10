//Puzzle
const botao = document.getElementById('form');
botao.addEventListener('submit', function(event) {
    event.preventDefault();

    const eSenha = document.getElementById('password');
    var senha = eSenha.value.toUpperCase();

    if (senha == "GORGEOUS") {
        const div = document.querySelector('.formsDiv');
        div.style.display = "none";

        var novoElemento = document.createElement("div");

        var primeiro = document.createElement('i');
        primeiro.className = 'bx bxl-whatsapp';

        var segundo = document.createElement("i");
        segundo.className = "bx bxs-pin";

        var terceiro = document.createElement("p");
        terceiro.textContent = '"."';

        var quarto = document.createElement("i")
        quarto.className = "bx bx-qr";

        
        novoElemento.appendChild(primeiro)
        novoElemento.appendChild(segundo);
        novoElemento.appendChild(terceiro);
        novoElemento.appendChild(quarto);
        document.body.appendChild(novoElemento)
    } else {
        alert("Senha incorreta")
    }
});
