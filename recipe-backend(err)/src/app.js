const express = require("express");

const recipesRouter = require("./services/recipe/router")

const app = express();

app.use(express.json())
app.use('/recipes', recipesRouter)

app.listen(4321, function(){
   console.log(("express server running..."));
})