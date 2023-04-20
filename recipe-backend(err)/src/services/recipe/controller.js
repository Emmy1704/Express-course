let recipes = []

// get all recipes
function getAllRecipe(req, res) {
   res.send(recipes).end();
}

// get single recipe
function getSingleRecipe(req, res) {
   const recipe = recipes.find(r => r.id === req.params.id)
   res.send(recipe).end();
}

// add new recipe
function addRecipe(req, res) {
   recipes.push({
      ...req.body,
      id: (recipes.length + 1).toString
   })
   res.send("recipe added").end();
}

// update recipe
function updateRecipe(req, res) {
   recipes = recipes.map(r => {
      if (r.id === req.params.recipeId) {
         return {...r, ...req.body};
      }

      return r;
   })

   res.send("recipe updated succefully!").end();
}

// delete recipe
function deleteRecipe() {
   recipes = recipes.filter(r => r.id !== req.params.recipeId)
   res.send("recipe deleted").end();
}

module.exports = {
   getAllRecipe,
   getSingleRecipe,
   addRecipe,
   updateRecipe,
   deleteRecipe
}
