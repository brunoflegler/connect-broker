const payableService = require('./services/payable.js')

const run = async () => {
  const currentDate = new Date()
  await payableService.sendPayableBroker({ id: currentDate.getTime(), createdAt: currentDate })

  setTimeout(run, 5000);
}

run()