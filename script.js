import * as merger from "./merger.js";

/* 1. Create a binary search tree from an array of random numbers. You can 
create a function that returns an array of random numbers every time you 
call it, if you wish. */

function random100() {
  let result = [];
  for (let i = 0; i <= 99; i += 1) {
    // Returns a random integer from 0 to 100 on every cycle
    let ramNum = Math.floor(Math.random() * 100);
    if (ramNum != 0) {
      result.push(ramNum);
    } else {
      ramNum++;
      result.push(ramNum);
    }
  }
  return result;
}

const randomArr = random100();

const Arr = merger.mergeArr(randomArr);

console.log(Arr);

export const prettyPrint = (node, prefix = "", isLeft = true) => {
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

const sampleArr = merger.sortedArrayToBST(Arr, 0, Arr.length - 1);

prettyPrint(sampleArr);

/* 2. Confirm that the tree is balanced by calling isBalanced */
console.log(merger.isBalanced(sampleArr)); // true

/* 3. Print out all elements in level, pre, post, and in order */

// level
console.log(merger.levelOrder(sampleArr));

// pre
console.log(merger.preorder(sampleArr));

// post
console.log(merger.postorder(sampleArr));

// in order
console.log(merger.inorder(sampleArr));

/* 4. Unbalance the tree by adding several numbers > 100 */

merger.insert(101, sampleArr);
merger.insert(102, sampleArr);
merger.insert(103, sampleArr);
merger.insert(104, sampleArr);

/* 5. Confirm that the tree is unbalanced by calling isBalanced */
console.log(merger.isBalanced(sampleArr)); // false

/* 6. Balance the tree by calling rebalance */
console.log(merger.rebalance(sampleArr));

/* 7. Confirm that the tree is balanced by calling isBalanced */
console.log(merger.isBalanced(merger.rebalance(sampleArr))); // true

/* 8. Print out all elements in level, pre, post, and in order */

// level
console.log(merger.levelOrder(merger.rebalance(sampleArr)));

// pre
console.log(merger.preorder(merger.rebalance(sampleArr)));

// post
console.log(merger.postorder(merger.rebalance(sampleArr)));

// in order
console.log(merger.inorder(merger.rebalance(sampleArr)));
