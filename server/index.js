const express = require("express")
const routes = require("./routes")
const app = express()
const cors = require("cors");
app.use(
    cors({
        origin: ["http://localhost:3000"], // restrict calls to those this address
        methods: "POST" // only allow POST requests
    })
);
app.get("/food", routes.food)
app.listen("8080", () => {
    console.log("server is listening on port 8080")
})