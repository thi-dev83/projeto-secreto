//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomes = [];

// Adicionar nomes
function adicionarNome(nome) {
    if (!nome || nome.trim() === "") {
        alert("Digite um nome válido!");
        return;
    }
    nomes.push(nome.trim());
    console.log("Nome adicionado:", nome);
    visualizarLista();
}

// Visualizar lista
function visualizarLista() {
    console.log("Lista de nomes:", nomes);
}

// Sorteio aleatório
function sortearAmigo() {
    if (nomes.length === 0) {
        alert("A lista está vazia!");
        return;
    }
    const sorteado = nomes[Math.floor(Math.random() * nomes.length)];
    console.log("Sorteado:", sorteado);
    alert("Sorteado: " + sorteado);
}

// Exemplo de uso:
adicionarNome(prompt("Digite o nome do amigo:"));
adicionarNome(prompt("Digite outro nome:"));
sortearAmigo();