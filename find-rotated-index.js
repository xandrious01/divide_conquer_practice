function findRotatedIndex(arr, num) {
    var pivot = findPivot(arr)
  if (pivot > 0 && num >= arr[0] && num <= arr[pivot - 1]) {
    return binarySearch(arr, num, 0, pivot - 1);
  } else {
    return binarySearch(arr, num, pivot, arr.length - 1);
  }
}

function binarySearch(arr, num, start, end) {
  if (arr.length === 0) return -1;
  if (num < arr[start] || num > arr[end]) return -1;

  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    if (arr[mid] === num) {
      return mid;
    } else if (num < arr[mid]) {
      end = mid - 1;
    } else {arr
      start = mid + 1;
    }
  }
  return -1;
}

function findPivot(arr) {
  if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
  var start = 0
  var end = arr.length - 1;
  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    if (arr[mid] > arr[mid + 1]) return mid + 1
    else if (arr[start] <= arr[mid]) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
}

module.exports = findRotatedIndex

findRotatedIndex([3, 4, 1, 2], 4) // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
findRotatedIndex([37, 44, 66, 102, 10, 22], 14) // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1