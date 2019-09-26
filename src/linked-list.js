const Node = require('./node');

// class Node {
//     constructor(data = null, prev = null, next = null) {
//         this.data = data;
//         this.prev = prev;
//         this.next = next;
//     }
// }

class LinkedList {
    constructor() {
        this._head = new Node();
        this._tail = this._head;
        this.length = 0;

    }

    append(data) {
        var newNode = new Node(data);
        if(this.length === 0)
        {    
            this._head = newNode;
            this._tail = new Node();
            this._head.next = this._tail;
            this._tail.prev = this._head.next;
        }
        else
        {
            this._tail.prev.next = newNode;
            newNode.prev = this._tail.prev;
            this._tail = newNode;
        }  

        this.length++;    
    }

    head() {
        return this._head;
    }

    tail() {
        return this._tail;
    }

    at(index) {
        var findNode = this._head;
        if(index > this.length)
            return;
        while(index !== this.length)
        {
            findNode = findNode.next;
        }
        return findNode.data;
    }

    insertAt(index, data) {
        var findNode = this._head;
        if(index > this.length)
            return;
        while(index !== this.length)
        {
            findNode = findNode.next;
        }
        findNode.data = data;
    }

    isEmpty() {
        return this._head === this._tail;
    }

    clear() {
        this._head = new Node();
        this._tail = this._head;
    }

    deleteAt(index) {
        var findNode = this._head;
        if(index > this.length || this.isEmpty)
            return;
        while(index !== this.length)
        {
            findNode = findNode.next;
        }

        if(findNode.prev === null)
            this._head = findNode.next;
        else if(findNode.next === null)
            this._tail = findNode.prev;
        else 
            findNode.prev = findNode.next;
    }

    reverse() {
        if(this.isEmpty)
            return;
        var node = this._head.next;
        for(var i = 1; i < this.length - 1; i++)
        {
            let temp = node.prev;
            node.prev = node.next;
            node.next = temp;
            node = node.prev;
        }
        let temp2 = this._tail;
        this._tail = this._head;
        this._head = temp2;
        this._tail.prev = this._tail.next;
        this._tail.next = null;
        this._head.next = this._head.prev;
        this._head.prev = null;
    }

    indexOf(data) {
        if(this.isEmpty)
            return -1;
        var node = this._head;
        for(var i = 0; i < this.length; i++)
        {
            if(node.data === data)
                return i;
            node = node.next;
        }

        return -1;
    }
}

module.exports = LinkedList;
