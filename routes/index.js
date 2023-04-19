const UserRouter = require("./UserRouter");
const DishRouter = require("./DishRouter");
const BillRouter = require("./BillRouter");
const OrderRouter = require("./OrderRouter");
const StaffRouter = require("./StaffRouter");
const TableRouter = require("./TableRouter");
const ProfileRestaurantRouter = require("./ProfileRestaurantRouter");

const routes = (app) => {
  app.use("/api/user", UserRouter),
    app.use("/api/bill", BillRouter),
    app.use("/api/dish", DishRouter),
    app.use("/api/table", TableRouter),
    app.use("/api/order", OrderRouter),
    app.use("/api/staffs", StaffRouter),
    app.use("/api/profile", ProfileRestaurantRouter);
};
module.exports = routes;
