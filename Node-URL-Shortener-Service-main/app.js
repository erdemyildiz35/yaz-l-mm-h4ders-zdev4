const express = require("express");
const routerAll = require("./routes/routerAll");
const { connectDb } = require("./config/db.config");

const app = express();

app.use(express.json());

app.use("/", routerAll);

const PORT = 5000;
// Listen for incoming requests
app.listen(PORT, () => console.log(`server started, listening PORT ${PORT}`));

connectDb();
