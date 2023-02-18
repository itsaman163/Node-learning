# NODE NOTES WITH EXPRESSJS

## PowerShell Execution Policy

You must set the PowerShell Execution Policy from Restricted to RemoteSigned or
Unrestricted to allow local PowerShell scripts to run.
For more information about PowerShell Execution Policy, type help about_signing or
help Set-ExecutionPolicy at the PowerShell command prompt.

>> Procedure

1. Select Start > All Programs > Windows PowerShell version > Windows PowerShell.
2. Type Set-ExecutionPolicy RemoteSigned to set the policy to RemoteSigned.
3. Type Set-ExecutionPolicy Unrestricted to set the policy to Unrestricted.
4. Type Get-ExecutionPolicy to verify the current settings for the execution policy.
5. Type Exit.
===================

## Shortcuts in command prompts

>> check mogo db version >>> mongod --version
===================

## NodeJs Notes

/*
const colors = require('colors');  // colors is a node module
console.log("amankumar".bgBlue);    // .bgblue will convert the background color from white to blue
const chalk = require('chalk'); // problem
*/

==========

## Sample api with static data in node>>>>>>>>

/*
const data = require("./data");             // In data folder write a json of data
const http = require('http');               // http is built-in module in nodejs to allow transfer data over (HTTP).
http.createServer((req, resp) =>{           // createServer is an method to create http server
resp.writeHead(200,{'content-type':'application/json'}); // If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type
resp.write(JSON.stringify(data));
resp.end();
}).listen(5000);
*/

===========

## How to get and set parameter through the command

prompt>>>>>>>>>>
/*
console.log(process.argv[5]);
const fs    = require('fs');
const i_par = process.argv;
fs.writeFileSync(i_par[2],i_par[3]); // example how to create a file and delete a file with input params
const fs    = require('fs');
const i_par = process.argv;

if(i_par[2] == 'add'){
    fs.writeFileSync(i_par[3],i_par[4]);
}else if(i_par[2] == 'delete'){
    fs.unlinkSync(i_par[3])
}else{
    console.log(i_par[2]);
}
*/

===============

## How to create file in side a file and multiple file also created

/*
const fs = require('fs');                               //to inisilize file system node module
const path = require('path');                           // to initilize node path module
const dir_path = path.join(__dirname, "files");         //.join() is a function of node
for(let i=0;i<=10;i++){
    fs.writeFileSync(`${dir_path}/data${i}.txt`,"fsdgfg");
}
*/

==============

## Show file list

/*
fs.readdir(dir_path, (err,files) => {
    files.forEach((item) => {
        console.log(`<h1>item</h1>`);
    })
})
*/

==============

## CRUD operation in file (node)

/*
const fs = require('fs');
const path = require('path');
const dir_path = path.join(__dirname,'crud');
const file_path = `${dir_path}/apple.txt`;

### 1>> Add

fs.writeFileSync(file_path,"my name is aman");                      // create file name is apple.txt

### 2>> Read

fs.readFile(file_path,'utf8', (err,item)=>{                         // read file and show the content
    console.log(item);
});

## 3>> Append

fs.appendFile(file_path," and I work for hidden brains",(err)=>{    // append some more content in the file
if(!err){console.log("content append successfully...")}
})

## 4>> Update file name

fs.rename(file_path, `${dir_path}/banana.txt`, (err)=>{             // rename the file name in side crud folder
if(!err){console.log("file name is rename successfully...")}
})

## 5>> Delete file

fs.unlinkSync(`${dir_path}/banana.txt`,(err)=>{
    if(!err){console.log("banana.txt is deleted successfully...")}
})
*/

## Promise >>>>>>>>>>>>>>>>>>>

/*
let a = 10;
let b = 0;
let create_promise = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve(20)
    },2000);
});
create_promise.then((data)=>{
    console.log(a+data);
});
*/

===============================================================================

## Express js Notes

### Create multiple pages for website

const express = require('express');                            // this is not executable state
const app = express();                                         // with the help of this syntex the expressJs is executable now
app.get('',(req,resp)=>{                                       // .get is an function
//express function and it has two parameters one is route and anather one is callback function with request and responce

    <http://localhost:5000/?name=aman>
    console.log(`argument pass by the browser is>>>> ${req.query.name}`); // when we pass argument through the url then it is get in req.query object

    resp.send(`<h1>Welcome to home page, ${req.query.name}</h1>
                <a href="/about">goto about</a>
                <input type="text" placeholder="Name" value=${req.query.name}>`); // what ever the response is throw with the help of .send function
});

app.get('/about',(req,resp)=>{
    // resp.send("hello, this is the about section");
    resp.send(`<input type="text" placeholder="Name Here" />
                <a href="/">go to home</a>`);
})

app.get('/help',(req,resp)=>{
    // resp.send("hello, this page is related to help any one...")

    resp.send(`[
                {
                    "name":"aman",
                    "email":"aman@gmail.com"
                },
                {
                    "name":"rahul",
                    "email":"rahul@gmail.com"
                }
            ]`);
})
app.listen(5000);

===========================

## Remove extension from URL

>> Apply get method
>> Apply 404 page

const express = require('express');                         // this is not executable state
const path = require('path');
const app = express();                                      // with the help of this syntex the expressJs is executable now
const public_path = path.join(__dirname,"public");

// app.use(express.static(public_path));

app.get("",(req,resp)=>{
    resp.sendFile(`${public_path}/index.html`)
});
app.get("/about",(req,resp)=>{
    resp.sendFile(`${public_path}/about.html`)
})
app.get("/home",(req,resp)=>{
    resp.sendFile(`${public_path}/home.html`)
})
app.get("*",(req,resp)=>{
    resp.sendFile(`${public_path}/noPage.html`);
})
app.listen(5000);

============================

## Template engine

>> What is tmplate engine (to create dynamic pages and is also a npm package.)
>> a>>Install ejs template package
>> Set up dynamic routing
>> Make dynamic page
>> Interview Question

a>>
const express   = require('express');                           // this is not executable state
const path      = require('path');
const app       = express();                                    // with the help of this syntex the expressJs is executable now
const public_path = path.join(__dirname,"public");              // create a view folder to use ejs template engine(vie/profile)
app.set("view engine","ejs");
app.get("/profile",(req,resp)=>{
    let data = {
                "name": "Aman Kumar",
                "email": "aman@gmail.com",
                "number": "5656565"
            };
    resp.render('profile',{data});
});

==========================

## Dynamic pages

>> How to make loop in ejs
>> Make header files
>> Show common header files
>> Interview Questions

<[body>
<%- include('common/header')%> // this is for include
header file
<[h1>Name is <%= data.name%></h1>
<[h3>Email is <%= data.email%></h3>
<[h3>Number is <%=data.number%></h3>
<[ul>
    <%data.lang.forEach((item)=>{ %> // loop in temp
        <[li><%=item%></li>
    <%})%>
</ul>
</body>

=========================

const express   = require('express'); // this is not executable state
const path      = require('path');

const app = express();  // with the help of this syntex the expressJs is executable now
const public_path = path.join(__dirname,"public");

//  create a view folder to use ejs template engine
app.set("view engine","ejs");
app.get("/profile",(req,resp)=>{
    let data = {
        "name": "Aman Kumar",
        "email": "aman@gmail.com",
        "number": "5656565",
        "lang" : ['php', 'node', 'js','html']
    }
    resp.render('profile',{data});
});

app.get("",(req,resp)=>{
    resp.sendFile(`${public_path}/index.html`)
});
app.get("/about",(req,resp)=>{
    resp.sendFile(`${public_path}/about.html`)
})
app.get("/home",(req,resp)=>{
    resp.sendFile(`${public_path}/home.html`)
})
app.get("*",(req,resp)=>{
    resp.sendFile(`${public_path}/noPage.html`);
})
app.listen(5000);
========================

## Middleware

>> What is middleware
>> How to make a middleware
>> Apply middleware in routes
>> Types of middleware
>> Interview question

###  How to make a middleware

const express = require("express");
const app = express();

const reqFilter = (req,resp,next)=>{   // this is a Application-level middleware
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

app.use(reqFilter);

app.get("/",(req,resp)=>{
    resp.send("welcome to home page");
})

app.get("/user",(req,resp)=>{
    resp.send("Welcome to user page.");
})

app.listen(5000);

=========================

### Middleware Types

>> Application-level middleware 
>> Routes-level middleware
>> Error-handling middleware
>> Built-in middleware
>> Third party middlewere


#### Routes-level middleware

>> Apply middleware in a single routes :- you can only right your middleware in the second parameter of the app.get() methods
example:- app.get("/home",middleware,(req,resp)={});
>> Make middleware in different file
>> Apply middleware in the group of routes 
example:-   const route = express.Router();
            route.use(reqFilter);
            route.get("/home",(req,resp)=>{})
            app.get("/",route)
>> interview questions

## Install MongoDB

>> Download db 
>> install mangodb
>> set up environment for rmongo
>> mongo db compass tool
>> interview quwstion 

## mongoDB Basic

>> what is mongodb
>> mongodb vs sql
>> mongoDb basic command
>> Interview question

### what is mongodb :-  a) MongoFB is NoSQL database
                        b) The data is stored in a collection 
                        c) Collection don't have rows and columns
                        d) data is stored in a object format

### MongoDB vs SQL  :-  

commands in mongo db - 
    a) show dbs                                     // To show all the databases);
    b) use "name of new database name"              // To create database
    c) db.createCollection("name of collection")    // To create a collection like tables in SQL
    d) db."collection name".drop()                  // To delete the collection from db
    e) show collection                              // To show the collection in database
    f) db                                           // To show the currenct database
    g) db.dropDatabase()                            // To delete the database

## CRUD operation in mongodb

    h) db."collectionName".insertOne({name:"i Phone", brand:"Apple",price:121, category: "mobile"})                                      // To insert one record into the collection
    i) db.CollectionName.find()                     // To show all the object in the collection
    j) db.collectionName.update({where_cond},{$set:{brand:"xyx"}})
            where_cond = brand:"Apple"              // To update the column in colection
    k) db.collectionName.delete({brand:"Apple"})    // To delete the column

    ## Connect Node with MongoDB
    >> Install mongoDb package  
            a) npm i mongodb
            
    >> connect MongoDb with Node js
    >> Show data from MongoDB
    >> Interview Question


git config --global user.name ""
git config --global user.email ""
 hello my name is aman