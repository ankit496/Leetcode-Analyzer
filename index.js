const express=require('express')
const cors=require('cors')
const app=express()
const fetchQuestions=require('./router/fetchQuestions')
const queryRouter= require('./routes/route')


app.use(cors({
    origin:'*'
}))
app.use('/question',fetchQuestions)
app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.use('/api',queryRouter);

app.listen(3000,()=>{
    console.log('App started on 3000')
})