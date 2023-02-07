const express = require("express");
const path = require("path");
const app = express();
const PORT = 3040;

app.use(express.static("public"));

app.get("/", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/home.html"))
})

app.get("/creatucuenta", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/creatucuenta.html"))
})

app.get("/ingresa", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/ingresa.html"))
})

app.get("/ayuda", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/ayuda.html"))
})

app.get("/miscompras", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/miscompras.html"))
})

app.get("/ofertas", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/ofertas.html"))
})

app.get("/tiendasoficiales", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/tiendasoficiales.html"))
})

app.get("/vender", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/vender.html"))
})

app.listen(PORT, () => console.log(`
Server listen in port ${PORT}
http://localhost:${PORT}
`))