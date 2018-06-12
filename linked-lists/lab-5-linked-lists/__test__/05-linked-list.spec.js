'use strict';


const LinkedList = require('../lib/05-linked-list.js');

describe('Lab 05 Linked List Module', ()=> {
  

  it('should create a new list with a head of null', () => {
    let newList = new LinkedList;

    expect(newList.head).toBeNull();
  });


  it('append should create a new head if head is null', () => {
    let newList = new LinkedList;
    newList.append(2);
    expect(newList.head.value).toBe(2);
  });


  it('append should create a new node if the head exists', () => {
    let newList = new LinkedList;
    newList.append(1);
    newList.append(2);
    newList.append(3);
    newList.append(4);
    expect(newList.head.next.next.next.value).toBe(4);
  });


  it('the last node should have a next of null', () => {
    let newList = new LinkedList;
    newList.append(1);
    newList.append(2);
    newList.append(3);
    newList.append(4);
    expect(newList.head.next.next.next.next).toBeNull();
  });


  it('prepend should create a a new node if there is no head', () => {
    let newList = new LinkedList;
    newList.prepend(1);
    expect(newList.head.value).toBe(1);
  });


  it('prepend should create a a new head if there is already a head ', () => {
    let newList = new LinkedList;
    newList.append(1);
    newList.append(2);
    newList.append(3);
    newList.prepend(4);
    expect(newList.head.value).toBe(4);
  });


  it('reverse should do nothing if list only contains the head', () => {
    let newList = new LinkedList;
    newList.append(1);
    newList.reverse();
    expect(newList.head.value).toBe(1);
  });


  it('reverse the list when there are actual values', () => {
    let newList = new LinkedList;
    newList.append(1);
    newList.append(2);
    newList.append(3);
    newList.reverse();
    expect(newList.head.value).toBe(3);
    expect(newList.head.next.next.next).toBeNull();
  });


  it('remove() should leave an empty list if theres only a head.', () => {
    let newList = new LinkedList;
    newList.append(4);
    newList.remove(1);
    expect(newList.head).toBeNull();
  });


  it('remove() should find the node at the given value and remove it', () => {
    let newList = new LinkedList;
    newList.append(1);
    newList.append(2);
    newList.append(3);
    newList.remove(1);
    expect(newList.head.next).toBe(2);
  });


  it('serialize() should take the list and write a string, if linked list is empty return x', () => {
    let newList = new LinkedList;
    expect(newList.serialize()).toBe('x');
  });


  it('serialize() should take the list and write a string, even for one node', () => {
    let newList = new LinkedList;
    newList.append(40);
    expect(newList.serialize()).toBe('40');
  });

  it('serialize() should take the list and write a string', () => {
    let newList = new LinkedList;
    newList.append(1);
    newList.append(5);
    expect(newList.serialize()).toBe('1 5');
  });
});
