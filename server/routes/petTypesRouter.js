const { Router } = require('express');
const { petTypesController } = require('../controllers');

//api/petTypes
const petTypesRouter = Router();

petTypesRouter.get('/', petTypesController.getPetTypes);

module.exports = petTypesRouter;
