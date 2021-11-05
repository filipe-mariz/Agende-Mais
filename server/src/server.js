const express = require('express');
const cors = require('cors');
const route = require('./routes');
require('dotenv');

const app = express();

app.use(cors());
app.use(route);

app.listen(process.env.PORT_SERVER, () => console.log("The server is run"));
