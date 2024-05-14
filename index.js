const express=require('express')
const cors=require('cors')
const app=express()
let q=require('./query')
app.use(cors({
    origin:'*'
}))
app.get('/:id',q.query)
app.listen(3000,()=>{
    console.log('App started on 3000')
})