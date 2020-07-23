const createPayableProducer = (producer) => {
  const send = async(message) => {
   try {
    const mustKeyString = `${message.id}`
    const dst = 'financial.payables-partition-3'
    return producer.send(dst, message, mustKeyString)
   } catch(err){
     console.log(err)
     return Promise.resolve()
   }
  }

  return {
    send
  }
}

module.exports = createPayableProducer
