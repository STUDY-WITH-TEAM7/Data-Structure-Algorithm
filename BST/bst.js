// node 클래스 만들기

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
  // insert 구현
  insert(value) {
    // 1. 삽입할 노드를 생성
    const newNode = new Node(value);
    // 2. 트리에 루트가 있는지 확인
    if (this.root === null) {
      // 2-1. 루트 노드가 없다면 새로 만든 노드를 루트 노드로 지정.
      this.root = newNode;
      // this를 return 해서 이하의 코드 실행하지 않도록 함.
      return this;
    }
    // 2-2. 루트 노드가 있다면 노드에 넣을 값(value)과 기존 루트의 값 비교하고 해당 자리가 비었는지 확인.
    // 이를 위해 시작 루트 노드를 저장해서 존재 여부를 확인한다. 때문에 현재 노드값을 저장할 변수를 선언해야 한다.
    let current = this.root;
    while (true) {
      //  만약 중복값을 넣는다면 undefined 반환.
      if (value === current.value) return undefined;
      // 2-2-1. 자리가 비어있고 새롭게 넣을 노드의 값이 루트 노드의 값보다 작다면 루트 노드의 왼쪽으로 삽입.
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
          // 2-2-1-1. 자리가 비어있지 않다면 또 한 번 스텝 반복.
        }
        current = current.left;

        // 2-2-2. 자리가 비어있고 새롭게 넣을 노드의 값이 루트 노드의 값보다 크다면 루트 노드의 오른쪽으로 삽입.
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
          // 2-2-2-1. 자리가 비어있지 않다면 또 한 번 스텝 반복.
        }
        current = current.right;
      }
    }
  }

  // find 구현
  find(value) {
    // 1. 루트 노드가 있는지 확인. 없으면 탐색 종료.
    if (this.root === null) return false;
    // 2. 루트 노드가 있다면 해당 노드를 current로 두고 일치하는 값을 찾았는지 확인하기 위해 found 변수 선언.
    let current = this.root;
    let found = false;
    while (current && !found) {
      // 3. 입력된 value가 루트 노드 값보다 큰지 작은지 체크
      // 3-1. 작으면 왼쪽으로 이동하고, 만약 일치하는 값이 없다면 current를 사용해서 루트 값을 바꿈
      if (value < current.value) {
        current = current.left;

        // 3-2. 크면 오른쪽으로 이동하고, 만약 일치하는 값이 없다면 current를 사용해서 루트 값을 바꿈
      } else if (value > current.value) {
        current = current.right;
      } else {
        // 4. 값을 찾았다면 true 반환.
        return true;
      }
    }
    // 5. 값을 찾지 못했다면 false 반환.
    return false;
  }
}
