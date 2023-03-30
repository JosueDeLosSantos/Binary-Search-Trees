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

function noDups(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

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

export function Dleaf(v, tree) {
  const father = parent(v, tree);
  const child = find(v, tree);

  if (father == child) {
    if (father.left == null && father.right == null) tree.data = null;

    if (father.left != null && father.right == null) {
      tree.data = tree.left.data;
      tree.left = tree.left.left;
    }

    if (father.left == null && father.right != null) {
      tree.data = tree.right.data;
      tree.right = tree.right.right;
    }

    if (father.left != null && father.right != null) {
      tree.data = tree.left.data;
      tree.left = tree.left.left;
    }
  } else {
    if (child.right == null && child.left == null) {
      if (father.right.data == v) {
        father.right = null;
      } else if (father.left.data == v) {
        father.left = null;
      }
      // if (father.left.data == v) father.left = null;
    }

    if (child.right != null && child.left == null) {
      child.data = child.right.data;
      child.right = null;
    }

    if (child.right != null && child.left != null) {
      let newData = lastLeft(child.right);
      let newDataFather = parent(newData.data, child.right);
      child.data = newData.data;
      newDataFather.left = null;
    }
  }
}
