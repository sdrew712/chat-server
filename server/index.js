const { response } = require("express");
const express = require("express");
const ctrl = require("./controllers/messages_controller");

const app = express();

app.use(express.json());

app.get("/api/messages", ctrl.readMessages);
app.post("/api/messages", ctrl.createMessage);
app.put("/api/messages/:id", ctrl.updateMessage);
app.delete("/api/messages/:deleteId", ctrl.deleteMessage);

app.use(express.static(__dirname + "/../public/build"));

const port = 3001;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
