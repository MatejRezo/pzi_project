const express = require('express');
const { db } = require("../database");
const userRouter = express.Router()

userRouter.get('/', (req, res) => {
    db.query(
        `SELECT * 
        FROM users`,
        (err, rows) => {

            if (err) {
                console.log(err);
                res.status(500).json({ Message: "SQL error" });
            }
            else {
                res.status(200).json({ Message: "Get users success", result: rows });
            }
        })
});

userRouter.post('/', (req, res) => {
    const { first_name,
        last_name,
        user_name,
        email,
        password,
        role_id } = req.body
    db.query(
        `INSERT 
        INTO users
        (first_name,
        last_name,
        user_name,
        email,
        password,
        role_id)
        VALUES 
        (?,?,?,?,?,?)
        `,
        [first_name,
            last_name,
            user_name,
            email,
            password,
            role_id],
        (err, rows) => {

            if (err) {
                console.log(err);
                res.status(500).json({ Message: "SQL error" });
            }
            else {
                res.status(200).json({ Message: "POST user success" });
            }
        })
});


module.exports = userRouter;