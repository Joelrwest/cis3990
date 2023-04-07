// Required modules
const fs = require("fs");
const { Configuration, OpenAIApi } = require("openai");
const express = require("express");

// Create variables
const app = express();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const baseImgStream = fs.readFileSync("img/stylish-guy.png");
const maskImgStream = fs.createReadStream("img/mask.png");

// Define endpoint
app.post("/", function (request, response) {
    const input = request.params.input;

    const dalleResponse = openai.createImageEdit(
        baseImgStream,
        maskImgStream,
        "Man standing on the street wearing a " + input,
        1,
        "1024x1024"
    );

    const imgUrl = dalleResponse.then((val) => val.data.data[0].url);
    response.send(imgUrl);
});

app.listen("8000");
