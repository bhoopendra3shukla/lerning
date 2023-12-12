const fs=require("fs");//build in module in node js

//Sync...
fs.writeFileSync("./text.txt","hello Bhoopendra");

//Async...
fs.writeFile("/text.txt","hello Bhoopendra async",(err)=>{
    if(err){
        console.log(err)
    }
});

//read the file Sync
const result=fs.readFileSync("./contect.txt","utf-8");
console.log(result)

//read the file Async
fs.readFile("./contect.txt","utf-8",(err,result1)=>{
    if (err) throw err;
    else console.log(result1) 
});
console.log(result)
