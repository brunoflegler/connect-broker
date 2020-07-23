const { Kafka } = require('kafkajs')

const createKafkaProducer =   () =>  {
  const kafka = new Kafka({
    clientId: 'wallstreet',
    brokers: ['localhost:32813', 'localhost:32814', 'localhost:32815'],
  })

  const producer = kafka.producer()

  const connect = async () => {
    await producer.connect()
  }

  const disconnect = async () => {
    await producer.connect()
  }

  const send = async (topic, message, key = null) => {
    const stringifiedMessage = JSON.stringify(message)
    const bufferedMessage = Buffer.from(stringifiedMessage)

    return producer.send({ topic, messages: [{ value: bufferedMessage ,  key} ]})
  }

  return {
    connect,
    disconnect,
    send,
  }
}

module.exports = createKafkaProducer