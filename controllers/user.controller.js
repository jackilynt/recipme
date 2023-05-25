const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = (req, res) => {

  // Validate the request - Return error if ANY field is empty
  if (!req.body.username || !req.body.email || !req.body.password) {
    res.status(400).send({
      message: "User requires no empty fields."
    });
    return;
  };

  // Create User if Validated above
  const newUser = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  };

  // Save User in db
  User.create(newUser)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "An error has occured creating a new User."
      });
    });
};

// Retrieve ALL Users in db
exports.findAll = (req, res) => {
  User.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "An error has occured finding Users."
      });
    })
};

// Find a single User by Username
exports.findOne = async (req, res) => {

  if (!req.body.email || !req.body.password) {
    res.status(400).send({
      message: "User requires an Email and Password."
    });
    return;
  };

  const email = req.body.email;
  const password = req.body.password;

  const thisUser = await User.findOne({ where: { email: email} })
    .then(data => {
      if (data) {
        //res.send(data);
        //
        // Login? Set session
        res.status(202).send({
          message: `${email} logged in.`
        })
        //
      } else {
        res.status(404).send({
          message: `Cannot find User with email ${email}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User" + err
      });
    });
};

// Delete a User by id
exports.delete = (req, res) => {
  const id = req.params.id;

  User.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
};