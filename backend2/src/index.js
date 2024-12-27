const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const contactRoute = require("./route/contactRoute");
const connectdb  = require("./db/connectdb");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api", contactRoute)


console.log(typeof connectdb); // This should log "function"
connectdb();

  
  const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
