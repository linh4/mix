// Merge two sorted linked lists and return it as a new list.
// The new list should be made by splicing together the nodes of the first two lists.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function(l1, l2) {
    let res = new ListNode();
    let tail = res;

    while(l1 && l2){
        if(l1.val < l2.val){
            tail.next = new ListNode(l1.val);
            l1 = l1.next;
        }else{
            tail.next = new ListNode(l2.val);
            l2= l2.next;
        }
        tail = tail.next;
    }

    tail.next = l1 ? l1: l2;

    return res = res.next;

};

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4
