const express=require('express');
const router=express.Router();
const todoscontroller=require('../controllers/todosController');

router.get('/', function(req, res,) {
    res.render('todos', { layout: 'main' });
  });
  router.get('/selectid', function(req, res,) {
    res.render('view', { layout: 'main' });
  });
  router.get('/update', function(req, res,) {
    res.render('update', { layout: 'main' });
  });
  router.get('/delete', function(req, res,) {
    res.render('delete', { layout: 'main' });
  });
  router.get('/search', function(req, res,) {
    res.render('search', { layout: 'main' });
  });
router.post('/todos',todoscontroller.insert);
router.get('/show',todoscontroller.show);
router.post('/selectid',todoscontroller.selectid);
router.post('/update',todoscontroller.update);
router.post('/delete',todoscontroller.delete);
router.get('/deletemany',todoscontroller.deletemany);
router.post('/search',todoscontroller.search);
module.exports = router;