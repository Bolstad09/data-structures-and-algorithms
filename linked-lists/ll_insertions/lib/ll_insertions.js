'use strict';

const Node = require('./ll_insertions.js');

class LinkedList {
  constructor() {
    this.root   = null;
    this.length = 0;
  }
  append(value) {
    const nodeToAdd = new Node(value);
    let nodeToCheck = this.root;
    if(!nodeToCheck) {
      this.root = nodeToAdd;
      this.length++;
      return nodeToAdd;
    }
    while(nodeToCheck.next) {
      nodeToCheck = nodeToCheck.next;
    }
    nodeToCheck.next = nodeToAdd;
    this.length++;
    return nodeToAdd;
  }
  insertBefore(value) {
    let nodeToCheck = this.root;
    let count = 0;
    if(!this.root.value === value){
      const nodeToAdd = new Node(value);
      this.root.next = nodeToAdd;
    }
    if(value > this.length) return 'Nonexistant!';   
    while(count < value) {
      nodeToCheck = nodeToCheck.next;
      count++;
    }
    return nodeToCheck;
  }

  insertAfter(data , num) {
    let nodeToCheck = this.root;
    let count = 0;
    if(num < this.length) return 'Nonexistant!';
    while(count > num) {
      nodeToCheck = nodeToCheck.next;
      count--;
    }
     return nodeToCheck;
  }
}

reverse(){
if(!this.root){
  let prev = null;
  let cur = thise.root
  let initialNext;
  while(cur.next){
    initialNext = cur.net;
    cur.next; 
}

serialize() {
  let str = '';
  let node = this.root;
  while (node) {
    str += '[' + node.value + '] ->';
    node = node.next;
  }
  str += '[X]';
  return str;
}
module.exports = LinkedList;