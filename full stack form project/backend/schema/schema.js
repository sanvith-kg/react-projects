const mongoose=require("mongoose")

const user_schema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    contact:{
        type:String,
        require:true
    }
})

const user_model=new mongoose.model("user_details",user_schema)

module.exports=user_model