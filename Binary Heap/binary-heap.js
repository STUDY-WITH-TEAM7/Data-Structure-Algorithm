class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parentElement = this.values[parentIdx];
      if (element > parentElement) {
        this.values[parentIdx] = element;
        this.values[idx] = parentElement;
        idx = parentIdx;
      }
    }
  }
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;
    this.bubbleDown();
    return max;
  }
  bubbleDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[idx];
    while (true) {
      let leftChildIdx = idx * 2 + 1;
      let rightChildIdx = idx * 2 + 2;
      let leftChildElement, rightChildElement;
      let swap = null;

      if (leftChildIdx < length) {
        leftChildElement = this.values[leftChildIdx];
        if (leftChildElement > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChildElement = this.values[rightChildIdx];
        if (
          (swap === null && rightChildElement > element) ||
          (swap !== null && rightChildElement > leftChildElement)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}
