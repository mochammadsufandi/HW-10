const express = require('express');
const router = require('./routes/main');
const errorHandler = require('./middleware/errorHandler');
const morgan = require('morgan');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use(morgan('dev'));
app.use('/API',router);
app.use(errorHandler);



app.listen(PORT, () => {
    console.log(`App is litening in server with port ${PORT}`);
})
