'use strict';

const express = require('express');
const router = express.Router();

router.use('/service/upload', new require('./FileUpload'));

router.get('/', (req, res) => {
    res.send('Move along. Nothing to see here...');
});

module.exports = router;