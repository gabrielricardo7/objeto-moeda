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
        image.src = `./images/${this.toString()}.png`;
        image.alt = `${this.toString()}`;
        return image;
    },
};

displayHeader();
const main = document.createElement("main");
document.body.appendChild(main);
displayFooter();

function display20Flips() {
    const results = [];
    for (let i = 0; i < 20; i++) {
        setTimeout(function timer() {
            results.push(coin.flip());
            const text = document.createElement("p");
            text.innerText = coin.toString();
            main.appendChild(text);
        }, i * 1000);
    }
    return results;
}

function display20Images() {
    const results = [];
    for (let i = 0; i < 20; i++) {
        setTimeout(function timer() {
            results.push(coin.flip());
            main.appendChild(coin.toHTML());
        }, i * 1000);
    }
    return results;
}

function displayOneFlip() {
    let result = coin.flip();
    const text = document.createElement("p");
    text.innerText = coin.toString();
    main.appendChild(text);
    return result;
}

function displayOneImage() {
    let result = coin.flip();
    main.appendChild(coin.toHTML());
    return result;
}

function displayHeader() {
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    const btnOneFlip = document.createElement("button");
    const btnOneImage = document.createElement("button");
    const btn20Flips = document.createElement("button");
    const btn20Images = document.createElement("button");
    const btnReset = document.createElement("button");

    h1.textContent = "Heads/Tails";
    h2.textContent = "Select a option:";
    btnOneFlip.textContent = "Flip a coin (text)";
    btnOneImage.textContent = "Flip a coin (image)";
    btn20Flips.textContent = "Flip 20 coins (text)";
    btn20Images.textContent = "Flip 20 coins (image)";
    btnReset.textContent = "Reset";

    btnOneFlip.addEventListener("click", displayOneFlip);
    btnOneImage.addEventListener("click", displayOneImage);
    btn20Flips.addEventListener("click", display20Flips);
    btn20Images.addEventListener("click", display20Images);
    btnReset.addEventListener("click", resetMain);

    header.appendChild(h1);
    header.appendChild(h2);
    header.appendChild(btnOneFlip);
    header.appendChild(btnOneImage);
    header.appendChild(btn20Flips);
    header.appendChild(btn20Images);
    header.appendChild(btnReset);
    document.body.appendChild(header);
}

function resetMain() {
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
}

function displayFooter() {
    const footer = document.createElement("footer");
    footer.innerHTML = "<p>&copy; 2021 Gabriel Ricardo (Q1 JULHO-21) at Kenzie Academy Brazil</p>";
    document.body.appendChild(footer);
}