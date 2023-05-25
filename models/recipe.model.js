module.exports = (sequelize, Sequelize) => {
    const Recipe = sequelize.define("recipe", {
        name: {
            type: Sequelize.STRING
        },
        ingredients: {
            type: Sequelize.STRING
        },
        instructions: {
            type: Sequelize.STRING
        }
    });

    return Recipe;
};