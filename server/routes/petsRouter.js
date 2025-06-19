const { Router } = require('express');
const { validate } = require('./../middleware');
const { petsController } = require('../controllers');

// /api/pets
const petsRouter = Router();

petsRouter
  .route('/')
  .post(validate.validatePetOnCreate, petsController.createPet)
  .get(petsController.getPets);

petsRouter
  .route('/:id')
  .get(petsController.getPetById)
  .patch(petsController.updatePetById)
  .delete(petsController.deletePetById);

module.exports = petsRouter;
