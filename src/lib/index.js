const createKafkaProducer = require('../brokers/kafka/producer')
const createPayableProducer = require('./payable')

async function connect () {
  const kafkaProducer = createKafkaProducer()
  await kafkaProducer.connect()

  const payableProducerConnected = createPayableProducer(kafkaProducer)

  return {
    payableProducerConnected,
  }
}

module.exports = {
  connect,
}
