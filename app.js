const express = require("express");

// Create app
const app = express();

// The body-parser extracts the JSON object from the POST request
// The bosy parser modulue is middleware that prses user input and makes it available
// through the req.body property
const bodyParser = require("body-parser"); //  middleware

// Send a HTTP response when receiving HTTPS GET
// app.use(express.static("public"));
// app.get("/", (req, res) => {
//   res.sendFile("index.html", { root: __dirname });
// });

// Our app is going to use the body-parser
// .urlencoded indicates that we are parsing data from the body.
// When working with forms, we use the urlencoded parser because by default,
// forms send data in URL encoded format
// extended is an option that allows you to choose which library you want to
// use to parse the URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));

// Handling static HTML and EJS templates
app.use(express.static("public"));
app.set("view engine", "ejs");

// Route for index
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// Route for contacts
app.get("/contacts", (req, res) => {
  res.render("contacts");
});

// Route for login
app.get("/login", (req, res) => {
  res.render("login");
});

// Make the app listen on port
const port = process.argv[2] || process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log("Cart app listening at http://localhost:${port}");
});

const router = require("./routes/apis");

app.use(router);
