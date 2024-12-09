/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false, 
    validate: {
      notEmpty: true
    }
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false, 
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING, 
    allowNull: false, 
    validate: {
      notEmpty: true,
      isEmail: true
    }
  }, 
  imageURL: {
    type: Sequelize.STRING,
    defaultValue: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmRLRMXynnc7D6-xfdpeaoEUeon2FaU0XtPg&s",
    allowNull: true, 
    validate: {
      isURL: true
    }
  },
  gpa: {
    type: Sequelize.DECIMAL(2,1), 
    allowNull: true, 
    validate: {
      min: 0.0,
      max: 4.0
    }
  }
});

// Export the student model
module.exports = Student;