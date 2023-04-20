const {Router} = require("express");
const controller = require("./controller");

const router = Router();

// get all recipes
router.get('/', controller.getAllRecipe);

// get single recipe
router.get('/:recipeId', controller.getSingleRecipe);

// add new recipe
router.post('/', controller.addRecipe);

// update recipe
router.patch('/:recipeId', controller.updateRecipe);

// delete recipe
router.delete('/:recipeId', controller.deleteRecipe);

module.exports = {
   recipesRouter: router
}