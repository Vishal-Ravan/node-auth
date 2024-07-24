const express = require("express");
const app = express();
require("dotenv").config();
const AuthRouters = require("./routes/AuthRouter")
const ProductRouters = require("./routes/ProductRouter")


const bodyparser = require("body-parser");
const cors = require("cors");

require("./models/db");



const PORT = process.env.PORT || 8080;
app.get("/", (req, res) => {
  res.send("vishasssi");
});



app.use(bodyparser.json());
app.use(cors());


app.use('/auth', AuthRouters)
app.use('/product', ProductRouters)
app.listen(PORT, () => {
  console.log(`server running is ${PORT}`);
});
