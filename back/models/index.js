"use strict";

const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
// const Block = require("./block");
const db = {};
// const db = { Table };
let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Block.init(sequelize);

// Table.associate(sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
