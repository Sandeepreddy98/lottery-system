const { Ticket, tickets } = require("../models/ticket");
const generateLines = require("../utils/helper");

let idCounter = 1;

const createTicket = (req, res) => {
    const { n } = req.body;
    const newTicket = new Ticket(idCounter++, generateLines(n));
    tickets.push(newTicket);
    res.status(201).json(newTicket);
};

const getTickets = (req, res) => {
    res.json(tickets);
};

const getTicketById = (req, res) => {
    const ticket = tickets.find((t) => t.id === parseInt(req.params.id));
    if (!ticket) return res.status(404).send("Ticket not found.");
    res.json(ticket);
};

const amendTicket = (req, res) => {
    const { n } = req.body;
    const ticket = tickets.find((t) => t.id === parseInt(req.params.id));
    if (!ticket) return res.status(404).send("Ticket not found.");
    try {
        ticket.addLines(generateLines(n));
        res.json(ticket);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = {createTicket,getTickets,getTicketById,amendTicket}
