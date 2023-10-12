const {logevents} = require('./log')
//console.log(logevents)
const errorhandler = (err,req,res,next) => {
    logevents(`${err.name}: ${err.message}`,`errorlog.text`)
    console.error(err.stack)
    res.status(500).send(err.message)
    next()
}
module.exports = {errorhandler};