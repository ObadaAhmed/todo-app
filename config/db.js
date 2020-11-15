//requires
const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost/TodosDB",{useNewUrlParser : true , useUnifiedTopology : true},(err)=>{
    if(!err)
    console.log("Connected");
    else{
        console.log("Error in connecting to DB");
    }
})