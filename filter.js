function filter(arr) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 5) filteredArr.push(arr[i]);
    }
    return filteredArr;
}

console.log(filter([1, 4, 6, 7, 2, 9]));
