function findDuplicates(arr) {
  var arr1 = {};
  
  var duplicates = [];//store dublicates value

  for (var i = 0; i < arr.length; i++) {//using for loop for itration: 0<7
    if (arr1[arr[i]]) {
      //console.log(seen)
      if (!duplicates.includes(arr[i])) {
         duplicates.push(arr[i]);
      }
    } else {
      arr1[arr[i]] = 1;
      
      }
  }

  return duplicates;
}

var arr = [1, 2,3,6,3,6,1];
console.log( findDuplicates(arr));
