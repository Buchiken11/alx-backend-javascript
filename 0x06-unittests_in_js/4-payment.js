const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const cost_oftotal = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${cost_oftotal}`);
};

module.exports = sendPaymentRequestToApi;
