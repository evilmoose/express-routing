// app.js
import express from 'express';
import ErrorHandler from './Utilities/util.js';

const app = express();

app.get('/', (req, res, next) => {
    res.send('');
})

app.get('/mean', (req, res, next) => {
    res.send('mean');
})

app.get('/median', (req, res) => {
    res.send('median');
})

app.get('/mode', (req, res) => {
    res.send('mode');
})

app.get('/all', (req, res) => {
    res.send('mode');
})

// ErrorHandler
app.use((req, res, next) => {
    const err  = new ErrorHandler("Not found", 404);
    return next(err);
})

app.listen(5000, () => {
    console.log('Listening... Port: 5000')
})