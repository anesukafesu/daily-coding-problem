/** Swaps every two nodes of a linked list in place.
  @param head {Node} The head of the linked list.
  @returns {Node} The head of the swapped linked list.
*/
function swapNodes(head) {
  let currentNode = head;

  while (currentNode !== null) {
    if (currentNode.next === null) break;
    
    const nextNode = currentNode.next;

    // Swap the two values
    const temp = nextNode.value;
    nextNode.value = currentNode.value;
    currentNode.value = temp;

    // Move to the next of the next node
    currentNode = nextNode.next;
  }
  
  return head;
}

class Node {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}
  
