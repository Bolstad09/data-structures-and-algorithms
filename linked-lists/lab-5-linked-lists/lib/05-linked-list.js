














append(value) {
  if (!this.root) {
    this.root = new ListNode(value);

  } else {
    let node = this.root;
    while (node.next) {
      node = node.next;
    }
    node.next = new ListNode(value);
  };
};
// 84

reverse(value){





  let prev = null;
  let cur = this.root;
  let initialNext;

  while (cur.next){
    initialNext = cur.next;
    cur.next = prev;
    prev = cur
    cur =initialNext;
  }
}

// 102
serialize(){

  let str = '';
  let node = this.root;
  while (node) {
    str += '[' + node.value + '] ->';
    node = node.next;
   
  }
str += '[X]';
return str;
}

deserialize(str){


}
prepend(value) {
  const newNode = new ListNode(value);
  if (!this.root) {
    this.root = newNode;

  } else {
    newNode.next = this.root;
    this.root = newNode;
  };
};

// line 192
insertBefore(value, newValue){
  let node = new ListNode(newValue);

  let curret = this.root;

  if (this.root.value === value) {
    this. root




    //  207
    break;
  }else {
    current = current.next;
  }
  }

  node.next = current.next;
  current.next = node;
}

insertAfter(value, newValue){
  let node = new ListNode(newValue);
  let current = this.root;

  while(current){
    if(current.value === value) {
      node.next = current.next;
      current.next = node;
      break;
    }
    current = current.next;
  }
}

