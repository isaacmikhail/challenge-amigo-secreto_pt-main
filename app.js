//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigo à lista
function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    let nomeAmigo = document.getElementById('amigo').value;

    // Validar a entrada
    if (nomeAmigo.trim() === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Atualizar o array de amigos
    amigos.push(nomeAmigo);

    // Atualizar a lista de amigos no HTML
    let listaAmigos = document.getElementById('listaAmigos');
    let novoAmigo = document.createElement('li');
    novoAmigo.textContent = nomeAmigo;
    listaAmigos.appendChild(novoAmigo);

    // Limpar o campo de entrada
    document.getElementById('amigo').value = "";
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    // Verificar se há amigos no array
    if (amigos.length === 0) {
        alert("Nenhum amigo disponível para sorteio.");
        return;
    }

    // Gerar um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obter o nome sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Exibir o resultado
    document.getElementById('resultado').innerHTML = "Amigo sorteado: " + amigoSorteado;
}
