const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const events = []

app.post('/events', (req, res, next) => {
    try {
        const event = req.body;

        events.push(event);

        axios.post('http://localhost:4000/events', event);
        axios.post('http://localhost:4001/events', event);
        axios.post('http://localhost:4002/events', event);
        axios.post('http://localhost:4003/events', event);
        
        axios.post('http://localhost:4006/events', event);
        axios.post('http://localhost:4007/events', event);
        res.send({status: 'OK'});
    } catch (error) {
        console.error(error);
        // next(error);
    }
});

app.get('/events', (req, res) => {
        res.send(events);

})


app.listen(4015, () => {
    console.log('listening on 4015');
});