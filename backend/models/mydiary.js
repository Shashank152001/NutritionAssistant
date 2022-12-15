const mongoose=require("mongoose")
const mydiarySchema=mongoose.Schema({
    username:String,
    foodname:String,
    searchDate:String
})

module.exports=mongoose.model('mydiary',mydiarySchema)