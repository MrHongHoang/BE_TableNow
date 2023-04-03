const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose");
const routes = require("./src/routes");
const bodyParser = require("body-parser");
dotenv.config()


const app = express();
const PORT = process.env.port || 3001;


app.use(bodyParser.json())

routes(app);


mongoose.connect(`${process.env.MONGO_DB}`)
    .then(()=>{
        console.log('Connect DB success')
    })
    .catch((err)=> {
        console.log(err)
    })





app.listen(PORT, () => {
    console.log(`Sever is running on port ${PORT}`)
})
