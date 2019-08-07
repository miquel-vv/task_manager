const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next){
  res.send('Calling all tasks');
});

router.post('/', function(req, res, next){
  res.send('Created new task');
});

router.get('/:taskId', function(req, res, next){
  res.send(`Getting task: ${req.params.taskId}.`);
});

router.put('/:taskId', function(req, res, next){
  res.send(`Updating task: ${req.params.taskId}.`);
});

router.delete('/:taskId', function(req, res, next){
  res.send(`Deleting task: ${req.params.taskId}.`);
});

module.exports = router;
