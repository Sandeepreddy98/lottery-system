const { tickets } = require("../models/ticket");

const getStatus = (req, res) => {
    const ticket = tickets.find((t) => t.id === parseInt(req.params.id));
    if (!ticket) return res.status(404).send("Ticket not found.");
    if (ticket.checked) return res.status(400).send("Ticket status already checked.");
    res.json(ticket.getStatus());
};

module.exports = getStatus
