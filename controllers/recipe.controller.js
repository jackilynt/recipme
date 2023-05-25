const db = require("../models");
const Recipe = db.recipes;
const Op = db.Sequelize.Op;

// Create and Save a new Recipe
exports.create = (req, res) => {

    // Validate the request - Return error if ANY field is empty
    if (!req.body.name || !req.body.ingredients || !req.body.instructions) {
        res.status(400).send({
            message: "Recipe requires no empty fields."
        });
        return;
    };

    // Create Recipe if Validated above
    const newRecipe = {
        name: req.body.name,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions
    };

    // Save Recipe in db
    Recipe.create(newRecipe)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error has occured creating a new Recipe."
            });
        });
};

// Retrieve ALL Recipies in db
exports.findAll = (req, res) => {
    Recipe.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error has occured finding Recipes."
            });
        })
};

// Find a single Recipe by id
//exports.findOne = (req, res) => {
// Empty for now until search is added
//};

// Update a Recipe by id
//exports.update = (res, req) => {
// Empty for now until login is finished
//};

// Delete a Recipe by id
exports.delete = (req, res) => {
    const id = req.params.id;

    Recipe.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Recipe was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Recipe with id=${id}. Recipe was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Recipe with id=" + id
            });
        });
};