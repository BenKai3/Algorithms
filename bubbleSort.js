let arr = [1,3,12,5,2,4,7,6,9,8];

function bubbleSort(arr) {
  let temp;
  let len = arr.length;
  
  for(let j = 0; j<len;j++){    
    for(let i = 0;i<arr.length;i++){    
      if(arr[i] > arr[i+1]){
        temp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = temp;
      }      
      length--;
    }
  }
  return arr;
}

console.log(bubbleSort(arr));