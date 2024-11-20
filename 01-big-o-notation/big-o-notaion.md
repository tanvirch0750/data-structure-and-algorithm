Here's your **Big O Notation** note in Markdown format:

````markdown
# Big O Notation Cheatsheet

Big O Notation helps us measure **how efficient** our code is as the input size grows. It tells us the **time complexity** (how fast) or **space complexity** (how much memory) a program will take.

---

## **Common Big O Notations**

1. **O(1) - Constant Time**
   - The work stays the same, no matter the input size.
   - Example: Accessing the first item in an array.
   ```javascript
   function getFirstItem(items) {
     return items[0]; // Always the same time
   }
   ```
````

2. **O(n) - Linear Time**

   - The work grows **proportionally** to the input size.
   - Example: Looping through an array.

   ```javascript
   function printAllItems(items) {
     items.forEach((item) => console.log(item));
   }
   ```

3. **O(n²) - Quadratic Time**

   - The work grows **exponentially** as the input size grows.
   - Example: Nested loops (comparing all pairs).

   ```javascript
   function printAllPairs(items) {
     items.forEach((item1) => {
       items.forEach((item2) => {
         console.log(item1, item2);
       });
     });
   }
   ```

4. **O(log n) - Logarithmic Time**

   - The work grows **slowly** as the input size grows (divide and conquer).
   - Example: Binary search in a sorted array.

   ```javascript
   function binarySearch(items, target) {
     let start = 0,
       end = items.length - 1;

     while (start <= end) {
       const mid = Math.floor((start + end) / 2);
       if (items[mid] === target) return mid;
       if (items[mid] < target) start = mid + 1;
       else end = mid - 1;
     }

     return -1; // Not found
   }
   ```

5. **O(n log n) - Log-Linear Time**

   - A combination of **O(n)** and **O(log n)**. Used in efficient sorting algorithms.
   - Example: Merge sort.

   ```javascript
   function mergeSort(array) {
     if (array.length <= 1) return array;

     const mid = Math.floor(array.length / 2);
     const left = mergeSort(array.slice(0, mid));
     const right = mergeSort(array.slice(mid));

     return merge(left, right);
   }

   function merge(left, right) {
     const sorted = [];
     while (left.length && right.length) {
       if (left[0] < right[0]) sorted.push(left.shift());
       else sorted.push(right.shift());
     }
     return [...sorted, ...left, ...right];
   }
   ```

---

## **Big O Growth Chart**

| Big O          | Name             | Examples                 |
| -------------- | ---------------- | ------------------------ |
| **O(1)**       | Constant Time    | Accessing array elements |
| **O(log n)**   | Logarithmic Time | Binary search            |
| **O(n)**       | Linear Time      | Looping through an array |
| **O(n log n)** | Log-Linear Time  | Merge sort, Quick sort   |
| **O(n²)**      | Quadratic Time   | Nested loops             |

---

## **Quick Tips**

1. Always aim for **lower Big O** for faster programs.
2. **O(log n)** is faster than **O(n)** for large inputs.
3. Sorting algorithms like Merge Sort or Quick Sort are **O(n log n)**, better than simpler sorts like Bubble Sort (**O(n²)**).

---

## **How to Improve Your Code's Complexity**

- **Avoid nested loops** to reduce **O(n²)** to **O(n)**.
- Use **Divide and Conquer** strategies for sorting/searching (**O(log n)** or **O(n log n)**).
- Leverage built-in optimized methods (e.g., `.sort()`).

---

### **Big O Summary**

| **Input Size (n)** | **O(1)** | **O(log n)** | **O(n)** | **O(n log n)** | **O(n²)** |
| ------------------ | -------- | ------------ | -------- | -------------- | --------- |
| 10                 | 1        | 4            | 10       | 20             | 100       |
| 100                | 1        | 7            | 100      | 700            | 10,000    |
| 1,000              | 1        | 10           | 1,000    | 10,000         | 1,000,000 |

---

Practice writing code and analyzing its complexity to master **Big O Notation**!

```

```
