const mongoose=require("mongoose")
const diarySchema=mongoose.Schema({
    username:String,
    foodname:String,
    searchDate:String
})

module.exports=mongoose.model('diary',diarySchema)