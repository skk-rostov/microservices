const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', async (req, res, next) => {
    try {
        const { type, data } = req.body;

        if(type=== 'CommentCreated') {
            const status = data.content.includes('orange') ? 'reject' : 'approved';

            await axios.post('http://localhost:4015/events',{
                type: 'CommentModerated',
                data:{
                    id: data.id,
                    postId: data.postId,
                    status,
                    content: data.content
                }
            });

        }
        res.send({});
    } catch (error) {
        console.error(error);
        next(error);
    }
})

app.listen(4003, ()=>{
    console.log('starting server on 4003')
})