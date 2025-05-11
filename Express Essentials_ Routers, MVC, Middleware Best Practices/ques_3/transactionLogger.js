const fs = require('fs');
const transactionLogger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${req.body.readerName || 'Unknown'} ${req.originalUrl.includes('borrow') ? 'borrowed' : 'returned'} "${req.body.title || 'Unknown Book'}"\n`;
  
  fs.appendFileSync('./transactions.log', logMessage);
  next();
};

module.exports = transactionLogger;
