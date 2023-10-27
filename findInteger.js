 var arr = [1,2,3,4,6,7,8]
 function findMissingNum(arr){
    for (var i=0; i<arr.length-1; i++){// i=0<4-1=3(0<6),  1<6,   2<6,3<6,4<6
        // console.log(arr.length-1)//7-1=6
        
        if(arr[i] +1 != arr[i+1]){//(arr[0]+1(1+1) =2 not equal to arr[0+1]=2--false,2+1=3 not equal to 3,,3=3-false,--3+1=4 not equal to 4 4=4--false
                                  //4+1=5 != 6 true
            // console.log(arr[i])
            return arr[i] +1//arr[3]+1 = 4+1 =5
            

        }

    }
    return false
 }
  console.log(findMissingNum(arr))