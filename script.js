import * as merger from "./merger.js";

const listArr = [120, 55, 3, 6, 11, 85, 97, 45, 19, 2, 1, 8, 9, 11];

const listArr1 = merger.mergeArr(listArr);
const listArr2 = merger.noDups(listArr1);

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

const sampleArr = sortedArrayToBST(listArr2, 0, listArr2.length - 1);

console.log(sampleArr);
