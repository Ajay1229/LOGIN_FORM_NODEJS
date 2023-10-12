const express = require('express')
const router = express.Router()
const path = require('path')

router.get('^/$|/index(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','view','index.html'))
})

router.get('/new(.html)?', (req, res, next) => {
    next()
}, (req, res) => {
    res.send('hi machi')
})

module.exports = router