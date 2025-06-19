const { Router } = require('express');
const { petsController } = require('../controllers');

// /api/pets
const petsRouter = Router();

petsRouter
  .route('/')
  .post(petsController.createPet)
  .get(petsController.getPets);

petsRouter
  .route('/:id')
  .get(petsController.getPetById)
  .patch(petsController.updatePetById)
  .delete(petsController.deletePetById);

module.exports = petsRouter;
