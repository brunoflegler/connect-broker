const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'wallstreet',
  brokers: ['localhost:9092'],
})
const kafkaProducer = kafka.producer()

const send = async (topic, message) => {
  await kafkaProducer.connect()

  const stringifiedMessage = JSON.stringify(message)
  const bufferedMessage = Buffer.from(stringifiedMessage)

  await kafkaProducer.send({ topic, messages: [{ value: bufferedMessage }] })

  return kafkaProducer.disconnect()
}

const read = async (topic, groupId, eachMessage, options) => {
  const consumer = kafka.consumer({ groupId })
  await consumer.connect()
  await consumer.subscribe({ topic, ...options })

  await consumer.run({
    eachMessage,
  })
}

module.exports = {
  send,
  read,
}
