// app.js
import express from 'express';
import ErrorHandler from './Utilities/util.js';
import func from './Functions/functions.js';

const app = express();

app.use(express.json());

// res.json(product)

app.get('/', (req, res, next) => {
    res.send('');
})

app.get('/mean', (req, res, next) => {
    if (!req.query.nums) {
        throw new ErrorHandler('Invalid data', 400)
    }

    let numToString = req.query.nums.split('.');
    let numbers = func.cconvertToNumbers(numToString);

    if (numbers instanceof Error) {
        throw new ErrorHandler( numbers.message);
    }

    let result = {
        operation: "mean",
        result: findMean(numbers)
    }

    return res.send(result);
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
