const { Kafka } = require('kafkajs')

const createProducer = require('./producer.js')

const kafka = new Kafka({
  clientId: 'wallstreet',
  brokers: ['localhost:32813', 'localhost:32814', 'localhost:32815'],
})

module.exports = {
  producer: createProducer(kafka)
}
