module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("customer", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      uuid: {
        type: Sequelize.STRING
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      mobile_no: {
        type: Sequelize.STRING
      },
      street_address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      pincode: {
        type: Sequelize.INTEGER
      }
    });
  
    return Customer;
  };
  