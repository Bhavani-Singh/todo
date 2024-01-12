import express from "express";

const app = express();
const port = process.env.PORT || 3000;


app.get("/", (req, res) => {
    
})

app.listen(port, () => {
    console.log(`The server is up and listening on the port: ${port}`)
});

