const app = require('express')
const routes = app.Router()
const path = require('path')
const functions = require('../../controllers/employecontroller')
routes.route('/')
.get(functions.getallemployes)
.post(functions.createnewemploye)

.put((req,res)=>{
    res.json({
        "firdtnsme":req.body.firstname,
        "lasttnsme":req.body.lastname
    })
})
.delete((req,res)=>{
    res.json({"id":req.body.id})
})

routes.route('/:id')
    .get((req,res)=>{
       res.json({"id":req.params.id})
    })
module.exports = routes