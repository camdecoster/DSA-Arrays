function stringRotation(str1, str2) {
    let result = false;
    for (let j = 0; j < str1.length; j++) {
        rotation = str1.slice(j) + str1.slice(0, j);
        if (rotation === str2) result = true;
    }
    return result;
}

console.log(stringRotation("amazon", "azonam"));
