
module.exports = ({src, dest, text, authId, authToken }, { success, failure }) => {
  if (!src && !dest && !text && !authId && !authToken) {
    failure({ message: "at least of the 'src' and 'dest' and 'text' and 'authId' and 'authToken' contents must be provided" })
    return
  }

  const plivo = require('plivo').Client(authId, authToken);
  plivo.messages
    .create({
      src,
      dest,
      text
    })
    .then((response) => success({ status: response }))
    .catch(error => failure({ message: error.toString() }))
    .done();
}
