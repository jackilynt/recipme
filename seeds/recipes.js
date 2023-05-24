const recipe = require("./models/recipes");

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('TagRecipeIngredients', [
      {
       
        recipe_id: 1,
        food_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
     
    ], {})


  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Ingredients', {
      [Op.or]:
        [
          { recipe_id: 1 },
          { recipe_id: 2 },
          { recipe_id: 3 },
          { recipe_id: 4 },
          { recipe_id: 5 }
        ]
    });