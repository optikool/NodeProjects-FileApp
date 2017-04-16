'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const fileUpload = require('express-fileupload');

const serverSettings = require('./settings/server.constants');

const options = {};

const app = express();

app.use(bodyParser.json());
app.use(expressValidator(options));
app.use(fileUpload());

app.use(require('./controllers'));

console.log(`Server started on host ${serverSettings.host}, port ${serverSettings.port}...`);
app.listen(serverSettings.port);
