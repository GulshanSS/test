const express = require("express");
const app = express();
const cors = require("cors");

const EmailRoutes = require("./routes/email.routes");

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/api/email", EmailRoutes);

app.listen(process.env.PORT || 5000, (req, res) => {
  console.log("server started");
});
