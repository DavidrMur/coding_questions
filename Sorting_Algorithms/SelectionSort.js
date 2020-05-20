// Selection Sort

function SelectionSort(arr) {

    let minPos = 0;

    for(let i=0; i<arr.length;i++) {
        minPos = i;
        for (let j=i; j<arr.length;j++) {
            if (arr[j] < arr[minPos]) {
                minPos = j;
            }
        }

        let temp = arr[i];
        arr[i] = arr[minPos];
        arr[minPos] = temp;
    }

    return arr;

}

console.log(SelectionSort([5,4,3,2,1]))