const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connected successfully"))
  .catch((err) => console.log(err));
app.use(express.json()); // to recieve json data to server
app.get("/api/test", () => {
  console.log("test is successful");
});

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
