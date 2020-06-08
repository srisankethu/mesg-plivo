const MESG = new (require('@liteflow/service'))()

MESG.listenTask({
	sendSMS: require('./tasks/sendSMS'),
	makeCall: require('./tasks/makeCall')
})
