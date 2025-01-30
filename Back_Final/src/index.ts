import express from "express";
import cors from 'cors';
const app = express();
app.use(cors());

import bodyParser from 'body-parser';
const jsonParser = bodyParser.json();

import * as db from './db-connections';


// GETS


// GET para consneguir toda la informacion del usuario
app.get('/usuarios/:id_usuario', async (req, res) => {
    try {
        let query = `SELECT * FROM usuarios WHERE id_usuario='${req.params.id_usuario}'`;
        let db_response = await db.query(query);

        if(db_response.rows.length > 0){
            console.log(`Usuario encontrado: ${db_response.rows[0].id_usuario}`);
            res.json(db_response.rows[0]);   
        } else{
            console.log(`Usuario no encontrado.`)
            res.json(`User not found`);
        }

    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
     }
})



// POSTS

// POST para crear usuarios
app.post('/usuarios', jsonParser, async (req, res) => {
    try {
        let query = `INSERT INTO usuarios VALUES ('${req.body.id_usuario}');`;
        let db_response = await db.query(query);

        console.log(db_response);

        if(db_response.rowCount == 1){
            res.json(`El usuario ha sido registrado correctamente.`);
        } else{
            res.json(`El registro no ha sido registrado.`);
        }

    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');

    }
});

// POST para actualizar el dinero del usuario
app.post('/dinero', jsonParser, async (req, res) => {
    try{
        let query = `UPDATE usuarios SET dinero = ${req.body.dinero} WHERE id_usuario = 'rruiz05@colegiosantamonica.eu';`
        let db_response = await db.query(query);
        res.json("Dinero Actualizado");

    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');

    }
});

// POST para actualizar los clicks totales del usuario
app.post('/clicks', jsonParser, async (req, res) => {
    try{
        let query = `UPDATE usuarios SET cantidad_clicks = ${req.body.cantidad_clicks} WHERE id_usuario = 'rruiz05@colegiosantamonica.eu';`
        let db_response = await db.query(query);
        res.json("Clicks Actualizados");

    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');

    }
});

const port = process.env.PORT || 3000;

app.listen(port, () => 
    console.log(`App listening on PORT ${port}
    ENDPOINTS:
    - GET /usuarios/:id_usuario
    - POST /dinero
    - POST /clicks
    - POST /usuarios`));