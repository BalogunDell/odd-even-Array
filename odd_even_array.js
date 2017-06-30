function alg(num) {
  let arrayme = [];
  let even = [];
  let odd = [];
  
  if(num === 0) return false;
  
  let u = 1; 
    
  for(; u <= num; u++) {
    arrayme.push(u);
  }

  let v= 1;
  
  for(; v < arrayme.length; v++) {
    if(arrayme[v] % 2 === 0) {
      even.push(arrayme[v]);
    }else {
      odd.push(arrayme[v]);
      }
    }  
    console.log("Generated array: " +arrayme);
    console.log("Even numbers " + even);
    console.log("Odd numbers " + odd);
}

alg(15);