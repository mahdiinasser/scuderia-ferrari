const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config({ path: './config/config.env' });

connectDB();

const specs = require('./routes/specs');
const about = require('./routes/about');
const news = require('./routes/news');
const drivers = require('./routes/drivers');
const { connect } = require('http2');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/v1/specs', specs);
app.use('/api/v1/about', about);
app.use('/api/v1/news', news);
app.use('/api/v1/drivers', drivers);



app.get('/', (req, res) => res.send('Hello'));

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
  }

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold));