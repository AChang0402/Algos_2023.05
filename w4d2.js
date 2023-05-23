/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
	constructor() {
		this.items = [];
	}

	/**
	 * Adds a new given item to the back of this queue.
	 * - Time: O(1) constant.
	 * - Space: O(1) constant.
	 * @param {any} item The new item to add to the back.
	 * @returns {number} The new size of this queue.
	 */
	enqueue(item) {
		this.items = [...this.items,item]
		return this.items.length
	}

	/**
	 * Removes and returns the first item of this queue.
	 * - Time: O(n) linear, due to having to shift all the remaining items to
	 *    the left after removing first elem.
	 * - Space: O(1) constant.
	 * @returns {any} The first item or undefined if empty.
	 */
	dequeue() {
		const bam = this.items[0]
		this.items = this.items.slice(1)
		return bam
	}

	/**
	 * Retrieves the first item without removing it.
	 * - Time: O(1) constant.
	 * - Space: O(1) constant.
	 * @returns {any} The first item or undefined if empty.
	 */
	front() {
		return this.items[0]
	}

	/**
	 * Returns whether or not this queue is empty.
	 * - Time: O(1) constant.
	 * - Space: O(1) constant.
	 * @returns {boolean}
	 */
	isEmpty() {
		return this.items.length === 0
	}

	/**
	 * Retrieves the size of this queue.
	 * - Time: O(1) constant.
	 * - Space: O(1) constant.
	 * @returns {number} The length.
	 */
	size() {
		return this.items.length
	}
}

/* Rebuild the above class using a linked list instead of an array. */

class QueueNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListQueue {
    constructor() {
        this.head = null;
        this.count = 0;
    }

	isEmpty(){
		return this.head === null
	}

	enqueue(item){
		const newNode = new QueueNode(item)
		if(this.isEmpty()){
			this.head = newNode
			this.count = 1
		} else {
			const runner = this.head
			while(runner.next != null){
				runner = runner.next
			}
			runner.next = newNode
			this.count++
		}
		return this.count
	}

	dequeue(){
		if (this.isEmpty()){
			return undefined
		} else {
			const firstItem = this.head
			this.head = this.head.next
			return firstItem
		}
	}

	front(){
		if (this.isEmpty()){
			return undefined
		} else {
			return this.head
		}
	}

	size(){
		return this.count
	}
}