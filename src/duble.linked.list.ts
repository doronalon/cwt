class LinkedListNode {
    public value: string;
    public next: LinkedListNode
    public prev: LinkedListNode
}

export class DoublyLinkedList {
    private head: LinkedListNode;
    private tail: LinkedListNode;

    private size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    public isEmpty(): boolean {
        return this.size <= 0;
    }

    public getLast(): string {
        if (this.tail != null) {
            return this.tail.value;
        }
        return null;
    }

    public addFirst(value: string): void {
        if (this.isEmpty()) {
            let tmp = new LinkedListNode();
            tmp.value = value;
            this.head = tmp;
            this.tail = tmp;
            this.size++;
        } else {
            let tmp = new LinkedListNode();
            tmp.next = this.head;
            tmp.prev = null;
            tmp.value = value;

            this.head.prev = tmp;

            this.head = tmp;
            this.size++;
        }
    }

    public remove(value: string) : void {
        if (this.isEmpty()) {
            return;
        }
        let tmp = this.head;
        while (tmp != null) {
            if (tmp.value === value) {
                if (tmp.prev != null) {
                    tmp.prev.next = tmp.next;
                } else {
                    this.head = tmp.next;
                }
                if (tmp.next != null) {
                    tmp.next.prev = tmp.prev;
                } else {
                    this.tail = tmp.prev;
                }
                this.size--;
                return;
            }

            tmp = tmp.next;
        }
    }

    public removeLast() {
        if (this.isEmpty()) {
            return;
        }
        if (this.size == 1) {
            this.head = null;
            this.tail = null;
            this.size--;

        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.size--;
        }
    }

    //for testing
    private getSize (): number {
        return this.size
    }

    //for testing
    private getHead () : LinkedListNode {
        return this.head
    }

    //for testing
    private deleteAll () : void {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
}
