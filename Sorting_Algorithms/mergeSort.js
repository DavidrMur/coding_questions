function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let midpoint = Math.floor(arr.length/2);
    let left = helperFunction(arr.slice(0, midpoint));
    let right = helperFunction(arr.slice(midpoint));
    return helperFunction (left, right);
}

function helperFunction(arr1,arr2) {
    // Given two sorted arrays, merge them such that they are sorted
    let i = 0;
    let j = 0;
    let newArr = [];
    
    while (arr1 && i < arr1.length && arr2 && j < arr2.length) {
        if (arr1[i] < arr2[j]) newArr.push(arr1[i++]);
        else newArr.push(arr2[j++]);
    }

    if (i < arr1.length) newArr = newArr.concat(arr1.slice(i));
    else if (j < arr2.length) newArr = newArr.concat(arr2.slice(j));

    return newArr;
}


let arr1 = [1,4,7,9];
let arr2 = [2,3,6,1,5,4];
console.log(mergeSort(arr2));