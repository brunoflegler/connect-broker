const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'wallstreet',
  brokers: ['localhost:32813', 'localhost:32814', 'localhost:32815'],
})

const topic = 'financial.payables-partition-3'
const consumer = kafka.consumer({ groupId: 'test-group' })

const run = async () => {
  await consumer.connect()
  await consumer.subscribe({ topic, fromBeginning: true })
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        message: message.value.toString(),
        topic,
        partition
      })
    },
  })
}

run().catch(e => console.error(`[example/consumer] ${e.message}`, e))
