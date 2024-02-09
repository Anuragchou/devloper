module.exports = (sequelize, Sequelize) => {
    const Business_worker = sequelize.define("business_worker", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      business_id:{
        type: Sequelize.INTEGER,
        foreignKey: true,
      },
      mobile_no: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM("active", "inactive", "deleted", "pending"),
        defaultValue: "active"
      }
    });
  
    return Business_worker;
  };
  