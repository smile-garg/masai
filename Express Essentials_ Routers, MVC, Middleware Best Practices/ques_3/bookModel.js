const fs = require('fs');
const path = './db.json';

const readBooks = () => {
  const data = fs.readFileSync(path);
  return JSON.parse(data).books;
};

const writeBooks = (books) => {
  const data = JSON.stringify({ books }, null, 2);
  fs.writeFileSync(path, data);
};

module.exports = {
  readBooks,
  writeBooks,
};
