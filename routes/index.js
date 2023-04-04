const UserRouter = require('./UserRouter')
// const DishRouter = require('./DishRouter')
// const BillRouter = require('./BillRouter')
// const OderRouter = require('./OderRouter')
// const StaffRouter = require('./StaffRouter')
// const TableRouter = require('./TableRouter')
// const ProfileRestaurentRouter = require('./ProfileRestaurentRouter')

const routes = (app) => {
    app.use('/api/user', UserRouter)
    // app.use('/api/bill', BillRouter),
    // app.use('/api/dish', DishRouter),
    // app.use('/api/table', TableRouter),
    // app.use('/api/oder', OderRouter),
    // app.use('/api/staff', StaffRouter),
    // app.use('/api/profile', ProfileRestaurentRouter)
}
module.exports = routes 