const coin = {
    state: 0,

    flip: function () {
        // Use "this.state" para acessar a propriedade "state".
        this.state = getRandomIntInclusive(0, 1);
        // Configure de forma randômica a propriedade “state” do
        // seu objeto moeda. "STATE" deve receber somente os valores 0 ou 1.
        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        return this.state;
    },

    toString: function () {
        // Se o valor de "state" for 0, retorne "Heads"
        if (this.state === 0) {
            return "Heads";
        } else {
            return "Tails";
        }
        // Se o valor de "state" for 1, retorne "Tails"
    },

    toHTML: function () {
        const image = document.createElement("img");
        // Colocar uma imagem correspondente a essa valor.
        if (this.state === 0) {
            image.src = "./images/moeda-cara.png"; image.alt = "Heads";
        } else {
            image.src = "./images/moeda-coroa.png";
            image.alt = "Tails";
        }
        // image.src = "./CAMINHO/IMAGEM.JPEG"
        // image.alt = "Heads/Tails"
        return image;
    },
};

function display20Flips() {
    const results = [];
    // Use um loop para arremessar a moeda 20 vezes.
    for (let i = 0; i < 20; i++) {
        results.push(coin.flip());
        const text = document.createElement("p");
        text.innerText = coin.toString();
        document.body.appendChild(text);
    }
    // Depois que o seu loop terminar, exiba o resultado na página no formato de TEXTO.
    // Além de exibir os resultados na página, não esqueça
    // de retornar o valor de "results".
    return results;
    // Caso esqueça de retornar "results", sua função não
    // irá passar nos testes.
}

function display20Images() {
    const results = [];
    let n = 0;
    // Use um loop para arremessar a moeda 20 vezes.
    while (n < 20) {
        results.push(coin.flip());
        document.body.appendChild(coin.toHTML());
        n++;
    }
    // Depois que o seu loop terminar, exiba o resultado na página no formato de IMAGEM.
    // const image = document.createElement("img");
    // Além de exibir os resultados na página, não esqueça
    // de retornar o valor de "results".
    return results;
    // Caso esqueça de retornar "results", sua função não
    // irá passar nos testes.
}