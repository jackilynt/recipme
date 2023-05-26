// const router = require("express").Router();
// const { Recipe } = require("../../models");

// // Create a recipe
// router.post("/", async (req, res) => {
//   try {
//     const dbRecipeData = await Recipe.create({
//       title: req.body.title,
//       ingredients: req.body.ingredients,
//       instructions: req.body.instructions,
//       author_id: req.body.authorId,
//     });
//     return res.status(200).json(dbRecipeData);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json(err);
//   }
// });


// // Update a recipe
// router.put("/:id", async (req, res) => {
//   try {
//     const updateResult = await Recipe.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     });
//     return res.status(200).json(updateResult);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json(err);
//   }
// });

// // Delete a recipe
// router.delete("/:id", async (req, res) => {
//   try {
//     const deleteRecipeData = await Recipe.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });
//     return res.status(200).json(deleteRecipeData);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json(err);
//   }
// });

// module.exports = router;


const router = require("express").Router();
const { Post } = require("../../models");

// //create post
// router.post("/", async (req, res) => {
//     try {
//         const dbPostData = await Post.create({
//             title: req.body.title,
//             content: req.body.content,
//             author_id: req.body.author_id,
//         });
//         return res.status(200).json(dbPostData);
//     } catch (err) {
//         console.log(err);
//         return res.status(500).json(err);
//     }
// });

// Create a recipe post
router.post("/", async (req, res) => {
  try {
    const dbRecipeData = await Recipe.create({
      title: req.body.title,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
      author_id: req.body.authorId,
    });
    return res.status(200).json(dbRecipeData);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

//update post
router.put("/:id", async (req, res) => {
    try {
        const updateResult = await Post.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).json(updateResult);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

//delete post
router.delete("/:id", async (req, res) => {
    try {
        const deletePostData = await Post.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).json(deletePostData);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

module.exports = router;


