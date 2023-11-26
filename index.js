const express = require('express');
const homeRouter=require('./routes/homeRouter')


const app = express();

const port = 4000;

app.listen(port, () => console.log(`App listening in port: ${port}`));


app.use('/',homeRouter);