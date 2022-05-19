const express = require('express');
const cors = require('cors');
const events = require('events');
require('dotenv').config();

const emitter = new events.EventEmitter();
const app = express();
const Port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/sendmessage', (req, resp) => {
    const msg = req.body;
    emitter.emit('newMessge', msg)
    resp.sendStatus(200);
})

app.get('/getmessage', (req, resp) => {
    emitter.once('newMessage', (msg) => {
        resp.json(msg)
    })
        resp.send(JSON.stringify({success: "Ок", message: "connected"}));
})

app.listen(Port,  () => {
    console.log(`Server listening on ${Port}`)
})