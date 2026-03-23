const sumTwoLargest = (arr) => {
  if (arr.length < 2) return null;

  const sortArray = [...arr].sort((a, b) => b - a);

  return sortArray[0] + sortArray[1];
};

// Case 1 (example)
console.log(sumTwoLargest([1, 4, 2, 3, 5]));
// 9

// Case 2
console.log(sumTwoLargest([-1, -2, -3]));
// -3

// Case 3 (duplicate max)
console.log(sumTwoLargest([5, 5, 1]));
// 10

// Case 4 (empty)
console.log(sumTwoLargest([]));
// null

// Case 5 (1 phần tử)
console.log(sumTwoLargest([5]));
// null
