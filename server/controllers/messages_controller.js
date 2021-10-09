const messages = [];
let id = 0;

module.exports = {
  createMessage(req, res) {
    const newMessage = {
      id: id,
      time: req.body.time,
      text: req.body.text,
    };

    messages.push(newMessage);
    id++;

    res.status(200).send(messages);
  },

  readMessages(req, res) {
    res.status(200).send(messages);
  },

  updateMessage(req, res) {
    let { id } = req.params;

    messages[id].text = req.body.text;

    res.status(200).send(messages);
  },

  deleteMessage(req, res) {
    messages.splice(req.id, 1);
    console.log(req.params);

    res.status(200).send(messages);
  },
};
