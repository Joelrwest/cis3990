// Code adapted from the NYC excercise
// TODO

// Grab references to all the DOM elements you"ll need to manipulate
const searchTerm = document.querySelector(".search");
const searchForm = document.querySelector("form");
const section = document.querySelector("section");

// Event listeners to control the functionality
searchForm.addEventListener("submit", submitSearch);

function submitSearch(input) {
    input.preventDefault();

    // Make query to backend and get the url of response
    // const xhr = new XMLHttpRequest();
    // xhr.open("POST", "http://127.0.1.1:8000/");
    // xhr.send("input=" + input);

    // var imgUrl;
    // xhr.onload = function() {
    //     console.log(xhr.response);
    //     imgUrl = JSON.parse(xhr.responseText);
    // }

    const response = fetch("https://api.openai.com/v1/images/variations", {
        method: "POST",
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Authorization": "Bearer $OPENAI_KEY",
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: "{image='img/stylish-guy.png',mask='img/mask.png',prompt='A french man standing in a street',n=1,size='1024x1024'}", // body data type must match "Content-Type" header
    });

    console.log(imgUrl);

    const article = document.createElement("article");
    const img = document.createElement("img");
    const paragraph = document.createElement("p");

    paragraph.textContent = current.snippet;

    img.src = imgUrl;
    img.alt = current.headline.main;

    article.appendChild(img);
    article.appendChild(paragraph);
    section.appendChild(article);
}
