mongoose = require("mongoose");
//app = express();
const MONGO_URI =
  "mongodb+srv://cybereager:Rajdeep2003@cluster0.l8fqe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", function (err) {
  console.log("Error occured during connection" + err);
});
db.once("connected", function () {
  console.log(`Connected to ${MONGO_URI}`);
});
// creating the scheme
const PersonScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  Gender: String,
  Salary: Number,
});
// creating model named as modelname with collection named as personCollection;
const person_doc = mongoose.model(
  "modelname",
  PersonScheme,
  "personCollection"
);
// creating a single document
const doc1 = new person_doc({
  name: "Rajdeep",
  age: 362,
  Gender: "Male",
  Salary: 3456,
});
const doc2 = new person_doc({
  name: "Abhijeet",
  age: 362,
  Gender: "Male",
  Salary: 3456,
});
// adding one document in the collection
doc1
  .save()
  .then((doc1) => {
    console.log("New Article Has been Added Into Your DataBase.", doc1);
  })
  .catch((err) => {
    console.error(err);
  });
