const { format } = require('date-fns')
const { v4: uuid } = require('uuid')

const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')

const logevents = async (message,logname) => {
    const dateTime = `${format(new Date(), 'ddMMyyyy\tHH:mm:ss')}`
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`
    //console.log(logItem)
    //console.log(logname);
    try {
        if (!fs.existsSync(path.join(__dirname,'..','logs'))) {
            await fsPromises.mkdir(path.join(__dirname, '..', 'logs',logname))
        }
        await fsPromises.appendFile(path.join(__dirname, '..', 'logs',logname), logItem)
    } catch (err) {
        console.error(err)
    }
}
const logger = (req, res,next) => {
    logevents(`${req.method}\t${req.header.origin}\t${req.url}`,'reqlog.text')
    //console.log(`${req.method} ${req.path}`)
    next()
}
module.exports = { logger, logevents }