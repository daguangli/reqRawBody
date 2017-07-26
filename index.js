const debug = require('debug')('turbo:requestRawBody')
module.exports = function (req, res, next) {
  let body = [];
  req.on('data', chunk => {
    body.push(chunk);
  }).on('end', () => {
    req.body = Buffer.concat(body).toString();
    next()
  })
}
