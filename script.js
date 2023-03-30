import * as merger from "./merger.js";

const listArr = [120, 55, 3, 6, 11, 85, 97, 45, 19, 2, 1, 8, 9, 11];
// const listArr = [1];

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

console.log(sampleArr);

//merger.Dleaf(1, sampleArr);

const sampleObject = {
  house: "big",
  car: { small: "red", medium: "blue", big: "black" },
  country: "Dominican Republic",
};

const father = {
  name: "josue",
  stuff: sampleObject,
};

console.log(father.propertyIsEnumerable("car"));

console.log(merger.find(55, sampleArr));
