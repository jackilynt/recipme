// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection");

// class Post extends Model {
// }

// //post model, table, object
// Post.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true,
//         },
//         title: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         content: {
//             type: DataTypes.STRING(10000),
//             allowNull: false,
//         },
//         author_id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             references: {
//                 model: "user",
//                 key: "id",
//             },
//         },
//     },
//     {
//         sequelize,
//         freezeTableName: true,
//         underscored: true,
//         modelName: "post",
//     }
// );

// module.exports = Post;

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model { }

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    instructions: {
      type: DataTypes.STRING(5000),
      allowNull: false,
    },
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1, // Replace 0 with the default author ID you want to use
      references: {
        model: "user",
        key: "id",
      },
    },

  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
