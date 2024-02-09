module.exports = app => {
    const service_details = require("../controllers/service.details.controller.js");
  
    var router = require("express").Router();
  
    // Create a new service_details
    router.post("/", service_details.create);
  
    // Retrieve all service_details
    router.get("/", service_details.findAll);

    // Retrieve all status service_details
    router.get("/status", service_details.findAllstatus);

    // Retrieve a single service_details with id
    router.get("/:id", service_details.findOne);

    // Update a service_details with id
    router.put("/:id", service_details.update);

    // Delete a service_details with id
    router.delete("/:id", service_details.delete);

    // Delete all service_details
    router.delete("/", service_details.deleteAll);
    
    app.use("/api/service_details", router);
  };
  