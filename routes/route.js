const express = require('express');
const router = express.Router();

const topic=require('../queries/topicWiseQuestion');
const userDetails_query= require('../queries/userDetails')
const attempted_questions= require('../queries/attemptedQuestions')


router.get('/:id',topic.query)
router.get('/stats/:id',attempted_questions.query)
router.get('/user/:id',userDetails_query.query)  //not updated yet

module.exports=router;