const express=require('express')
const question  = require('../controller/question')
const router=express.Router()
router.get("/:id",question)
module.exports=router