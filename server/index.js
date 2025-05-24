const express = require("express");
const cors = require("cors");
const uploadRoutes = require("./routes/upload");

const app = express();
app.use(cors());
app.use("/upload", uploadRoutes);

app.listen(3001, () => console.log("Servidor backend na porta 3001"));
