const todosmodel=require('../models/todos');

/////Insert
module.exports.insert= async(req,res)=>{
    try{    
    const {todo,membername,memberemail}=req.body;
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
////////Select all todos
module.exports.show=async(req,res)=>{
    try{
        const todos=await todosmodel.find();
        console.log(todos);
    }catch(e)
    {
        console.log(e);
    }
}
///////Select a specific todo
module.exports.selectid=async(req,res)=>{
    try{
        const {id}=req.body;
        //find by id 
        const todos=await todosmodel.findById(id);
         if(!todos) console.log("Not Found!");
         else{
        console.log(todos);
         }
    }
    catch(e){
        console.log(e);
    }
}
////////Update Todo
module.exports.update=async(req,res)=>{
    try{
        const {id,todo,membername,memberemail}=req.body;

        //find by id
        const todos=await todosmodel.findById(id);
        if(!todos) return;
        //modify properties
        todos.set({
            todo:todo,
            membername:membername,
            memberemail:memberemail
    })
        //save
        const result=await todos.save();
        console.log("Updated");
        }
    catch(e){
        console.log(e)
    }
}
///////Delete Todo
module.exports.delete=async(req,res)=>{
    try{
        const {id}=req.body;
        //find by id and delete
        const todo=await todosmodel.findByIdAndRemove(id);
        console.log("Deleted");
    }
    catch(e) {
        console.log(e);
    }
}
///////Delete todos
module.exports.deletemany=async(req,res)=>{
    try{
        const todo=await todosmodel.deleteMany();
        console.log(todo);
    }
    catch(e)
    {
        console.log(e);
    }
}
//////Search Todo
module.exports.search=async(req,res)=>{
    try{
        const {id}=req.body;
        //find by id and return 
        const todo=await todosmodel
        .findById(id)
        .select({membername:1 ,memberemail:1});
        console.log(todo);
    }
    catch(e){
        console.log(e);
    }
}













