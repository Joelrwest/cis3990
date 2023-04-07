// Required modules
const fs = require("fs");
const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const cors = require("cors");

// Set up app
const app = express();
app.use((request, result, next) => {
    result.setHeader("Access-Control-Allow-Origin", "*");
    result.setHeader("Access-Control-Allow-Methods","POST");
    result.setHeader("Access-Control-Allow-Methods", "Content-Type", "Authorization");
    next();
});

// Create openai tools
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Get image streams
const baseImgStream = fs.createReadStream("img/stylish-guy.png");
const maskImgStream = fs.createReadStream("img/mask.png");

// var imgUrl = "";
// var completedImg = false;

// Define endpoint
app.post("/dalle2", async function (request, response) {
    const prompt = "Man standing on the street wearing a " + request.query.input;
    console.log(prompt);

    const dalleResponse = await openai.createImageEdit(
        baseImgStream,
        prompt,
        maskImgStream,
        1,
        "1024x1024"
    );
    const imgUrl = dalleResponse.data.data[0].url;

    // completedImg = true;
    console.log(imgUrl);
    response.send(imgUrl);
});

// app.get("/img", function (request, response) {;
//     response.send(JSON.stringify({'url': completedImg ? imgUrl : ""}));
//     completedImg = false;
// });

app.use(cors());
app.listen("8000");
