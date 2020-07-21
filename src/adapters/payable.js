const payableBrokerAdapter = (broker) => {
  const send = (message) => {
    const topic = 'financial.payables'
    return broker.send(topic, message)
  }

  const read = () => {
    const topic = 'financial.payables'
    const groupId = 'financial'
    const printMessage = ({ message }) => console.log(message.value.toString())

    return broker.read(topic, groupId, printMessage)
  }

  return {
    send,
    read,
  }
}

module.exports = payableBrokerAdapter
