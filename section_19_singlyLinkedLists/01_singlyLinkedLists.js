document.addEventListener("DOMContentLoaded", () => {
  let ul = document.getElementById("linked")
  let li = document.createElement("li")
  li.innerText = "01_singlyLinkedLists.js"
  ul.append(li);
});
/*
========================================
Singly Linked Lists - Intro
========================================
+ An ordered data structure - has HEAD, TAIL, LENGTH properties
+ NOT INDEXED - consists of nodes, which has a value and points to/ references the next node (or null if it's the final node)
  + No indices gives SLLs an advantage over arrays when it comes to insertion/ deletion --> you don't have to reindex

head                  tail, length = 4
[4] -> [6] -> [8] -> [2]

+ Random access is not allowed - To access a node, you need to start at the head and traverse it until you get the node you want
+ Called a SINGLY LINKED LIST because each node is connected unidirectionally to the next node
*/
/*
====================
Nodes
====================
+ Linked Lists are collections of nodes, so define a Node class

+ Needs to store data and a reference to the next node
*/

class Node {
  constructor(val){
    this.val = val, 
    this.next = null
  }
}

/*
_____ Singly Linked List and methods _____ 

====================
PSEUDO CODE for .push() method
====================
___ Accept a value
___ Create a new Node using that value
___ If there isn't a head, set the head and the tail equal to that new node
___ Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
___ increment the length by one

*/
class SinglyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0
  }

  push(val){
    let newNode = new Node(val)

    if (!this.head && !this.tail){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return newNode;
  }

}

// let firstNode = new Node("Hi")
// firstNode.next = new Node("there")
// firstNode.next.next = new Node(",")
// firstNode.next.next.next = new Node("how")
// firstNode.next.next.next.next = new Node("are")
// firstNode.next.next.next.next.next = new Node("you")
// firstNode.next.next.next.next.next.next = new Node("?")

