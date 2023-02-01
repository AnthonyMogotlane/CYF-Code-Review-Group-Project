# Deep Flat: use a for loop to iterate over the elements in the input array.

This function uses a for loop to iterate over the elements in the input array.
If an element is an array, it calls itself recursively to flatten that subarray.
If the element is not an array, it pushes it onto the result array.Finally, it returns the result array.


---

## Strategy

I chose to used for loop methods to solve this challenge because they're
fun to use and nice to read.

---

## Implementation

There were a few tricky things I had to figure out:
concat() & Array.isArray() 

Array.isArray() is a more robust method to check if an object is an Array as compared to using the instanceof operator, which may give unexpected results in certain situations.

Implementation strategy for the code function deepFlat(array = []):
  1) Define a variable result as an empty array to store the flattened elements of the input array.
  2) Use a for loop to iterate through the input array, starting from index 0 and ending at the last index.
  3) Within the for loop, check if the current element of the input array is an array using the Array.isArray() method.
  4) If the current element is an array, recursively call the deepFlat function on that element, and concatenate the returned result with the result array using the concat() method.
  5)If the current element is not an array, simply push it to the result array.
  6)Return the result array after the for loop has completed.
---

## Use Cases

You could use this array to sort items in a shopping application from least to
most expensive:

```js
const data = {
  name: 'John Doe',
  age: 30,
  skills: ['JavaScript', 'CSS', 'HTML', ['React', 'Vue']],
};
const flatData = deepFlat(Object.values(data));
console.log(flatData); // ['John Doe', 30, 'JavaScript', 'CSS', 'HTML', 'React', 'Vue']

```

```second js
const products = [
  { name: 'teddy bear', price: 3 },
  { name: 'milk', price: 1 },
  { name: 'light bulb', price: 2 },
  [
    { name: 'apple', price: 0.5 },
    { name: 'banana', price: 0.3 },
  ],
];
const allProducts = deepFlat(products);
const prices = allProducts.map((product) => product.price);
console.log(prices); // [3, 1, 2, 0.5, 0.3]


```

---

## Inspiration

[This article from dev.to](https://dev.to/sanchithasr/understanding-nested-arrays-2hf7/)
gave me clear understanding of nested arrays and how to play around it