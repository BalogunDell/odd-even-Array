function generateArrays(num) {
  let arrayme = [];
  let even = [];
  let odd = [];
  
  if(num === 0 || !arguments || !Number(num)) return false;
  
    
  for (let u = 1; u <= num; u++) {
    arrayme.push(u);
  }
 
  for(let v = 1; v < arrayme.length; v++) {

    if(arrayme[v] % 2 === 0) {
      even.push(arrayme[v]);
    }else {
      odd.push(arrayme[v]);
      }
    }  
  console.log("Generated array: " +arrayme +" \n\nEven numbers: "  + even + "\n\nOdd numbers: " + odd);

}
