const express = require('express');
const { db } = require("../database");
const printerRouter = express.Router()

printerRouter.get('/', (req, res) => {
    db.query('SELECT * FROM printers', (err, rows) => {

        if (err) {
            console.log(err);
            res.status(500).json({ Message: "SQL error" });
        }
        else {
            res.status(200).json({ Message: "Get printers success", result: rows });
        }
    })
});

module.exports = printerRouter;