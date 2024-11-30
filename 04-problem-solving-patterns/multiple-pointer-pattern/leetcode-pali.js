var isPalindrome = function(s) {
    const letters = s.replace(/[^a-zA-Z]/g, "");
    const sl = letters.toLowerCase();

    const arr = sl.split("");

    let left = 0;
    let right= arr.length - 1;

    while (left < right) {
        if(arr[left] !== arr[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))