// Sort array
export function mergeArr(array) {
  if (array.length <= 1) return array;

  const half = Math.ceil(array.length / 2);
  const firstHalf = mergeArr(array.slice(0, half)); // ordered list
  const secondHalf = mergeArr(array.slice(half)); //ordered list
  // Merge
  return fixEquivalent(firstHalf, secondHalf); // combined ordered list
}

// this function combines both arrays in the right order
function fixEquivalent(arr1, arr2) {
  const arr3 = [];

  while (arr1[0] && arr2[0]) {
    arr1[0] < arr2[0] ? arr3.push(arr1.shift()) : arr3.push(arr2.shift());

    if (arr1[0] == arr2[0]) {
      arr3.push(arr1.shift());
      arr3.push(arr2.shift());
    }
  }

  if (arr1.length == 0 && arr2.length != 0) {
    while (arr2.length != 0) {
      arr3.push(arr2.shift());
    }
  }

  if (arr2.length == 0 && arr1.length != 0) {
    while (arr1.length != 0) {
      arr3.push(arr1.shift());
    }
  }

  if (arr2.length == 0 && arr1.length == 0) return noDups(arr3);
}

// remove duplicates
function noDups(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

// accepts a value and returns the node with the given value.
export function find(leaf, tree) {
  let answer = null;
  if (tree.data == leaf) {
    answer = tree;
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

// accepts a value to insert
export function insert(v, tree) {
  if (v == tree.data) {
    return;
  } else {
    if (v < tree.data) {
      if (tree.left == null) {
        tree.left = { data: v, left: null, right: null };
      } else {
        insert(v, tree.left);
      }
    } else {
      if (tree.right == null) {
        tree.right = { data: v, left: null, right: null };
      } else {
        insert(v, tree.right);
      }
    }
  }
}

// accepts a value and returns the parent of the node with the given value.
export function parent(leaf, tree) {
  let answer = null;
  if (tree.data == leaf) {
    answer = tree;
    return answer;
  } else {
    if (tree.left != null) {
      if (tree.left.data == leaf) return tree;
      const left = parent(leaf, tree.left);
      if (left) {
        answer = left;
        return answer;
      } else {
        answer = null;
      }
    }

    if (tree.right != null) {
      if (tree.right.data == leaf) return tree;
      const right = parent(leaf, tree.right);
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

function lastLeft(tree) {
  let answer = null;
  if (tree.left == answer) {
    answer = tree;
    return answer;
  } else {
    answer = lastLeft(tree.left);
    return answer;
  }
}

function lastRight(tree) {
  let answer = null;
  if (tree.right == answer) {
    answer = tree;
    return answer;
  } else {
    answer = lastRight(tree.right);
    return answer;
  }
}

// accepts a value to delete
export function Dleaf(v, tree) {
  const father = parent(v, tree);
  const child = find(v, tree);

  if (father == child) {
    if (father.left == null && father.right == null) {
      tree.data = null;
    }

    if ((child.left != null || child.left == null) && child.right != null) {
      let newData = lastLeft(child.right);
      let newDataFather = parent(newData.data, child.right);
      child.data = newData.data;
      if (child.right.left == null) {
        child.right = child.right.right;
      } else {
        newDataFather.left = newData.right;
      }
      return;
    }

    if (child.left != null && child.right == null) {
      let newData = lastRight(child.left);
      let newDataFather = parent(newData.data, child.left);
      child.data = newData.data;
      if (child.left.right == null) {
        child.left = child.left.left;
      } else {
        newDataFather.right = newData.left;
      }
      return;
    }
  } else {
    if (child.right == null && child.left == null) {
      if (father.right != null) {
        if (father.right.data == v) father.right = null;
      }

      if (father.left != null) {
        if (father.left.data == v) father.left = null;
      }
      return;
    }

    if ((child.left != null || child.left == null) && child.right != null) {
      let newData = lastLeft(child.right);
      let newDataFather = parent(newData.data, child.right);
      child.data = newData.data;
      if (child.right.left == null) {
        child.right = child.right.right;
      } else {
        newDataFather.left = newData.right;
      }
      return;
    }

    if (child.right == null && child.left != null) {
      let newData = lastRight(child.left);
      let newDataFather = parent(newData.data, child.left);
      child.data = newData.data;
      if (child.left.right == null) {
        child.left = child.left.left;
      } else {
        newDataFather.right = newData.left;
      }
      return;
    }
  }
}

//returns the tree nodes in level order
export function levelOrder(root) {
  let queue = [];
  let result = [];
  queue.push(root);
  while (queue.length > 0) {
    result.push(queue[0].data);
    if (queue[0].left != null) queue.push(queue[0].left);
    if (queue[0].right != null) queue.push(queue[0].right);
    queue.shift();
  }
  return result;
}

// returns the nodes in preorder depth-first order
export function preorder(root) {
  let result = [];

  function fPreOrder(root) {
    if (root == null) {
      return;
    } else {
      result.push(root.data);
      fPreOrder(root.left);
      fPreOrder(root.right);
    }
  }
  fPreOrder(root);
  return result;
}

// returns the nodes in inorder depth-first order
export function inorder(root) {
  let result = [];

  function fInorder(root) {
    if (root == null) {
      return;
    } else {
      fInorder(root.left);
      result.push(root.data);
      fInorder(root.right);
    }
  }
  fInorder(root);
  return result;
}

// returns the nodes in postorder depth-first order
export function postorder(root) {
  let result = [];

  function fPostorder(root) {
    if (root == null) {
      return;
    } else {
      fPostorder(root.left);
      fPostorder(root.right);
      result.push(root.data);
    }
  }
  fPostorder(root);
  return result;
}

// accepts a node and returns its height
export function height(v, BST) {
  const root = find(BST.data, BST);
  // converts the tree into array
  const arr = levelOrder(root);
  // calculate the square root of the array's length
  const rawSqrt = Math.sqrt(arr.length);
  // rounds up and returns the smaller integer greater than or equal to a given number
  const heightNum = Math.ceil(rawSqrt) + 1;
  const depthNum = depth(v, BST);

  if (heightNum == depthNum) {
    return depthNum;
  } else {
    const optionalR = heightNum - depthNum;
    if (optionalR >= 1) {
      return optionalR;
    } else {
      return 1;
    }
  }
}

// accepts a node and returns its depth
export function depth(v, BST) {
  let levels = 0;

  function findDepth(leaf, tree) {
    let answer = null;
    if (tree.data == leaf) {
      levels += 1;
      return levels;
    } else {
      if (tree.left != null) {
        const left = findDepth(leaf, tree.left);
        if (left) {
          levels += 1;
          return levels;
        }
      }

      if (tree.right != null) {
        const right = findDepth(leaf, tree.right);
        if (right) {
          levels += 1;
          return levels;
        }
      }

      if (answer == null) {
        return levels;
      }
    }
  }

  return findDepth(v, BST);
}
