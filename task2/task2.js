
const result = num =>{
    let multiple = 0;
    for(let i = 0; i<num;i++){
      
      if(i%3==0 || i %5==0){
        multiple += i;
       
      }
    }
    return multiple;
  }
 
module.exports = result