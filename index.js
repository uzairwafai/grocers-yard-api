const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const homeRouter = require("./routes/homeRouter");
const userRouter = require("./routes/userRouter");
const authtenticate = require("./middlewares/auth");
const productRouter = require("./routes/productRouter");
const orderRouter = require("./routes/orderRouter");

const app = express();

const port = 4000;

app.listen(port, () => console.log(`App listening in port: ${port}`));

// mongoose
//   .connect("mongodb://127.0.0.1:27017/grocers_yard")
//   .then(() => {
//     console.log("connected to db");
//   })
//.catch((err) => console.log(err));
async function connect() {
  await mongoose.connect("mongodb://127.0.0.1:27017/grocers_yard");
  console.log("connected to db");
};
connect();
app.use(bodyParser.json());
app.use("/users", userRouter);
app.use("/", homeRouter);
app.use(authtenticate.tokenAuth);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
