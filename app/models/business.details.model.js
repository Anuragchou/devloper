module.exports = (sequelize, Sequelize) => {
    const Business_details = sequelize.define("business_details", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      business_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      business_logo: {
        type: Sequelize.STRING
      },
      qr_code: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      social_links: {
        type: Sequelize.JSON
      },
      mobile_number: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true,
      },
      app_purchase_code: {
        type: Sequelize.STRING
      },
      worker_ids: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM("active", "inactive", "deleted", "pending"),
        defaultValue: "active"
      }
    });
  
    return Business_details;
  };
  