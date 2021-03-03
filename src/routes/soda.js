const express = require ('express')

const Soda = require('../models/soda.js')
const soda = new Soda()


const router = express.Router();


router.get('/soda', getSoda)
router.get('/soda/:id', getOneSoda)
router.post('/soda', createSoda)
router.put('/soda/:id', updateSoda)
router.delete('/soda/:id', deleteSoda)

// This is a Read route from C(R)UD
function getSoda(req,res) {
  let allSoda = soda.get(); // If nothing is declared here it will bring back everything
  res.status(200).json(allSoda)
}
// This is a Read route from C(R)UD
function getOneSoda(req,res) {
  const id = parseInt(req.params.id);
  let theSoda = soda.get(id) // Will return the id of the Soda sent as a param
  res.status(200).json(theSoda)
}
// This is a Create route from (C)RUD
function createSoda(req,res) {
  let obj = req.body
  let newSoda = soda.create(obj);
  res.status(200).json(newSoda)
}
// This is an Update route from CR(U)D
function updateSoda(req,res) {
  const id =parseInt(req.params.id);
  const obj = req.body;
  let updateSoda = soda.update(id, obj);
  res.status(200).json(updateSoda)
}
// This is a Delete route from CRU(D)
function deleteSoda(req,res) {
  const id =parseInt(req.params.id);
  let deleteSoda = soda.delete(id)
  res.status(200).json(deleteSoda)
}

module.exports = router;