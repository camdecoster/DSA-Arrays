# Assignment

Create a GitHub repo called "DSA-Arrays". Save all this work in the repo and submit the link to your repo.

1.  Implement an Array class from scratch.

    Walk through each step of implementing an array. Don't rush through this by copying and pasting the code samples. After you've walked through it and you understand the code of the Array class, hide the sample code and try writing the Array class from scratch using the memory module here for allocating memory.

    Be sure to export the memory module and then import it using require.

1.  Explore the push() method

    Using the Array class you just created above, add an item to the array. Use the following function:

    ```javascript
    function main() {
        Array.SIZE_RATIO = 3;

        // Create an instance of the Array class
        let arr = new Array();

        // Add an item to the array
        arr.push(3);

        console.log(arr);
    }
    ```

    -   What is the length, capacity and memory address of your array?

        ```javascript
        Array { length: 1, \_capacity: 3, ptr: 0 }
        ```

    -   Add the following in the main function and then print the array:

        ```javascript
        ...
        arr.push(5);
        arr.push(15);
        arr.push(19);
        arr.push(45);
        arr.push(10);
        ```

    -   What is the length, capacity and memory address of your array? Explain the result of your program after adding the new lines of code.

        ```javascript
        Array { length: 6, \_capacity: 12, ptr: 3 }
        ```

        Adding more elements to the array increased its length accordingly. Additionally, the capacity increased twice to its present size of 12 due to the length growing to the capacity. The pointer changed when the array was resized.

1.  Exploring the pop() method

    Add the following in the main function and then print the array:

    ```javascript
    ...
    arr.pop();
    arr.pop();
    arr.pop();
    ```

    -   What is the length, capacity, and address of your array? Explain the result of your program after adding the new lines of code.

        ```javascript
        Array { length: 3, \_capacity: 12, ptr: 3 }
        ```

        The result is the same as the previous answer, other than the length, which has been reduced by 3 to 3. This is because 3 elements were popped from the end of the array.

1.  Understanding more about how arrays work

    -   Print the 1st item in the array arr.

        ```javascript
        console.log(arr.get(0));
        3;
        ```

    -   Empty the array and add just 1 item: arr.push("tauhida");

        ```javascript
        arr.pop();
        arr.pop();
        arr.pop();
        arr.push("tauhida");
        ```

    -   Print this 1 item that you just added. What is the result? Can you explain your result?

        ```javascript
        console.log(arr.get(0));
        NaN;
        ```

        The Memory class used by the Array class was designed to store floating point numbers, not text. So when text is added to the array, the value is stored as NaN rather than a string. When that element is retrieved, NaN is returned.

    -   What is the purpose of the \_resize() function in your Array class?

        This function is used to increase the capacity of the array if it has been filled up.

    You can use JavaScript's built-in arrays to solve the following drills. After you write the algorithm, identify its time complexity and determine if it needs to be optimized. Start each problem by understanding the problem and coming up with some sample input and output. For your convenience, a few sample input and output are provided.

1.  URLify a string

    A common mistake users make when they type in an URL is to put spaces between words or letters. A solution that developers can use to solve this problem is to replace any spaces with a %20. Write a method that takes in a string and replaces all its empty spaces with a %20. Your algorithm can only make 1 pass through the string. Examples of input and output for this problem can be

    -   Input: tauhida parveen
    -   Output: tauhida%20parveen
    -   Input: www.thinkful.com /tauh ida parv een
    -   Output: www.thinkful.com%20/tauh%20ida%20parv%20een

    ```javascript
    function urlify(url) {
        const urlParts = url.split(" ");
        const properUrl = urlParts.join("%20");
        return properUrl;
    }
    ```

    This function is O(n), because it utilizes the split and join string methods, which are each O(n) themselves. It's technically, 2 \* O(n).

1.  Filtering an array

    Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.

    ```javascript
    function filter(arr) {
        const filteredArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= 5) filteredArr.push(arr[i]);
        }
        return filteredArr;
    }
    ```

    This function is O(n) because the computation time is directly proportional to the size of the input.

1.  Max sum in the array

    You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.

    -   Input: [4, 6, -3, 5, -2, 1]
    -   Output: 12

    ```javascript
    function maxSum(arr) {
        let max = 0;
        let sum;
        for (let i = 0; i < arr.length; i++) {
            sum = 0;
            // Get sum of values from ith element to end of array
            // Check if sum up to current j is max, if so, replace max with sum
            for (let j = i; j < arr.length; j++) {
                sum += arr[j];
                if (sum > max) max = sum;
            }
        }
        return max;
    }
    ```

    This function is O(n^2) because it uses two levels of looping.

1.  Merge arrays

    Imagine you have 2 arrays which have already been sorted. Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.

    -   Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
    -   Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

    ```javascript
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
    ```

    This function is O(n^2) because it uses two levels of looping.

1.  Remove characters

    Write an algorithm that deletes given characters from a string. For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the characters to be removed are "aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or join methods.

    -   Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
    -   Output: 'Bttl f th Vwls: Hw vs. Grzny'

    ```javascript
    function removeCharacters(str, charsToRemove) {
        let newStr = "";
        let removeChar;
        for (let i = 0; i < str.length; i++) {
            removeChar = false;
            for (let j = 0; j < charsToRemove.length; j++) {
                if (str.slice(i, i + 1) === charsToRemove.slice(j, j + 1)) {
                    removeChar = true;
                    break;
                }
            }
            if (!removeChar) newStr += str.slice(i, i + 1);
        }
        return newStr;
    }
    ```

    This function is O(n^2) because it uses two levels of looping.

1.  Products

    Given an array of numbers, write an algorithm to find out the products of every other number except the number at each index.

    -   Input:[1, 3, 9, 4]
    -   Output:[108, 36, 12, 27]

    ```javascript
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
    ```

    This function is O(n^2) because it uses two levels of looping.

1.  2D array

    Write an algorithm which searches through a 2D array, and whenever it finds a 0 should set the entire row and column to 0.

    -   Input:

    ```javascript
    [
        [1, 0, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [1, 1, 1, 1, 1],
        [1, 0, 1, 1, 1],
        [1, 1, 1, 1, 1],
    ];
    ```

    -   Output:

    ```javascript
    [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0],
    ];
    ```

    ```javascript
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
    ```

    This function is O(n^3) because it uses three levels of looping.

1.  String rotation

    Given 2 strings, str1 and str2, write a program that checks if str2 is a rotation of str1.

    -   Input: amazon, azonma
    -   Output: False
    -   Input: amazon, azonam
    -   Output: true

    ```javascript
    function stringRotation(str1, str2) {
        let result = false;
        for (let j = 0; j < str1.length; j++) {
            rotation = str1.slice(j) + str1.slice(0, j);
            if (rotation === str2) result = true;
        }
        return result;
    }
    ```

    This function is O(n) because it is directly proportional to the size of the input string.
