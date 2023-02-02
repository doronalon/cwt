export interface ListNode {
    key: string;
    value: string;
    prev?: ListNode;
    next?: ListNode;
}

export class LinkedList {
    head?: ListNode;
    tail?: ListNode;

    add(key: string, value: string): ListNode {
        let newNode: ListNode = {
            key,
            value
        };
        if (!this.head) {
            this.head = newNode;
            return newNode;
        }
        let head = this.head;
        this.head = newNode;
        this.head.prev = head;
        head.next = newNode;
        if (!this.tail) {
            this.tail = head;
        }
        return newNode;
    }

    promote(node: ListNode): void {
        if (this.head === node) {
            return;
        }
        let oldHead = this.head;
        oldHead.next = node;

        if (node.prev) {
            node.prev.next = node.next;
        } else {
            this.tail = node.next;
        }
        if (node.next) node.next.prev = node.prev;

        node.prev = oldHead;

        node.next = undefined;

        this.head = node;
    }

    removeTail() :void {
        if(this.head) {
            if (!this.tail) {
                let head = this.head;
                this.head = head.next;
                this.head.prev = undefined;
                head.next = undefined;
                return;
            }
            let tail = this.tail;

            this.tail = tail.next;
            this.tail.prev = undefined;
            tail.next = undefined;
        }
    }

    //for testing
    private getHead(): ListNode {
        return this.head
   }
}