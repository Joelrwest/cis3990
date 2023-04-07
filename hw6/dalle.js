// Code adapted from the NYC excercise
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs

// Grab references to all the DOM elements you"ll need to manipulate
const searchTerm = document.querySelector(".search");
const submitButton = document.querySelector(".submit");
const section = document.querySelector("section");

// Event listeners to control the functionality
submitButton.addEventListener("click", submitInput);

var recentInput = "";

function queryDalle(input) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8000/dalle2?input=" + input);
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.addEventListener("load", (event) => {
        const url = event.target.responseText;
        addImage(input, url);
    });
    xhr.send();
}

function addImage(input, url) {
    const article = document.createElement("article");
    const img = document.createElement("img");
    const paragraph = document.createElement("p");

    paragraph.textContent = input;

    img.src = url;
    img.alt = input;

    article.appendChild(img);
    article.appendChild(paragraph);
    section.appendChild(article);
}

function submitInput(_) {
    const input = searchTerm.value;
    if (input === recentInput || input === "") {
        const article = document.createElement("article");
        const paragraph = document.createElement("p");

        const suggestion = input === "" ? "non-empty" : "different";

        paragraph.textContent = "Please enter a " + suggestion + " prompt.";

        article.appendChild(paragraph);
        section.appendChild(article);

        return;
    }

    // Make query to backend and get the url of response
    recentInput = input;
    queryDalle("Man standing on the street wearing a " + input);
}
