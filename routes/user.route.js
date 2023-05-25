module.exports = app => {
    const users = require("../controllers/user.controller.js");

    var router = require("express").Router();

    // Create a new User
    router.post("/", users.create);

    // Retrieve all Users
    router.get("/", users.findAll);

    // Find a User with id
    router.post("/login/", users.findOne);

    // Delete a User with id
    router.delete("/:id", users.delete);

    app.use('/api/users', router);
};