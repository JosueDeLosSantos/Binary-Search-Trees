import * as merger from "./merger.js";

const listArr = [
  7, 98, 55, 3, 6, 11, 85, 97, 19, 2, 1, 8, 4, 9, 11, 13, 18, 22, 41, 20, 5, 17,
  16, 15, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
];
//const listArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
//console.log(merger.insert(10, sampleArr));

prettyPrint(sampleArr);

// accepts a value to delete
//merger.Dleaf(10, sampleArr);

prettyPrint(sampleArr);

//returns the tree nodes in level order
console.log(merger.levelOrder(sampleArr));

// preorder depth-first order
console.log(merger.preorder(sampleArr));

// inorder depth-first order
console.log(merger.inorder(sampleArr));

// postorder depth-first order
console.log(merger.postorder(sampleArr));

// accepts a node and returns its height
console.log(merger.height(2, sampleArr));

// accepts a node and returns its depth
console.log(merger.depth(2, sampleArr));
