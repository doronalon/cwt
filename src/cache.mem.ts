import {DoublyLinkedList} from './duble.linked.list'

export class CacheMem {
    private linkedList: DoublyLinkedList = new DoublyLinkedList()
    private map: Map <string, string> = new Map<string, string>()
    private readonly maxItems: number

    constructor(maxItems: number) {
        this.maxItems = maxItems
    }

    /**
     * @param {string} key
     * @return {string}
     */
    get (key: string) : string {
        if (!this.map.has(key)){
            return undefined
        }
        this.setAsHead(key)
        return this.map.get(key)
    }

    /**
     * @param {string} key
     * @param {string} value
     * @return {void}
     */
    set (key: string, value: string) : void {
        if(this.maxItems === 0 ) {
            return
        } else if (this.map.size >= this.maxItems && !this.map.has(key)) {
            this.map.delete(this.getLastUsedKey())
            this.linkedList.removeLast()
        }
        this.setAsHead(key)
        this.map.set(key, value)
    }

    /**
     * @return {{[index : string] : string }}
     */
    toObjet () : {[index : string] : string } {
       const obj = {}
        this.map.forEach((value, key) => {
            obj[key] = value
        })
        return obj
    }

    private getLastUsedKey() : string {
        return this.linkedList.getLast()
    }

    private setAsHead (key : string): void {
        this.linkedList.remove(key)
        this.linkedList.addFirst(key)
    }

    //for unit test
    private clearData () : void {
        this.map.clear()
    }
 }
