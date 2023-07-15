const express = require('express');
const {ConnectDatabase} = require('./src/config/connection');

class CreateServer {
    constructor(){
        this.app = null;
        this.port = 3000;
    }

    start(){
        this.app = express();
        this.app.use('/', (req, res) => {
            res.send("Hola Mundo!")
        });
        this.app.listen(this.port , () => {
            console.log(`Running at http://localhost:${this.port}`);
        });
    }

};

const server = new CreateServer();
server.start();

const database = new ConnectDatabase();
database.connect();