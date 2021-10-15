const coin = {
    state: 0,

    flip: function () {
        this.state = getRandomIntInclusive(0, 1);
        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        return this.state;
    },

    toString: function () {
        if (this.state === 0) {
            return "Heads";
        } else {
            return "Tails";
        }
    },

    toHTML: function () {
        const image = document.createElement("img");

        if (this.state === 0) {
            image.src = "./images/moeda-cara.png"; image.alt = "Heads";
        } else {
            image.src = "./images/moeda-coroa.png";
            image.alt = "Tails";
        }
        return image;
    },
};

function display20Flips() {
    const results = [];
    for (let i = 0; i < 20; i++) {
        results.push(coin.flip());
        const text = document.createElement("p");
        text.innerText = coin.toString();
        document.body.appendChild(text);
    }
    return results;
}

function display20Images() {
    const results = [];
    for (let i = 0; i < 20; i++) {
        setTimeout(function timer() {
            results.push(coin.flip());
            document.body.appendChild(coin.toHTML());
        }, i * 1000);
    }
    return results;
}

function displayOneFlip() {
    let result = coin.flip();
    const text = document.createElement("p");
    text.innerText = coin.toString();
    document.body.appendChild(text);
    return result;
}

function displayOneImage() {
    let result = coin.flip();
    document.body.appendChild(coin.toHTML());
    return result;
}