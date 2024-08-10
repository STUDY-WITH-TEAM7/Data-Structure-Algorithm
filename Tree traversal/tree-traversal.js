class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  // BFS
  BFS() {
    // 큐에 저장하는 방식
    // 때문에 큐를 구현하기 위한 배열을 하나 만들고, 실제로 방문한 노드를 출력해야 하므로 visited 배열도 만듦.
    let queue = [];
    let visited = [];
    let node = this.root;
    // 1. 현재 루트를 큐에 push (루트 노드부터 시작하지 않을 수 있으니까 해당 부분은 옵션임.)
    queue.push(this.root);
    // 2. 큐에 노드가 있다면 visited 배열에 shift해줌.
    while (queue.length) {
      // 3. 그리고 이 shift된 노드의 왼쪽과 오른쪽 노드를 순회해야 하기 때문에 shift된 노드를 변수로 설정해서 재할당함.
      node = queue.shift();
      // node의 value값을 push해도 됨.
      visited.push(node);
      // 4. shift된 노드의 왼쪽과 오른쪽 노드를 큐에 push함.
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visited;
  }
  // DFS(Pre-order Traversal)
  // 현재 노드를 기점으로 현재 노드를 먼저 방문 후 왼쪽의 노드를 모두 순회하고 오른쪽 노드를 모드 순회함.
  // 재귀함수를 사용하여 구현.
  DFSPreOrder() {
    // 1. 결과값을 반환해야 하므로 visited 배열 선언.
    let visited = [];
    // 2. 헬퍼 함수를 만들어서 왼쪽과 오른쪽 노드를 가장 깊은 노드까지 순회할 수 있도록 구현함.
    function traversal(node) {
      // 2-1. 현재 방문한 node를 visited 배열에 push함.
      visited.push(node.value);
      // 2-2. 왼쪽 노드가 있는지 확인하고 왼쪽을 모두 순회함.
      if (node.left) traversal(node.left);
      // 2-3. 그리고 오른쪽 노드가 있는지 확인하고 오른쪽 노드를 모두 순회함.
      if (node.right) traversal(node.right);
    }
    // 3. 헬퍼 함수에 시작할 노드를 넣어서 호출함.
    traversal(this.root);
    // 4. 결과값 반환
    return visited;
  }

  // DFS(In-order Traversal)
  // 현재 노드를 기점으로 왼쪽 노드를 모두 순회하고 현재 노드를 방문한 후, 오른쪽 노드를 모두 순회한다.
  // 재귀함수를 사용하여 구현.
  DFSInOrder() {
    // 1. 방문한 노드의 결과값을 리턴하기 위한 배열 선언.
    let visited = [];
    // 2. 헬퍼 함수를 사용해서 재귀적으로 순회함.
    function traversal(node) {
      // 2-1. 왼쪽 노드가 있는지 확인하고 왼쪽 노드를 모두 순회함.
      if (node.left) traversal(node.left);
      // 2-2. 이후 다시 현재 노드를 방문(push)함.
      visited.push(node.value);
      // 2-3. 오른쪽 노드가 있는지 확인하고 오른쪽 노드를 모두 순회함.
      if (node.right) traversal(node.right);
    }
    // 3. 헬퍼 함수에 시작할 노드를 넣어서 호출함.
    traversal(this.root);
    // 4. 결과값 반환
    return visited;
  }

  // DFS(Post-order Traversal)
  // 현재 노드를 기점으로 왼쪽 노드를 모두 순회하고 오른쪽 노드를 모두 순회한다. 이후 현재 노드를 방문한다.
  // 재귀함수를 사용하여 구현.
  DFSPostOrder() {
    // 1. 방문한 노드의 결과값을 리턴하기 위한 배열 선언.
    let visited = [];
    // 2. 헬퍼 함수를 사용해서 재귀적으로 순회함.
    function traversal(node) {
      // 2-1. 왼쪽 노드가 있는지 확인하고 왼쪽 노드를 모두 순회함.
      if (node.left) traversal(node.left);
      // 2-2. 오른쪽 노드가 있는지 확인하고 오른쪽 노드를 모두 순회함.
      if (node.right) traversal(node.right);
      // 2-3. 이후 다시 현재 노드를 방문(push)함.
      visited.push(node.value);
    }
    // 3. 헬퍼 함수에 시작할 노드를 넣어서 호출함.
    traversal(this.root);
    // 4. 결과값 반환
    return visited;
  }
}
