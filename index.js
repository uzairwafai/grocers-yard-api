const express = require('express');
const mongoose=require('mongoose');
const homeRouter=require('./routes/homeRouter');


const app = express();

const port = 4000;

app.listen(port, () => console.log(`App listening in port: ${port}`));

mongoose.connect('mongodb://127.0.0.1:27017/grocers_yard');

app.use('/',homeRouter);