const express=require('express');
const app=express();
const port=3000

app.get(`/assistant/greet`,(req,res)=>{
    const name=req.query.name
    const date=new Date().getDay()
    const dayMessage=[
        "have a wonderful day",
        "happy monday! start your week with energy!",
        "have a wonderful day!",
        "have a wonderful day!",
        "have a wonderful day!",
        "it's friday! The weekend is near!",
        "have a wonderful day!",
    ]

res.send({

    
})
})


app.listen(port,()=>{
    console.log(`server is running in ${port}`)
})