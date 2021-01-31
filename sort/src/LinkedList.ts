class Node {
  next: Node | null = null; 

  constructor(public data: number) {}
}

export class LinkedList {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(1);

    if (!this.head) {
      this.head = node;
      return;
    }

    // Locate the current tail
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length(): number {
    // Empty list
    if (!this.head) {
      return 0;
    }

    let node = this.head;
    let totalNodes = 1; // Count the head
    while(node.next) {
      totalNodes++;
      node = node.next;
    }
    return totalNodes;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }

    let currentIndex = 0;
    let node: Node | null = this.head;
    while(node) {
      if (currentIndex === index) {
        return node;
      }
      currentIndex++;
      node = node.next;
    }

    throw new Error('Index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty');
    }
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  print(): void {
    if (!this.head) {
      return
    }

    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}

