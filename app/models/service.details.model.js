module.exports = (sequelize, Sequelize) => {
    const Service_details = sequelize.define("service_details", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      service_type: {
        type: Sequelize.STRING
      },
      service_desc: {
        type: Sequelize.STRING
      },
      worker_id: {
        type: Sequelize.INTEGER
      },
      parts_list_photo: {
        type: Sequelize.STRING
      },
      total_charges: {
        type: Sequelize.DOUBLE,
        defaultValue: 0
      },
      amount_paid: {
        type: Sequelize.DOUBLE,
        defaultValue: 0
      },
      amount_due: {
        type: Sequelize.DOUBLE,
        defaultValue: 0
      },
      payment_type: {
        type: Sequelize.DOUBLE,
        defaultValue: 0
      },
      next_service_date: {
        type: Sequelize.STRING
      },
      warrenty_card_photo: {
        type: Sequelize.STRING
      },
      collected_by_name: {
        type: Sequelize.STRING
      },
      collected_by_mobile_no: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM("active", "inactive", "deleted", "pending"),
        defaultValue: "active"
      }
    });
  
    return Service_details;
  };
  