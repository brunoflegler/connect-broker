const createProducer = (producer) =>  {
  const send = async (topic, message) => {
    const stringifiedMessage = JSON.stringify(message)
    const bufferedMessage = Buffer.from(stringifiedMessage)

    return producer.send({ topic, messages: [{ value: bufferedMessage }] })
  }

  return {
    send,
  }
}

module.exports = createProducer