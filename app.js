const express = require('express');
const cors = require("cors");
const cookieparser = require("cookie-parser");
const port = 3000;
const userRouter = require("./routers/userRouter");
const printerRouter = require("./routers/printerRouter");


const app = express();
app.use(cors({}));
app.use(cookieparser());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));



app.get('/', (req, res) => {
  res.status(200).json({ Message: 'Hello World!' });
});

app.use("/users", userRouter);
app.use("/printers", printerRouter)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

