import * as merger from "./merger.js";

const listArr = [120, 55, 3, 6, 11, 85, 97, 45, 19, 2, 1, 8, 9, 11];

const Arr = merger.mergeArr(listArr);

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

console.log(sampleArr);

// accepts a value and returns the node with the given value.
function find(leaf, tree) {
  let answer = null;
  if (tree.data == leaf) {
    answer = { data: tree.data, left: tree.left, right: tree.right };
    return answer;
  } else {
    if (tree.left != null) {
      const left = find(leaf, tree.left);
      if (left) {
        answer = left;
        return answer;
      } else {
        answer = null;
      }
    }

    if (tree.right != null) {
      const right = find(leaf, tree.right);
      if (right) {
        answer = right;
        return answer;
      } else {
        answer = null;
      }
    }

    if (answer == null) {
      return false;
    }
  }
}

console.log(find(1, sampleArr));
