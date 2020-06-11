function products(arr) {
    const products = [];
    for (let i = 0; i < arr.length; i++) {
        const arrTruncated = arr.filter((item) => item !== arr[i]);
        let product = 1;
        for (let j = 0; j < arrTruncated.length; j++) {
            product *= arrTruncated[j];
        }
        products.push(product);
    }
    return products;
}

console.log(products([1, 3, 9, 4]));
