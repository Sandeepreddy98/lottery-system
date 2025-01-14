const express = require('express')
const { createTicket, getTickets, getTicketById, amendTicket } = require("../controllers/ticketController");

const ticketRouter = express.Router();

ticketRouter.post("/", createTicket);
ticketRouter.get("/", getTickets);
ticketRouter.get("/:id", getTicketById);
ticketRouter.put("/:id", amendTicket);

module.exports = ticketRouter