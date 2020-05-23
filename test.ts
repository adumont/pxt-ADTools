// tests go here; this will not be compiled when this package is used as an extension.

// say we have some sensors readings
let sensors = [0.2, 251, 0.01, 895]

// say we want to send sensors via Radio:
// we can use ADTools.numArrayToString() to pack them into a string
let send = ADTools.packNums(sensors, Delimiters.Pipe)

// we use ADTools.logStr() to see a string on the console.log
ADTools.logString(send)

// on the receiving end, say we received a string via Radio
// we can unpack a string into an array of numbers
let received = ADTools.unpackNums(send, Delimiters.Pipe)

ADTools.logNumber(received.length)
ADTools.logNumber(received[0])
ADTools.logNumber(received[1])
ADTools.logNumber(received[2])
ADTools.logNumber(received[3])

ADTools.logString("n0 = " + convertToText(received[0]))
ADTools.logString("n1 = " + convertToText(received[1]))
ADTools.logString("n2 = " + convertToText(received[2]))
ADTools.logString("n3 = " + convertToText(received[3]))