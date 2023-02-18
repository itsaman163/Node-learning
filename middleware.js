
module.exports= reqFilter = (req,resp,next)=>{
    // console.log("reqFilter");
    if(!req.query.age){
        resp.send("you have not given the age");
    }else if(req.query.age < 18){
        resp.send("you are not authorize to this app");
    }
    else{
        next();
    }
};