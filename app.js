const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/users", async (req, res) => {
    try{
        const url = "https://api-books-ac3j.onrender.com/users";
        const response = await axios.get(url);
        return res.json(response.data);
    } catch (error) {
        console.error(error);
        return res.status(404).json({ error: "Error en la conexión" });
    }
});

app.get("/books", async (req, res) => {
    try{
        const url = "https://api-books-ac3j.onrender.com/books";
        const response = await axios.get(url);
        return res.json(response.data);
    } catch (error) {
        console.error(error);
        return res.status(404).json({ error: "Error en la conexión" });
    }
});

app.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto 4000');
});
  