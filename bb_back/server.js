const express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

var corsOptions = {
  origin: "http://localhost:8000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
// In dev, we're dropping existing tables and re-syncing database.
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.")
});

app.get('/', (req, res) => {
  res.json({ message: "Welcome to the backend!" })
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})