const db = require("../models");
const Business_details = db.business_details;
const Op = db.Sequelize.Op;

// Create and Save a new Business_details
exports.create = (req, res) => {
  // Validate request
  if (!req.body.id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Business_details
  const business_details = {
      id: req.body.id,
      business_name: req.body.business_name,
      business_logo: req.body.business_logo,
      qr_code: req.body.qr_code,
      address: req.body.address,
      social_links: req.body.social_links,
      mobile_number: req.body.mobile_number,
      email: req.body.email,
      app_purchase_code: req.body.app_purchase_code,
      worker_ids: req.body.worker_ids,
      status: req.body.status
  };

  // Save Business_details in the database
  Business_details.create(business_details)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Business_details."
      });
    });
};

// Retrieve all Business_details from the database.
exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { [Op.iLike]: `%${id}%` } } : null;

  Business_details.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving business_details."
      });
    });
};

// Find a single Business_details with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Business_details.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Business_details with id=" + id
      });
    });
};

// Update a Business_details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Business_details.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Business_details was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Business_details with id=${id}. Maybe Business_details was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Business_details with id=" + id
      });
    });
};

// Delete a Business_details with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Business_details.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Business_details was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Business_details with id=${id}. Maybe Business_details was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Business_details with id=" + id
      });
    });
};

// Delete all Business_details from the database.
exports.deleteAll = (req, res) => {
  Business_details.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Business_details were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Business_details."
      });
    });
};

// find all status Business_details
exports.findAllstatus = (req, res) => {
  Business_details.findAll({ where: { status: "active" } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Business_details."
      });
    });
};
