const express = require('express');
const router = express.Router();


const topicWiseQuestion=require('../controllers/topicWiseQuestion')
const attemptedQuestions=require('../controllers/attemptedQuestions')
const userDetails=require('../controllers/userDetails')

router.get('/:id',topicWiseQuestion)
router.get('/stats/:id',attemptedQuestions)
router.get('/user/:id',userDetails)  //not updated yet

module.exports=router;