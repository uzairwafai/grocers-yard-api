const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const homeRouter = require('./routes/homeRouter');
const userRouter = require('./routes/userRouter');
const authtenticate=require('./middlewares/auth');


const app = express();

const port = 4000;

app.listen(port, () => console.log(`App listening in port: ${port}`));


mongoose.connect('mongodb://127.0.0.1:27017/grocers_yard')
    .then(() => { console.log('connected to db') })
    .catch(err => console.log(err));
app.use(bodyParser.json());
app.use('/users', userRouter);
app.use(authtenticate.tokenAuth);
app.use('/', homeRouter);