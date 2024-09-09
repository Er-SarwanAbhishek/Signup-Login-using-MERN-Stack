const mongoose = require('mongoose')

const dbConnection = async () => {
    try{
    await mongoose.connect(process.env.MONGO_URL).then(() =>{
        console.log("MongoDB Connected!!")
    })
}catch(err) {
    console.log("MongoDB not connected")
}
}
module.exports = dbConnection;