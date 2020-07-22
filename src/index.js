const { payableProducer } = require('./lib')

const run = async () => {
  payableProducer.sendPayables({ message: `hello world: ${ new Date()} `})

  setTimeout(run, 50)
}

run()
