'use strict';

const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    let file = req.files['fupload'];

    file.mv(`./public/images/${file.name}`, (err) => {
        if (err) {
            res.status(500).json({ data: { name: 'error', message: err.message } });
        } else {
            res.status(200).json({ data: { name: file.name, message: `${file.name} uploaded successfully.` } });
        }
    });
});

module.exports = router;