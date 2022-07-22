function printMax(Array){
    let max = Array[0];
    for(let i = 1; i < Array.length; i++){
        if(Array[i] > max)
            max = Array[i];
    }
    console.log("The maximum value in the array is: ", max);
}


arr = [2,35,6,7,132,7,0];
printMax(arr);
