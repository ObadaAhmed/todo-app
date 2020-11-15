const todosmodel=require('../models/todos');

/////Insert
module.exports.insert= async(req,res)=>{
    try{    const {todo,membername,memberemail}=req.body;
    const todos=new todosmodel({
        todo,membername,memberemail
    });
    const savedtodo=todos.save();
    console.log('Inserted');
    //console.log(savedtodo);
}
    catch(e){
    console.log('error in insertion'+e);
}
}