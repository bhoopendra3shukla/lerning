const fs=require("fs");//build in module in node js

//Sync...
fs.writeFileSync("./text.txt","hello Bhoopendra");

//Async...
fs.writeFile("/text.txt","hello Bhoopendra async",(err)=>{
    if(err){
        console.log(err)
    }
});

//read the file
const result=fs.readFileSync("./contect.txt","utf-8");
console.log(result)
