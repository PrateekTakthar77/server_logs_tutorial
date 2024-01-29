const logger = require('./logger'); // Adjust the path if your logger.js is in a different directory

// Example usage
logger.info('This is an information message2');
logger.warn('This is a warning message2');
logger.error('This is an error message2');

// You can log additional information, such as request details in an Express middleware
// app.use((req, res, next) => {
//     logger.info(`[${req.method}] ${req.url}`);
//     next();
// });
