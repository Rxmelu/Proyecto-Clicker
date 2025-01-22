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
        res.json(db_response.rows[0])

    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
     }
})



// POSTS


app.post('/user', async (req, res) => {

    try {
        let query = `INSTERT INTO usuarios VALUES ('${req.body.id})', '${req.body.name}');`;
        let db_response = await db.query(query);

        console.log(db_response);

    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');

    }
});

app.post('/user', async (req, res) => {

    try {
        let query = `INSTERT INTO usuarios VALUES ('${req.body.id})', '${req.body.name}');`;
        let db_response = await db.query(query);

        console.log(db_response);

    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');

    }
});

// POST para actualizar el dinero del usuario
app.post('/dinero', async (req, res) => {
    try{
        let query = ``
        let db_response = await db.query(query);

    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');

    }
});

const port = process.env.PORT || 3000;

app.listen(port, () => 
    console.log(`App listening on PORT ${port}
    ENDPOINTS:
    - GET /user/:email
    - GET /usuarios/informacion/:id_usuario
    - POST /user`));