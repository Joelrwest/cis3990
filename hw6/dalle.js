// Code adapted from the NYC excercise
// TODO

// Grab references to all the DOM elements you"ll need to manipulate
const searchTerm = document.querySelector(".search");
const submitButton = document.querySelector(".submit");
const section = document.querySelector("section");

// Event listeners to control the functionality
submitButton.addEventListener("click", submitSearch);

var recentInput = "";

function submitSearch(_) {
    const input = searchTerm.value;
    if (recentInput === input) {
        return;
    }

    // Make query to backend and get the url of response
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8000/dalle2?input=" + input);
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send();

    var imgUrl;
    xhr.onload = function() {
        console.log(xhr.response);
        imgUrl = JSON.parse(xhr.responseText);
    }

    console.log(imgUrl);

    // const article = document.createElement("article");
    // const img = document.createElement("img");
    // const paragraph = document.createElement("p");

    // paragraph.textContent = current.snippet;

    // img.src = imgUrl;
    // img.alt = current.headline.main;

    // article.appendChild(img);
    // article.appendChild(paragraph);
    // section.appendChild(article);
}
