const express = require('express');
const router = express.Router();
var RegisterShemavalidator = require('jsonschema').Validator;
var RegisterShema = new RegisterShemavalidator();
const connectToDatabase = require('../db');
const catalogo = require('../json/catalogo.json');
const DIRECTORIO = require ('../models/directorio');
const REGIONALES = require ('../models/regionales');
const createData = require('../../Bigquery_example');
//const schema = require('../Schema/register.json');


/*router.get('/createdata' , async (req, res) => {
  console.log(movies.DIRECTORIO.length);
  await connectToDatabase();
  for ( var i = 0 ; i< movies.DIRECTORIO.length; i++  ) {
    try{
      const directorio = new DIRECTORIO(movies.DIRECTORIO[i]);
      await directorio.save();
      
    }
    catch (err){
      console.log(err);
      res.json({response: 1});
    }
  } 
  
  res.send("datacreada");
  
});*/


router.get('/catalogo' , async (req, res) => {
  
    res.json(catalogo);  

    
    
  
});

router.get('/createdata' , async (req, res) => {
  
  await createData.insertData();
  res.send("creado con exito");

  
  

});





router.get('/' , async (req,res) => {
  res.send("holas, como estas, esto es un test 2");
 
 });
//


module.exports = router;
