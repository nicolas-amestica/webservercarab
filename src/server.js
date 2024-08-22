const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.SERVER_PORT || 3000;
const app = express();

const router = require("./router/routes");

app.use(bodyParser.json());

app.use("/", router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 
