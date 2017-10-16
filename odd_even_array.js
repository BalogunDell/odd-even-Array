function generateArrays(num) {
   let generated_array = [] , even = [] , odd = [];
  
  if(num === 0 || !arguments || !Number(num)) return false;
  
  for (let u = 1; u <= num; u++) {
    generated_array.push(u);
  }
 
  for(let v = 1; v < generated_array.length; v++) {

    generated_array[v] % 2 === 0 ? even.push(generated_array[v]) : odd.push(generated_array[v]);
    
    }  
    
  console.log("Generated array: " + 
  generated_array +" \n\nEven numbers: "  + 
  even + "\n\nOdd numbers: " + 
  odd);
  
}
