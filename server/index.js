require("dotenv").config();
const express = require("express"),
  controller = require("./controller"),
  massive = require("massive"),
  { SERVER_PORT, CONNECTION_STRING } = process.env;

app = express();

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("database is connected");
  })
  .catch(err => console.log(err));

// ENDPOINTS //
app.get("/api/houses", controller.getHouses);
app.post("/api/houses", controller.addHouse);
app.delete("/api/houses/:id", controller.deleteHouse);

app.listen(SERVER_PORT, () => {
  console.log(`welcome to server port ${SERVER_PORT}`);
});
