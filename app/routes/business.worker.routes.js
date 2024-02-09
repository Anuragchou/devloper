module.exports = app => {
    const business_worker = require("../controllers/business.worker.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Business_worker
    router.post("/", business_worker.create);
  
    // Retrieve all Business_worker
    router.get("/", business_worker.findAll);

    // Retrieve all status Business_worker
    router.get("/status", business_worker.findAllstatus);

    // Retrieve a single Business_worker with id
    router.get("/:id", business_worker.findOne);

    // Update a Business_worker with id
    router.put("/:id", business_worker.update);

    // Delete a Business_worker with id
    router.delete("/:id", business_worker.delete);

    // Delete all Business_worker
    router.delete("/", business_worker.deleteAll);
    
    app.use("/api/business_worker", router);
  };
  