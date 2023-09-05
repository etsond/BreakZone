const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/profile", ensureAuth, postsController.getProfile);
router.get("/feed", ensureAuth, postsController.getFeed);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);

// Signup route using authController.postSignup
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

router.get("/my-recipes", ensureAuth, postsController.getRecipes);
router.get("/bookmarks", ensureAuth, postsController.getBookmarks);

module.exports = router;
