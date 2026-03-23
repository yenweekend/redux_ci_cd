const getMostFrequentLengthStrings = (arr) => {
  if (!arr || arr.length === 0) return [];
  const freq = Object.groupBy(arr, (item) => item.length);

  const groups = Object.values(freq);
  const maxFequencyLength = Math.max(...groups.map((group) => group.length));

  return groups.filter((group) => group.length === maxFequencyLength).flat();
};

// Case 1 (example)
console.log(
  getMostFrequentLengthStrings(["a", "ab", "abc", "cd", "def", "gh"]),
);
// ["ab", "cd", "gh"]

// Case 2
console.log(getMostFrequentLengthStrings(["a", "bb", "ccc"]));
// ["a", "bb", "ccc"] (mỗi cái 1 lần)

// Case 3
console.log(
  getMostFrequentLengthStrings(["a", "ab", "abc", "cd", "def", "gh", "ooo"]),
);
// [ 'ab', 'cd', 'gh', 'abc', 'def', 'ooo' ] (nhiều nhóm đạt max)

// Case 4 (empty)
console.log(getMostFrequentLengthStrings([]));
// []
