const express = require('express');
const app = express();
const { meanCalculator, medianCalculator, modeCalculator, validNums } = require('./calculations');
const ExpressError = require('./expressError');


// nums=[2,3,4,5,6,6]

app.get('/mean', function(req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('Nums are required.', 400)
    }

    let numsAsStrings = req.query.nums.split(',');
    let nums = validNums(numsAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: 'mean',
        result: meanCalculator(nums)
    }
  
    return res.send(result);
});


app.get('/median', function(req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('Nums are required.', 400)
    }

    let numsAsStrings = req.query.nums.split(',');
    let nums = validNums(numsAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: 'median',
        result: medianCalculator(nums)
    }
  
    return res.send(result);
});


app.get('/mode', function(req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('Nums are required.', 400)
    }

    let numsAsStrings = req.query.nums.split(',');
    let nums = validNums(numsAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "mode",
        result: modeCalculator(nums)
    }
  
    return res.send(result);
});


app.use((req, res, next) => {
    const e = new ExpressError('Page Not Found', 404)
    next(e)
})
  
  
app.use(function (err, req, res, next) {
    let status = err.status || 500;
    let message = err.msg;
  
    return res.status(status).json({
        error: { message, status }
    });
});


app.listen(5000, function() {
    console.log('Server starting on port 5000');
});
  

