var {projects} = require('./data-store');
const express=require("express")
const app=express();


app.listen(8000,()=>{
    console.log("server running at port 8000")
})


app.get("/projects",(req,res)=>{
    return res.json({
        status:false,
        statusCode:400,
        message : "BAD REQUEST"
    })
})


app.get("/projects/:id",(req,res)=>{
    console.log("inside")
    const id=req.params.id;
    console.log(id);
    if(!id){
        return res.json({
            status:false,
            statusCode:400,
            message : "BAD REQUEST"
        })
    }
    else{
       let found=false;
       for(let i=0;i<projects.length;i++){
        if(projects[i].id==id){
            found=true;
            console.log("inside found")
            return res.json({
            status:true,
            statusCode:200,
            data:projects[i]
         })  
        }
       }
       if(found==false){
        return res.json({
            status:false,
            statusCode:404,
            msg:"not found"
         })  
       }  
    }  
    res.json({
        data:projects,
        msg:"hello"
    })
})


app.get("*",(req,res)=>{
    return res.json({
        status:false,
        statusCode:400,
        message : "BAD REQUEST"
    })
})

