const db = require("../db/dbConfig");

const getAllItems = async () => {
  try {
    const items = await db.any("SELECT * FROM items");
    return items;
  } catch (error) {
    return error;
  }
};

const getOneItem = async (id) => {
  try {
    const item = await db.one("SELECT * FROM items WHERE id=$1", id);
    return item;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllItems,
  getOneItem,
};
