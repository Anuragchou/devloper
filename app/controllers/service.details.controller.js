const db = require("../models");
const Service_details = db.service_details;
const Op = db.Sequelize.Op;

// Create and Save a new Service_details
exports.create = (req, res) => {
  // Validate request
  if (!req.body.id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Service_details
  const service_details = {
      id: req.body.id,
      service_type: req.body.service_type,
      service_desc: req.body.service_desc,
      worker_id: req.body.worker_id,
      parts_list_photo: req.body.parts_list_photo,
      total_charges: req.body.total_charges,
      amount_paid: req.body.amount_paid,
      amount_due: req.body.amount_due,
      payment_type: req.body.payment_type,
      next_service_date: req.body.next_service_date,
      warrenty_card_photo: req.body.warrenty_card_photo,
      collected_by_name: req.body.collected_by_name,
      collected_by_mobile_no: req.body.collected_by_mobile_no,
      status: req.body.status
  };

  // Save Service_details in the database
  Service_details.create(service_details)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Service_details."
      });
    });
};

// Retrieve all Service_details from the database.
exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { [Op.iLike]: `%${id}%` } } : null;

  Service_details.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Service_details."
      });
    });
};

// Find a single Service_details with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Service_details.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Service_details with id=" + id
      });
    });
};

// Update a Service_details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Service_details.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Service_details was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Service_details with id=${id}. Maybe Service_details was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Service_details with id=" + id
      });
    });
};

// Delete a Service_details with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Service_details.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Service_details was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Service_details with id=${id}. Maybe Service_details was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Service_details with id=" + id
      });
    });
};

// Delete all Service_details from the database.
exports.deleteAll = (req, res) => {
  Service_details.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Service_details were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Service_details."
      });
    });
};

// find all status Service_details
exports.findAllstatus = (req, res) => {
  Service_details.findAll({ where: { status: "active" } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Service_details."
      });
    });
};
