const mongoose=require('mongoose');
const TodoSchema=new mongoose.Schema({
    todo : {type : String},
    membername: {type : String},
    memberemail: {type : String}
})
const todos=mongoose.model('Todos',TodoSchema);
module.exports= todos;