const payableProducer = (producer) => {
  const sendPayables = (message) => {
   try {
    const dst = 'financial.payables-partition-3'
    return producer.send(dst, message)
   } catch(err){
     console.log(err)
     return Promise.resolve()
   }
  }

  return {
    sendPayables
  }
}

module.exports = payableProducer
