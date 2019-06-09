const express = require("express"),
  app = express(),
  port = 4000,
  bodyParser = require("body-parser");

const db = require('./config/database');

//Test DB connection
db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// const todoRoutes = require("./routes/todos");

// app.set('view engine', 'html');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname + "/public"));
// app.use(express.static(__dirname + "/views"));

app.get("/", (req, res) => {
  res.send('Welcome to Homepage');
});

app.use("/api/areacode/storename/offers", require('./routes/coupons'));

app.listen(port, () => {
  console.log("App is running on port ", port);
});
