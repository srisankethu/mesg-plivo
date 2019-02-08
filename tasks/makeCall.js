
module.exports = ({ to, from, answer_url, answer_method, authId, authToken }, { success, failure }) => {
  if (!to && !from && !answer_url && !answer_method && !authId && !authToken) {
    failure({ message: "at least of the 'to' and 'from' and 'answer_url' and 'answer_method' and 'authId' and 'authToken' contents must be provided" })
    return
  }

  const plivo = require('plivo').RestAPI(authId, authToken);
  plivo.make_call({
      'to': to,
      'from': from,
      'answer_url': answer_url,
      'answer_method': answer_method
    })
    .then((response) => success({ status: response }))
    .catch(error => failure({ message: error.toString() }))
    .done();
}
