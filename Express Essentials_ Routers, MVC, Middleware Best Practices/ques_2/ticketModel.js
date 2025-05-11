const fs = require('fs');
const path = './db.json';

const readTickets = () => {
  const data = fs.readFileSync(path);
  return JSON.parse(data).tickets;
};

const writeTickets = (tickets) => {
  const data = JSON.stringify({ tickets }, null, 2);
  fs.writeFileSync(path, data);
};

module.exports = {
  readTickets,
  writeTickets,
};
