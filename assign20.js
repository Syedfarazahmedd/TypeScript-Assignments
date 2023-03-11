"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    add(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        }
        else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    print() {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
}
const languages = new LinkedList();
languages.add("Urdu");
languages.add("English");
languages.add("Roman");
languages.add("Greek");
languages.add("Latin");
languages.print();
//# sourceMappingURL=assign20.js.map