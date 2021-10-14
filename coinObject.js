const coin = {
    state: 0,

    flip: function () {
        // Use "this.state" para acessar a propriedade "state".
        // Configure de forma randômica a propriedade “state” do
        // seu objeto moeda. "STATE" deve receber somente os valores 0 ou 1.
    },

    toString: function () {
        // Se o valor de "state" for 0, retorne "Heads"
        // Se o valor de "state" for 1, retorne "Tails"
    },

    toHTML: function () {
        const image = document.createElement("img");
        // Colocar uma imagem correspondente a essa valor.
        // image.src = "./CAMINHO/IMAGEM.JPEG"
        // image.alt = "Heads/Tails"
        return image;
    },
};

function display20Flips() {
    const results = [];
    // Use um loop para arremessar a moeda 20 vezes.
    // Depois que o seu loop terminar, exiba o resultado na página no formato de TEXTO.
    // Além de exibir os resultados na página, não esqueça
    // de retornar o valor de "results".
    // Caso esqueça de retornar "results", sua função não
    // irá passar nos testes.
}

function display20Images() {
    const results = [];
    // Use um loop para arremessar a moeda 20 vezes.
    // Depois que o seu loop terminar, exiba o resultado na página no formato de IMAGEM.
    // Além de exibir os resultados na página, não esqueça
    // de retornar o valor de "results".
    // Caso esqueça de retornar "results", sua função não
    // irá passar nos testes.
}