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

// Define endpoint
app.post("/dalle2", function (request, response) {
    const input = request.query;

    console.log(input);
    // const dalleResponse = openai.createImageEdit(
    //     baseImgStream,
    //     maskImgStream,
    //     "Man standing on the street wearing a " + input,
    //     1,
    //     "1024x1024"
    // );

    // const imgUrl = dalleResponse.then((val) => val.data.data[0].url);
    // response.send(imgUrl);
});

app.use(express.json());
app.use(cors());
app.listen("8000");
