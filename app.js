// app.js
import express from 'express';
import ErrorHandler from './Utilities/util.js';
import {convertToNumbers} from './Functions/functions.js';

const app = express();

app.use(express.json());

// res.json(product)

app.get('/', (req, res, next) => {
    if (!req.query.nums) {
        throw new ErrorHandler('Invalid data', 400)
    }
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
