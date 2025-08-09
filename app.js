let nomes = [];

// Adicionar nomes
function adicionarNome(nome) {
    if (!nome || nome.trim() === "") {
        alert("Digite um nome válido!");
        return false;
    }
    nomes.push(nome.trim());
    console.log("Nome adicionado:", nome);
    return true;
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

// --- Entrada de nomes ---
while (nomes.length < 20) {
    let entrada = prompt(`Digite o nome do amigo (${nomes.length + 1}/20) ou "sorteio" para sortear:`);

    if (!entrada) break; // Se apertar Cancelar, sai

    if (entrada.toLowerCase() === "sorteio") {
        break; // Sai do loop para sortear
    }

    if (adicionarNome(entrada)) {
        visualizarLista();
    }
}

// Faz o sorteio
sortearAmigo();