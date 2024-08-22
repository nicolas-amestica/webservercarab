const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3002;
const app = express();

const router = require("./src/router/routes");

app.use(bodyParser.json());

app.use("/", router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));