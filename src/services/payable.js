const { brokerAdapter } = require('../adapters')

const sendPayableBroker = (message) => {
  const topic = 'financial.payables'
  return brokerAdapter.send(topic, message, { acks: 1})
}

const readPayableBroker = () => {
  const topic = 'financial.payables'
  const groupId = 'financial'
  return brokerAdapter.read(topic, groupId, ({ message }) => {
    console.log({
      value: message.value.toString(),
    })
  })
}

module.exports = {
  sendPayableBroker,
  readPayableBroker
}