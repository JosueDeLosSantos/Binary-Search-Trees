import * as merger from "./merger.js";

const listArr = [
  98, 55, 3, 6, 11, 85, 97, 19, 2, 1, 8, 4, 9, 11, 13, 18, 22, 41, 20, 5, 17,
  16, 15, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
];
// const listArr = [1, 2, 3];

const Arr = merger.mergeArr(listArr);

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

function Node(data, left = null, right = null) {
  return { data, left, right };
}

function sortedArrayToBST(arr, start, end) {
  /* Base Case */
  if (start > end) {
    return null;
  }
  /* Get the middle element and make it root */
  const mid = parseInt((start + end) / 2);
  const node = Node(arr[mid]);
  /* Recursively construct the left subtree and make it
     left child of root */
  node.left = sortedArrayToBST(arr, start, mid - 1);
  /* Recursively construct the right subtree and make it
     right child of root */
  node.right = sortedArrayToBST(arr, mid + 1, end);
  return node;
}

const sampleArr = sortedArrayToBST(Arr, 0, Arr.length - 1);

prettyPrint(sampleArr);

// accepts a value and returns the node with the given value.
console.log(merger.find(1, sampleArr));

// accepts a value to insert
/* console.log(merger.insert(10, sampleArr));
console.log(merger.insert(121, sampleArr));
console.log(merger.insert(119, sampleArr)); */

prettyPrint(sampleArr);

//merger.Dleaf(1, sampleArr);

console.log(merger.find(300, sampleArr));

console.log(merger.parent(13, sampleArr));
console.log(merger.find(13, sampleArr));

merger.Dleaf(9, sampleArr);
merger.Dleaf(11, sampleArr);
merger.Dleaf(13, sampleArr);
merger.Dleaf(15, sampleArr);
merger.Dleaf(16, sampleArr);
merger.Dleaf(17, sampleArr);
merger.Dleaf(18, sampleArr);
//merger.Dleaf(19, sampleArr);
//merger.Dleaf(4, sampleArr);

prettyPrint(sampleArr);

console.log(sampleArr);
