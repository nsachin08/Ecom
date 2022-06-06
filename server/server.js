const express = require("express");
const Mongoose = require("mongoose");
const cors = require("cors");
const { Product } = require("../db/models");
const { application } = require("express");

const app = express();
app.use(express.json());
app.use(cors());

async function findAllproducts() {
  const products = await Product.find(function (err) {
    if (err) return console.error(err);
  })
    .clone()
    .limit(100);

  return products;
}

app.get("/categories/:q", async (req, res) => {
  var q = req.params.q;
  console.log(q);
  try {
    const query = { Tags: q };
    console.log(query);
    const product = await Product.find(query);
    res.json(product);
  } catch (error) {
    res.status(400);
  }
});

app.get("/search/:q", async (req, res) => {
  var q = req.params.q;
  console.log(q);
  try {
    const query = { $text: { $search: q } };
    console.log(query);
    const product = await Product.find(query);
    res.json(product);
  } catch (error) {
    res.status(400);
  }
});

app.get("/products", async (req, res) => {
  const posts = await findAllproducts();

  res.status(200).send(posts);
});

app.get("/", (req, res) => {
  res.send("Hello from backend");
});

const CONNECTION_URL =
  "mongodb+srv://sachin123:sachin123@cluster0.swrp8.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 8081;

Mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() =>
    app.listen(PORT, () => console.log(`server Running on port:${PORT}`))
  )
  .catch((error) => console.log(error.message));
