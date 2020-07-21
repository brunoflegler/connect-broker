const { payableBrokerAdapter } = require('./adapters')

const run = async () => {
  const currentDate = new Date()
  await payableBrokerAdapter.send({ id: currentDate.getTime(), createdAt: currentDate })

  setTimeout(run, 5000);
}

run()