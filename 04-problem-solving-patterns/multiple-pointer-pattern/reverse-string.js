function reverseString(str) {
  let arr = str.split('');

  let left = 0;
  let right = arr.length - 1;


  while (left < right) {
    let temp = arr[left];
    arr[left] = temp;
    arr[right] = temp;

    left++;
    right--;
  }


  return arr.join('');
}

console.log(reverseString('hello'));
