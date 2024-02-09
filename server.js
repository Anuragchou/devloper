const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
 //const db = require('./models')
 //const userroutes = require ('./routes/userroutes.js')


const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser())

const db = require("./app/models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });
//app.use('/api/users', userroutes)
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to servify application." });
});

require("./app/routes/turorial.routes")(app);
require("./app/routes/business.details.routes")(app);
require("./app/routes/business.worker.routes")(app);
require("./app/routes/customer.routes")(app);
require("./app/routes/service.details.routes")(app);
//require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
