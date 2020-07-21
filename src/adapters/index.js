const payableBrokerAdapter = require('./payable')
const kafkaDriver = require('../drivers/kafka')

module.exports = {
  payableBrokerAdapter: payableBrokerAdapter(kafkaDriver),
}
