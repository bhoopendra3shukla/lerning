const fs=require("fs");//build in module in node js

//Sync...
fs.writeFileSync("./text.txt","hello Bhoopendra");

//Async...
fs.writeFile("/text.txt","hello Bhoopendra async",(err)=>{
    if(err){
        console.log(err)
    }
});
