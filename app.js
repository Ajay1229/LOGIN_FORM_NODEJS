const express = require('express')
const app = express()
const path = require('path')
const logger = require('./middleware/log')
const errorh = require('./middleware/error')
const cors = require('cors')
const PORT = process.env.PORT || 3500
app.use(logger.logger)

/* const whitelist = ['htpp://127.0.0.1:5500','http://localhost:3500/index','http://localhost:3500/sapost'];
const options = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        }
        else {
            callback(new Error('not allowed by cors'));
        }
    },
    optionSuccessStatus: 200
}
*/
//app.use(cors(options))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(path.join(__dirname, './public')))

app.use('/',require('./routes/root'))
app.use('/subdir',require('./routes/subdir'))
app.use('/employes',require('./routes/api/employe'))

app.post('/sapost',(req,res)=>{
    console.log(req.body)
    res.send('posted')
})


app.all('*',(req,res)=>{
    res.status(404);
    if(req.accepts('html')){
       res.sendFile(path.join(__dirname,'view','404.html'))
    }
    else if(req.accepts){
       res.json({"error":"404 page not found"})
    }
    else{
        res.type('text').send("404 page not found")
    }

})

app.use(errorh.errorhandler)

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});