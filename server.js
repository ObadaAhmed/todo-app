//requires
const express=require('express');
const mongooose=require('mongoose');
const bodyparser=require('body-parser');
const db=require('./config/db');
const todosRouter = require('./routes/router');
const todoscontroller=require('./controllers/todosController');
const exphandle = require('express-handlebars');
const path = require('path');

//initialize app
const app=express();

//bodyparser
app.use(express.json());

app.engine('handlebars',exphandle( {defaultLayout:'main'} ));
    app.set('view engine','handlebars');
    app.use(bodyparser.urlencoded({extended:false}));
    app.use(express.static(path.join(__dirname+'/public')))

// app.use(bodyparser.urlencoded({
//     extended:true
// }))

app.use('/' , todosRouter);

//port
app.listen(3000,()=>{
    console.log("Server started on port 3000");
})
