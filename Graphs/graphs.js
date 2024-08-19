// 인접 리스트로 구현
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  // vertex 추가
  addVertex(vertex) {
    // 이미 존재하는 vertex라면 값을 덮어쓰지 않기 위해.
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  // edge 추가
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  // edge 삭제
  removeEdge(vertex1, vertex2) {
    // filter를 사용.
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  // vertex 삭제
  removeVertex(vertex) {
    // 1. 삭제하고자 하는 vertex의 배열 요소를 완전히 지우기 위해 while문과 pop 메서드를 사용하여 요소를 제거.
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      // 2. 지우고자 하는 vertex가 연결되어 있던 다른 vertex와의 관계도 끊어줘야 하기 때문에 내부에서 removeEdge메서드를 호출한다.
      this.removeEdge(vertex, adjacentVertex);
    }
    // 3. 빈 배열까지 완전히 삭제.
    delete this.adjacencyList[vertex];
  }
}
