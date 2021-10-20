const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
    try {
        res.send(posts);
    } catch (error) {
        console.error(error);
        next(error);
    }    
});

app.post('/posts', (req, res) => {
    try {
        const id = randomBytes(4).toString('hex');
        const { title } = req.body;
        posts[id] = {
            title,
            id
        };
        res.status(201).send(posts[id]);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

app.listen(4000, () => {
    console.log('Listen on http://localhost:4000');
})