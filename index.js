const MESG = require('mesg-js').service()

MESG.listenTask({
	sendSMS: require('./tasks/sendSMS'),
	makeCall: require('./tasks/makeCall')
})
