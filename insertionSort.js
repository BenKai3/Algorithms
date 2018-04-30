const list = [54, 26, 93, 17, 77, 31, 44, 55, 20];

function insertionSort(a){
  var value;
  for(var i=0; i < a.length; i++){
    value = a[i];
    for(var j=i; a[j-1] > value; j--){
      a[j] = a[j-1];
    }
    a[j] = value;
  }
  return a;
};


console.log(insertionSort(list));