var express = require("express");
let Books = require("./BooksSchema");
let mongodbConnected = require("./MongoDBConnect");
const cors = require("cors");

var app = express();
var bodyparser = require("body-parser");

// Middleware setup
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.get("/", function (req, res) {
  res.send("MongoDB Express React and Mongoose App");
});

app.get("/allbooks", async (req, res) => {
  const books = await Books.find();
  return res.json(books);
});

app.get("/getbook/:id", function (req, res) {
  let id = req.params.id;
  Books.findById(id, function (err, book) {
    res.json(book);
  });
});

app.post("/addbooks", function (req, res) {
  let newbook = new Books(req.body);
  newbook
    .save()
    .then(() => {
      res.status(200).json({ books: "Book added successfully" });
    })
    .catch(() => {
      res.status(400).send("Adding new book failed");
    });
});

app.post("/updatebook/:id", function (req, res) {
  let id = req.params.id;
  Books.findByIdAndUpdate(id, req.body, function (err, docs) {
    if (err) {
      console.log(err);
      res.status(500).send("Error updating book");
    } else {
      res.status(200).json({ books: "Book updated successfully" });
    }
  });
});

app.post("/deleteBook/:id", function (req, res) {
  let id = req.params.id;
  Books.findByIdAndDelete(id, function (err, docs) {
    if (err) {
      console.log(err);
      res.status(500).send("Error deleting book");
    } else {
      res.status(200).send("Book Deleted");
    }
  });
});

app.listen(5500, function () {
  console.log("Server is running on port 5500");
});
