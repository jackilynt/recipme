const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");
const Comment = require("../models/Comment");

//on post page load render post data
router.get("/:id", async (req, res) => {
    try {
        const postData = await Post.findOne({
            where: {
                id: req.params.id,
            },
            include: [
                {
                    model: Comment,
                    //join of joined data
                    include: [
                        {
                            model: User,
                            attributes: ["id", "username"],
                        },
                    ],
                },
                {
                    model: User,
                    attributes: ["id", "username"],
                },
            ],
        });
        const post = postData.get({ plain: true });
        console.log(post);
        if (post) {
            res.render("post", {
                loggedIn: req.session.loggedIn,
                loggedInUserData: req.session.loggedInUserData,
                postData: post,
            });
        } else {
            res.redirect("/");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;


// const router = require("express").Router();
// const Recipe = require("../models/Recipe");
// const User = require("../models/User");
// const Comment = require("../models/Comment");

// // On recipe page load, render recipe data
// router.get("/:id", async (req, res) => {
//   try {
//     const recipeData = await Recipe.findOne({
//       where: {
//         id: req.params.id,
//       },
//       include: [
//         {
//           model: Comment,
//           include: [
//             {
//               model: User,
//               attributes: ["id", "username"],
//             },
//           ],
//         },
//         {
//           model: Author,
//           attributes: ["id", "name"],
//         },
//       ],
//     });
//     const recipe = recipeData.get({ plain: true });
//     console.log(recipe);
//     if (recipe) {
//       res.render("recipe", {
//         loggedIn: req.session.loggedIn,
//         loggedInUserData: req.session.loggedInUserData,
//         recipeData: recipe,
//       });
//     } else {
//       res.redirect("/");
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;
