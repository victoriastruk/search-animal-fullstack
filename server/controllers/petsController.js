const { Pet } = require('./../models');

module.exports.createPet = async (req, res, next) => {
  const { body } = req;
  try {
    const createdPet = await Pet.create(body);

    res.status(201).send({ data: createdPet });
  } catch (err) {
    next(err);
  }
};

module.exports.getPets = async (req, res, next) => {
  try {
    const foundPets = await Pet.findAll({
      raw: true,
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    res.status(200).send({ data: foundPets });
  } catch (err) {
    next(err);
  }
};

module.exports.getPetById = async (req, res, next) => {};

module.exports.updatePetById = async (req, res, next) => {};

module.exports.deletePetById = async (req, res, next) => {};
