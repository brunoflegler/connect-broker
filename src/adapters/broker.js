function brokerAdapter (broker) {
  async function send (topic, message, options) {
    return broker.send(topic, message, options)
  }

  async function read (topic, groupId, callback, options = {}) {
    return broker.read(topic, groupId, callback, options)
  }

  return {
    send,
    read,
  }
}

module.exports = brokerAdapter
