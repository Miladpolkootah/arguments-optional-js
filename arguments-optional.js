function addTogether(){
    let arr = [...arguments];
    let res = arr.every(item=>typeof item === "number");
    if(res == true){
      if(arr.length > 1){
        return arr.reduce((sum, item)=>sum+item);
      }else{
        return function(x){
          if(typeof x != "number"){
            return undefined;
          }else{
            return x+arr[0]
          }
        }
      }
    }else{
      return undefined;
    }
  }
  
  console.log(addTogether(5)(7));