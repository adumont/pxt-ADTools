// tests go here; this will not be compiled when this package is used as an extension.
let sensors = [0.2, 251, 0.01, 895]

// say we want to send sensors via Radio:
// we can use ADTools.numArrayToString() to pack them into a string

let send = ADTools.numArrayToString(sensors, Delimiters.Pipe)

// we use ADTools.logStr() to see a string on the console.log
ADTools.logStr(send)

// on the other end, we can unpack a string into an array of numbers
let received = ADTools.stringToNumArray(send, Delimiters.Pipe)

ADTools.logNumber(received.length)
ADTools.logNumber(received[0])
ADTools.logNumber(received[1])
ADTools.logNumber(received[2])
ADTools.logNumber(received[3])

ADTools.logStr("n0 = " + convertToText(received[0]))
ADTools.logStr("n1 = " + convertToText(received[1]))
ADTools.logStr("n2 = " + convertToText(received[2]))
ADTools.logStr("n3 = " + convertToText(received[3]))