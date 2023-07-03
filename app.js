const express = require("express");
const app = express ();

app.get("/home", (request, response) => {
    console.log(request);
    response.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (request, response) => {
    console.log(request);
    response.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (request, response) => {
    console.log(request);
    response.sendFile(__dirname + "/views/works.html");
});

app.get("/photoGallery", (request, response) => {
    console.log(request);
    response.sendFile(__dirname + "/views/photoGallery.html");
});

app.listen(3000, () => {
console.log("app listening")
});