const TicketModel = require('../models/ticketModel');

const getAllTickets = (req, res) => {
  const tickets = TicketModel.readTickets();
  res.json(tickets);
};

const getTicketById = (req, res) => {
  const tickets = TicketModel.readTickets();
  const ticket = tickets.find(t => t.id === parseInt(req.params.id));
  if (!ticket) {
    return res.status(404).json({ message: "Ticket not found" });
  }
  res.json(ticket);
};

const createTicket = (req, res) => {
  const { title, description, priority, user } = req.body;

  if (!title || !description || !priority || !user) {
    return res.status(400).json({ error: "Data insufficient, please provide all required fields" });
  }

  const tickets = TicketModel.readTickets();
  const newTicket = {
    id: tickets.length + 1,
    title,
    description,
    priority,
    user,
    status: 'pending'
  };
  tickets.push(newTicket);
  TicketModel.writeTickets(tickets);
  res.status(201).json(newTicket);
};

const updateTicket = (req, res) => {
  const { title, description, priority } = req.body;
  const tickets = TicketModel.readTickets();
  const ticket = tickets.find(t => t.id === parseInt(req.params.id));

  if (!ticket) {
    return res.status(404).json({ message: "Ticket not found" });
  }

  ticket.title = title || ticket.title;
  ticket.description = description || ticket.description;
  ticket.priority = priority || ticket.priority;

  TicketModel.writeTickets(tickets);
  res.json(ticket);
};

const deleteTicket = (req, res) => {
  const tickets = TicketModel.readTickets();
  const index = tickets.findIndex(t => t.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ message: "Ticket not found" });
  }

  tickets.splice(index, 1);
  TicketModel.writeTickets(tickets);
  res.status(204).send();
};

const resolveTicket = (req, res) => {
  const tickets = TicketModel.readTickets();
  const ticket = tickets.find(t => t.id === parseInt(req.params.id));

  if (!ticket) {
    return res.status(404).json({ message: "Ticket not found" });
  }

  ticket.status = 'resolved';
  TicketModel.writeTickets(tickets);
  res.json(ticket);
};

module.exports = {
  getAllTickets,
  getTicketById,
  createTicket,
  updateTicket,
  deleteTicket,
  resolveTicket
};
