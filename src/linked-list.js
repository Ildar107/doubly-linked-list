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
            this._tail = newNode;
        }
        else
        {
            this._tail.next = newNode;
            newNode.prev = this._tail;
            this._tail = newNode;
        }  

        this.length++;    
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        var findNode = this._head;
        if(index > this.length)
            return;
        for(let i = 0; i <= this.length && i !== index; i++)
        {
            findNode = findNode.next;
        }

        return findNode.data;
    }

    insertAt(index, data) {
        var findNode = this._head;
        if(index > this.length)
            return;
        for(let i = 0; i <= this.length && i !== index; i++)
        {
            findNode = findNode.next;
        }
        var newNode = new Node(data, findNode.prev, findNode);
        if( this._head === this._tail)
        {
            this._head = newNode;
            this._tail = newNode;
            return this;
        }
        findNode.prev.next = newNode;
        findNode.prev = newNode;
        return this;
    }

    isEmpty() {
        return this._head.next === null && this._head.data === null;
    }

    clear() {
        this._head = new Node();
        this._tail = this._head;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        
        var findNode = this._head;
        if(index > this.length)
            return this;
        for(let i = 0; i < this.length && i !== index; i++)
        {
            findNode = findNode.next;
        }

        if(findNode.prev === null)
        {
            if(this.length < 2)
            {
                this.clear();
            }
            else
            {
                this._head = findNode.next;
                this._head.prev = null;
            }
            
        }
        else if(findNode.next === null)
        {
            this._tail = findNode.prev;
            this._tail.next = null;
        }
        else 
        {    
            findNode.prev.next = findNode.next;
            findNode.next.prev = findNode.prev;
        }
        this.length--;
        return this;
    }

    reverse() {
        if(this.isEmpty())
            return;
        var node = this._head;
        for(var i = 0; i < this.length; i++)
        {
            let temp = node.prev;
            node.prev = node.next;
            node.next = temp;
            node = node.prev;
        }
        let temp = this._head;
        this._head = this._tail;
        this._tail = temp;
        return this;
    }

    indexOf(data) {
        if(this.isEmpty())
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
