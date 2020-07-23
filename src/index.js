const payableProducer = require('./lib')

const run = async () => {
  const { payableProducerConnected } = await payableProducer.connect()

  const message1 = {
    id: 1,
    name:new Date()
  }

  const message2 = {
    id: 2,
    name:new Date()
  }

  const message3 = {
    id: 3,
    name:new Date()
  }

  const message4 = {
    id: 4,
    name:new Date()
  }

  await payableProducerConnected.send(message1)
  await payableProducerConnected.send(message2)
  await payableProducerConnected.send(message3)
  await payableProducerConnected.send(message4)

  setTimeout(run, 2000)
}

run()
