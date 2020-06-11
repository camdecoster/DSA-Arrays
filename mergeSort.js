function mergeSort(arr1, arr2) {
    const newArr = [];
    let bigArray, smallArray;
    let jStart = 0;
    if (arr1.length > arr2.length) {
        bigArray = arr1;
        smallArray = arr2;
    } else {
        bigArray = arr2;
        smallArray = arr1;
    }
    for (let i = 0; i < bigArray.length; i++) {
        for (let j = jStart; j < smallArray.length; j++) {
            if (bigArray[i] < smallArray[j]) {
                newArr.push(bigArray[i]);
                // Add remaining smallArray item if bigArray has already been added
                if (i + 1 >= bigArray.length) {
                    newArr.push(smallArray[j]);
                }
                break;
            } else {
                newArr.push(smallArray[j]);
                jStart = j + 1;
            }
        }
        // Add remaining bigArray items if smallArray has already been added
        if (jStart >= smallArray.length) {
            newArr.push(bigArray[i]);
        }
    }
    return newArr;
}

console.log(mergeSort([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));
