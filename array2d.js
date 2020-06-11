function array2d(arr) {
    // Make copy of array
    const newArr = [];
    arr.forEach((subArr) => newArr.push([...subArr]));

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            // Check element value
            if (arr[i][j] === 0) {
                // Zero out row
                for (let k = 0; k < arr[i].length; k++) {
                    newArr[i][k] = 0;
                }
                // Zero out column
                for (let l = 0; l < arr.length; l++) {
                    newArr[l][j] = 0;
                }
            }
        }
    }

    return newArr;
}

console.log(
    array2d([
        [1, 0, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [1, 1, 1, 1, 1],
        [1, 0, 1, 1, 1],
        [1, 1, 1, 1, 1],
    ])
);
