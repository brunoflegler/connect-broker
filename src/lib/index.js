const createKafka = require('../brokers/kafka')
const payableProducer = require('./payables')

module.exports = {
  payableProducer: payableProducer(createKafka())
}