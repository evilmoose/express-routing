// app.js
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('A route');
})

app.listen(5000, () => {
    console.log('Listening... Port: 5000')
})