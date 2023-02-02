import {ListNode, LinkedList} from "./linked.list";

export class LruCache {
    private nodeMap = new Map<string, ListNode>()
    private list = new LinkedList();
    private readonly maxItems: number;

    constructor(maxItems?: number) {
        this.maxItems = maxItems;
    }

    get(key: string): string {
        let node = this.nodeMap.get(key);
        if (node) {
            this.list.promote(node);
            return node.value;
        }
        return undefined;
    }

    set(key: string, value: string): void {
        if (this.maxItems > 0) {
            let node = this.nodeMap.get(key);
            if (node) {
                node.value = value;
                this.list.promote(node);
            } else {
                let newNode = this.list.add(key, value);
                this.nodeMap.set(key, newNode);
                if (this.nodeMap.size > this.maxItems) {
                    if (this.list.tail?.key) {
                        this.nodeMap.delete(this.list.tail.key)
                    }
                    this.list.removeTail();
                }
            }
        }
    }

    /**
     * @return {{[index : string] : string }}
     */
    toObjet(): { [index: string]: string } {
        const obj = {}
        this.nodeMap.forEach((value: ListNode, key: string) => {
            obj[key] = value.value
        })
        return obj
    }

}
