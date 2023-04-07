// Code adapted from the NYC excercise
// TODO

// Grab references to all the DOM elements you"ll need to manipulate
const searchTerm = document.querySelector(".search");
const submitButton = document.querySelector(".submit");
const section = document.querySelector("section");

// Event listeners to control the functionality
submitButton.addEventListener("click", submitSearch);

var recentInput = "";

function queryDalle(input) {
    console.log("I am querying");
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8000/dalle2?input=" + input);
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.addEventListener("load", (event) => {
        const url = event.target.responseText;
        console.log(url)
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

// function getUrl() {
//     var url;

//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "http://localhost:8000/img");
//     xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
//     xhr.addEventListener("load", () => {url = this.responseText});
//     xhr.send();

//     return url;
// }

function submitSearch(_) {
    const input = searchTerm.value;
    if (recentInput === input) {
        return;
    }

    // Make query to backend and get the url of response
    queryDalle(input);
}
