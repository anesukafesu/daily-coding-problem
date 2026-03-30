function rotateArray(arr, k) {
  /*
  Time O(n)
  Space O(1)
  */
  
  currentIndex = 0;
  elementToPlace = arr[currentIndex];
  
  for (let i = 0; i < arr.length; i++) {
    let positionToPlace;
    
    if (currentIndex < k + 1) {
      positionToPlace = currentIndex + arr.length - k - 1;
    } else {
      positionToPlace = currentIndex - arr.length + k;
    }
  
    const temp = arr[positionToPlace];
    arr[positionToPlace] = elementToPlace;
    elementToPlace = temp;
    currentIndex = positionToPlace;
  }
}

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3

rotateArray(nums, k);

console.log(nums); // [5, 6, 7, 1, 2, 3, 4]
