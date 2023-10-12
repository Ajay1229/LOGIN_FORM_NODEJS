 data ={}
 data.employes=require('../model/employes.json')

 const getallemployes = (req,res)=>{
    res.json(data.employes)
 }

 const createnewemploye = (req,res)=>{
    res.json({
        "firstName":req.body.firstname,
        "lastname":req.body.lastname
    })
 }

 module.exports={
    getallemployes,
    createnewemploye
 }
