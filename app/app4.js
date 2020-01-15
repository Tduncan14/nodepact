const fs = require('fs');



fs.readFile('./db.json','utf-8',(err,data)=>{
  
    const d = JSON.parse(data);

 console.log(d,'this is d')
  return  console.log(d.Message,);


})

fs.readdir('./',function(err,data){
    
    console.log(data);
})


const temp ={
    greeting:'Never Ever Give up'
}


fs.writeFile('db1.json',JSON.stringify(temp),function(err){
    console.log('file created');
})