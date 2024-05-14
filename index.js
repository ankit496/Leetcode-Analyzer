const express=require('express')
const cors=require('cors')
const app=express()
const fetchQuestions=require('./router/fetchQuestions')
app.use(cors({
    origin:'*'
}))
app.use('/question',fetchQuestions)
app.listen(3000,()=>{
    console.log('App started on 3000')
})