app.get('/webhook', function(req, res) {
  if (req.query['hub.mode'] === 'subscribe' &&
      req.query['hub.verify_token'] === EAADdPiZCIr84BAA0OCTpZBKLZC5QpSqWCMI1P2mNMw6ZCN9KzD8gs8rCW7XX3mKfz9T8C5tu7caY0bDXCZBiE7YPUVPkcZCg0xkoAqn4JZBiWMUzdjbwprtoZCiZA2vUbfRwMevnTnu8YaOUWrOhBAC8lgdqqtQ0TzGHcCerv99R8gNGxrtoRq4ZCu) {
    console.log("Validating webhook");
    res.status(200).send(req.query['hub.challenge']);
  } else {
    console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);
  }
});
