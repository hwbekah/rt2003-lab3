const express = require("express");
const productController = require("../controllers/productController");
const clientController = require("../controllers/clientController");

// This app.use(routes) = require("./routes/apis"); is used from app.js

//define a router and create routes
const router = express.Router();
//routes for dynamic processing of products
//-----------------------------------------------
//route for listing all products
router.get("/api/catalogue", productController.getCatalogue);

// We are able to filter product ID's using the /:id endpoint. Express considers
// the ID in the endpoint /:id as a placeholder for a uesr parameter, and matches that value
router.get("/api/article/:id", productController.getProductByID);

// Route for Login
router.post("/api/login", clientController.loginControl);

// Route for Register
router.post("/api/register", clientController.registerControl);

//export router
module.exports = router;
