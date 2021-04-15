const express = require ('express')

const Animal = require('../models/animals.js')

const animal = new Animal()


const router = express.Router();


router.get('/animal', getAnimal)
router.get('/animal/:id', getOneAnimal)
router.post('/animal', createAnimal)
router.put('/animal/:id', updateAnimal)
router.delete('/animal/:id', deleteAnimal)

// This is a Read route from C(R)UD
function getAnimal(req,res) {
  let allAnimal = animal.get(); // If nothing is declared here it will bring back everything
  res.status(200).json(allAnimal)
}
// This is a Read route from C(R)UD
function getOneAnimal(req,res) {
  const id = parseInt(req.params.id);
  let theAnimal = animal.get(id) // Will return the id of the animal sent as a param
  res.status(200).json(theAnimal)
}
// This is a Create route from (C)RUD
function createAnimal(req,res) {
  let obj = req.body
  let newAnimal = animal.create(obj);
  res.status(200).json(newAnimal)
}
// This is an Update route from CR(U)D
function updateAnimal(req,res) {
  const id =parseInt(req.params.id);
  const obj = req.body;
  let updateAnimal = animal.update(id, obj);
  res.status(200).json(updateAnimal)
}
// This is a Delete route from CRU(D)
function deleteAnimal(req,res) {
  const id =parseInt(req.params.id);
  let deleteAnimal = animal.delete(id)
  res.status(200).json(deleteAnimal)
}


module.exports = router;

