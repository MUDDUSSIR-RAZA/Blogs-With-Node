const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const cors = require("cors");

const auth = require("./routes/auth");
const product = require("./routes/product");
const blog = require("./routes/blog");

const app = express();
const { mongoose } = require("./model/connection");
const { verify } = require("./middleware/auth");
mongoose();

const public = path.join(process.cwd(), "public");

app.use(bodyparser.json({ limit: '50mb' }));
app.use(bodyparser.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.static(public));
app.use(cors({
  origin: 'http://localhost:3000', // Replace with the actual origin of your frontend
  credentials: true, // Allow credentials (cookies)
}));

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/api/v1/users", (req, res) => {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
  ];
  return res.status(200).json({ users });
});

app.use("/auth", auth);
app.use("/blog", blog);
app.use("/product", verify, product);

app.listen(5000);
