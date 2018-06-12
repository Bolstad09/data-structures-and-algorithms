'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (!this.head) {
      this.head = new Node(value);
    } else {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      node.next = new Node(value);
    }
    // BIG O = O(n)
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.head = newNode;
      this.head.next = this.head;
    }
    // BIG O = O(1)
  }

  reverse() {
    if (this.head.next === null) {
      return this;
    }
    else {
      let curr = this.head;
      let prev = null;
      while (curr.next) {
        let initialNext = curr.next;
        curr.next = prev;
        prev = curr;
        curr = initialNext;
      }
      this.head = curr;
      this.head.next = prev;
    }
    // BIG O = O(n)
  }

  remove(offset) {
    let curr = this.head;
    let count = 1;
    if (offset === 1) {
      this.head = null;
    } while (curr.next) {
      count++;
      if (count === offset) {
        curr.next = curr.next.next;
      } else if (curr.next.next === null) {
        curr.next = null;
      } else {
        curr = curr.next;
      }
    }
    // BIG O = O(n)
  }

  serialize() {
    let str = '';
    let node = this.head;
    if (!node) {
      return 'x';
    }
    while (node.next) {
      str += `${node.value}`;
      node = node.next;
    }
    str += `${node.value}`;

    return str;
    // BIG O = O(n)
  }
}
module.exports = LinkedList;