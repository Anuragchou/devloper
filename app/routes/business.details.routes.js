module.exports = app => {
    const business_details = require("../controllers/business.details.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Business_details
    router.post("/", business_details.create);
  
    // Retrieve all Business_details
    router.get("/", business_details.findAll);

    // Retrieve all status Business_details
    router.get("/status", business_details.findAllstatus);

    // Retrieve a single Business_details with id
    router.get("/:id", business_details.findOne);

    // Update a Business_details with id
    router.put("/:id", business_details.update);

    // Delete a Business_details with id
    router.delete("/:id", business_details.delete);

    // Delete all Business_details
    router.delete("/", business_details.deleteAll);
    
    app.use("/api/business_details", router);
  };
  