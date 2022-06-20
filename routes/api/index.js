//Where we make all our calls for recipe searches and such - izaak
// Grabbing our models
const router = require("express").Router();
const controller = require("../../controllers/controller.js");
const passport = require("../../config/passport");
const isAuthenticated = require("../../config/middleware/isAuthenticated");

// // login section
router.post("/signup", controller.signup);

router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  function (req, res) {
    console.log(`req body -${req.user}`);
    res.json({
      message: "user authenticated",
      user: req.user,
    });
  }
);
// logout
router.post("/logout", controller.logout);

// save recipe
router.post("/saveRecipe", controller.saveRecipe);
// get favorites
router.get("/getFavorites", controller.getFavorites);

router.get("/user-status", controller.getFavorites);

router.delete("/removeFavorite", controller.removeFavorite);

//checking if signed in
router.get("/check-auth", function (req, res) {
  return res.sendStatus(req.isUnauthenticated() ? 200 : 401);
});

// Route for logging user out
router.get("/logout", controller.logout);

module.exports = router;
