function fibs(n) { 


  let arr = [0, 1];


  for (let i = 2; i < n; i++) { 
    arr.push(arr[i - 2] + arr[i - 1]);
 }
 return arr;
 
}  

console.log(fibs(8))


function fibsRec(n) {

  console.log("This was printed recursively");

  if (n === 0) {return []; } 

  else if (n === 1) {return [0]; } 

  else if (n === 2) {return [0,1]; }
  
  else {


    const arr = fibsRec(n - 1);
    return arr.concat(arr[arr.length - 2] + arr[arr.length - 1]);

}
}

console.log(fibsRec(8));

