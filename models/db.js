const mongoose = require("mongoose")

const mongo_url= process.env.MONGOURL


mongoose.connect(mongo_url)
.then(()=>{
    console.log("db connect sucessfully")
}).catch((err)=>{
    console.log("db failed", err)

})