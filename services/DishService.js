const Dish = require("../models/DishModel");

const createDish = (newDish) => {
  return new Promise(async (resolve, reject) => {
    const {
      dishName,
      dishType,
      dishDescribe,
      dishImage,
      dishQuantity,
      dishPrice,
      dishDiscount,
    } = newDish;
    try {
      const checkDish = await Dish.findOne({
        dishName: dishName,
      });
      if (checkDish !== null) {
        resolve({
          status: "ERR",
          message: "The dish is already",
        });
      }

      const createdDish = await Dish.create({
        dishName,
        dishType,
        dishDescribe,
        dishImage,
        dishQuantity,
        dishPrice,
        dishDiscount,
      });
      if (createdDish) {
        resolve({
          status: "OK",
          message: "SUCCESS",
          data: createdDish,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

const updateDish = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkDish = await Dish.findOne({
        _id: id,
      });
      if (checkDish === null) {
        resolve({
          status: "ERR",
          message: "The dish is not defined",
        });
      }

      const updateDish = await Dish.findByIdAndUpdate(id, data, { new: true });

      resolve({
        status: "OK",
        message: "SUCCESS",
        data: updateDish,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const deleteDish = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkDish = await Dish.findOne({
        _id: id,
      });
      if (checkDish === null) {
        resolve({
          status: "ERR",
          message: "The dish is not defined",
        });
      }

      await Dish.findByIdAndDelete(id);

      resolve({
        status: "OK",
        message: "DELETE SUCCESS",
        data: deleteDish,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getAllDish = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const allDish = await Dish.find();
      resolve({
        status: "OK",
        message: "GET_ALL SUCCESS",
        data: allDish,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getDetailsDish = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const dish = await Dish.findOne({
        _id: id,
      });
      if (dish === null) {
        resolve({
          status: "ERR",
          message: "The dish is not defined",
        });
      }

      resolve({
        status: "OK",
        message: "SUCCESS",
        data: dish,
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createDish,
  updateDish,
  deleteDish,
  getAllDish,
  getDetailsDish,
};
