const fs = require('fs');
const path = './db.json';

const readTickets = () => {
  const data = fs.readFileSync(path, 'utf8');
  return JSON.parse(data).tickets || [];
};

const writeTickets = (tickets) => {
  const data = { tickets };
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
};

module.exports = { readTickets, writeTickets };
