function countZeroes(arr) {
    let low = 0;
    let high = arr.length - 1;
    let count;
    if (arr[low] === 0) {
        count = arr.length;
        return count;
    }
    if (arr[high] === 1) {
        count = 0;
        return count;
    }
    while (low <= high) {
        let mid = Math.floor((high + low) / 2);

        if (arr[mid] === 0 && arr[mid - 1] === 1) {

            let firstZero = mid;
            count = arr.length - firstZero;
            return count;

        } else if (arr[mid] === 1 && arr[mid + 1] === 0) {

            let firstZero = mid + 1;
            count = arr.length - firstZero;
            return count;

        } else if (arr[mid] === 1 && arr[mid + 1] === 1) {

            low = mid + 1;

        } else {

            high = mid - 1;

        }
    }
    return count;
}

//find first 0 in array
//take index of that first 0 
//subtract position from arr.length +1

let test1 = countZeroes([1, 1, 1, 1, 0, 0])
let test2 = countZeroes([1, 0, 0, 0, 0])
let test3 = countZeroes([0, 0, 0])
let test4 = countZeroes([1, 1, 1, 1])

console.log(test1,test2,test3,test4)

module.exports = countZeroes 