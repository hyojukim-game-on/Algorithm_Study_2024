const fs = require('fs');
const root =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(root, 'utf8').toString().trim().split('\n');

const [N, A, M, B] = input.map((v) => v.split(' ').map(Number));
A.sort((a, b) => a - b);

const binarySearch = (list, target, left, right, mid) => {
  mid = Math.floor((left + right) / 2);

  if (right < left) {
    return list[mid] == target ? 1 : 0;
  }

  if (list[mid] > target) {
    right = mid - 1;
  } else {
    left = mid + 1;
  }

  return binarySearch(list, target, left, right, mid);
};

const result = B.map((v) => binarySearch(A, v, 0, A.length - 1, 0));

console.log(result.join('\n'));
