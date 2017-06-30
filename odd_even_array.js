function generateArrays(num) {
  let generated_array = [];
  let even = [];
  let odd = [];
  
  if(num === 0 || !arguments || !Number(num)) return false;
  
    
  for (let u = 1; u <= num; u++) {
    generated_array.push(u);
  }
 
  for(let v = 1; v < generated_array.length; v++) {

    if(generated_array[v] % 2 === 0) {
      even.push(generated_array[v]);
    }else {
      odd.push(generated_array[v]);
      }
    }  
  console.log("Generated array: " + generated_array +" \n\nEven numbers: "  + even + "\n\nOdd numbers: " + odd);

}
