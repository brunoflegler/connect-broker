const brokerAdapter = require('./broker')
const kafkaDriver = require('../drivers/kafka')

module.exports = {
  brokerAdapter: brokerAdapter(kafkaDriver),
}
