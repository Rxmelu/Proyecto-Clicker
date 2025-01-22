import express from "express";
import cors from 'cors';
const app = express();
app.use(cors());

import bodyParser from 'body-parser';
const jsonParser = bodyParser.json();

import * as db from './db-connections';


app.get('/suma/:valor1/:valor2', (req, res) => {
    let resultado = Number(req.params.valor1) + Number(req.params.valor2)
    console.log(`El resultado de la suma es = ${resultado}`);
    res.send(String(resultado));
});

app.get('/resta/:valor1/:valor2', (req, res) => {
    let resultado = Number(req.params.valor1) - Number(req.params.valor2)
    console.log(`El resultado de la resta es = ${resultado}`);
    res.send(String(resultado));
});

app.get('/multiplicacion/:valor1/:valor2', (req, res) => {
    let resultado = Number(req.params.valor1) * Number(req.params.valor2)
    console.log(`El resultado de la multiplicacion es = ${resultado}`);
    res.send(String(resultado));
});

app.get('/division/:valor1/:valor2', (req, res) => {
    let resultado = Number(req.params.valor1) / Number(req.params.valor2)
    console.log(`El resultado de la division es = ${resultado}`);
    res.send(String(resultado));
});

app.post('/probar', jsonParser, async (req, res) => {
    console.log(req.body)
    try {
        let newData = {
        nombre: `${req.body.Nombre} ${req.body.Apellido}`,
        Email: req.body.Email
        };

        res.json(newData)
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/futbolistas', async (req, res) => {
    console.log(`Los futbolistas en la base de datos son:`);
    try {

       let db_response = await db.query("SELECT * FROM alumnos");

       console.log(db_response.rows)
       res.send(db_response.rows)

    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error')
    }

});

app.post('/futbolistas', jsonParser, async (req, res) => {
    console.log(`Petición recibida al endpoint POST /futolistas'
    Body:${JSON.stringify(req.body)}`);
    try {

        let query = `INSERT INTO alumnos (name, email, img) VALUES ('${req.body.name}', '${req.body.email}', '${req.body.img}');`;
        console.log(query)
        let db_response = await db.query(query);
        console.log(db_response);        
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

const port = process.env.PORT || 3000;

app.listen(port, () => 
    console.log(`App listening on PORT ${port}
    ENDPOINTS:
    - GET /suma/:valor1/:valor2
    - GET /resta/:valor1/:valor2
    - GET /multiplicacion/:valor1/:valor2
    - GET /division/:valor1/:valor2
    - POST /prueba
    - GET /futbolistas`));