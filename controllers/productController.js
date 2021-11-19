const getCatalogue = (request, response) => {
  const catalogServices = require("../services/productServices");
  catalogServices.searchService(function (err, rows) {
    response.render("catalogue", { products: rows });
  });
};

const getProductByID = (request, response) => {
  const catalogServices = require("../services/productServices");
  // The id is the one the user clicks in the catalogue page
  let reference = request.params.id;
  catalogServices.searchIDService(reference, function (err, rows) {
    response.render("article", { rows: rows });
  });
};

const getProductsByCategory = (request, response) => {
  const catalogServices = require("../services/productServices");
  let category = request.params.category;
  catalogServices.searchCategoryService(category, function (err, rows) {
    response.json(rows);
    response.end();
  });
};

module.exports = {
  getCatalogue,
  getProductByID,
  getProductsByCategory
};
