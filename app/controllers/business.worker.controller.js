const db = require("../models");
const Business_worker = db.business_worker;
const Op = db.Sequelize.Op;

// Create and Save a new Business_worker
exports.create = (req, res) => {
  // Validate request
  if (!req.body.id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Business_worker
  const business_worker = {
      id: req.body.id,
      name: req.body.name,
      business_id:req.body.business_id,
      mobile_no: req.body.mobile_no,
      status: req.body.status
  };

  // Save Business_worker in the database
  Business_worker.create(business_worker)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Business_worker."
      });
    });
};

// Retrieve all Business_worker from the database.
exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { [Op.iLike]: `%${id}%` } } : null;

  Business_worker.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Business_worker."
      });
    });
};

// Find a single Business_worker with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Business_worker.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Business_details with id=" + id
      });
    });
};

// Update a Business_worker by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Business_worker.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Business_worker was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Business_worker with id=${id}. Maybe Business_worker was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Business_worker with id=" + id
      });
    });
};

// Delete a Business_worker with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Business_worker.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Business_worker was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Business_worker with id=${id}. Maybe Business_worker was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Business_worker with id=" + id
      });
    });
};

// Delete all Business_worker from the database.
exports.deleteAll = (req, res) => {
  Business_worker.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Business_worker were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Business_worker."
      });
    });
};

// find all status Business_worker
exports.findAllstatus = (req, res) => {
  Business_worker.findAll({ where: { status: "active" } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Business_worker."
      });
    });
};
