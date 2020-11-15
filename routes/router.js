const express=require('express');
const router=express.Router();
const todoscontroller=require('../controllers/todosController');

router.get('/', function(req, res,) {
    res.render('todos', { layout: 'main' });
  });
  
router.post('/todos',todoscontroller.insert);
module.exports = router;