const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const data = require("./db.json");
require("dotenv").config();
require("./src/config/db");
const port = process.env.PORT || 3000;

const userRouter = require("./src/routes/productRoutes");
app.use(bodyParser.json());
// app.get("/", (req, res) => {
//   res.send("Products");
// });
app.use("/", userRouter);
// app.get("/products", (req, res) => {
//   let filteredData = data.products;

//   if (req.query.name) {
//     filteredData = filteredData.filter((elem) =>
//       elem.name.toLowerCase().includes(req.query.name.toLowerCase())
//     );
//     // res.send(data.products.filter((elem)=>elem.id));
//   }

//   if (req.query.price) {
//     filtered = filtered.filter((elem) => elem.id == req.query.price);
//   }
//   if (req.query.name && req.query.price) {
//     filtered = filtered.filter(
//       (elem) =>
//         elem.name.includes(req.query.name) || elem.price == req.query.price
//     );
//   }
//   res.send(filtered);
// });

// app.get("/products/:id", (req, res) => {
//   res.send = data.products.find((elem) => elem.id == req.params.id);
//   res.send(element);
// });

// app.get("/products/price", (req, res) => {
//   if (req.query.name && req.query.price) {
//     let filtered = data.products.filter((elem) => {
//       elem.name.includes(req.query.name);
//     });
//     res.send(filtered);
//     console.log(res.query.name);
//   }
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
