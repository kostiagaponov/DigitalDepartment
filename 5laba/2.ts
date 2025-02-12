import Transport from './1'

Transport.startTimer()

const logH = Transport.createLogger('Hello, this is a closure demonstration!')
const logB = Transport.createLogger('Goodbye, closure world!')

logH()
logB()
