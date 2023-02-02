
export class Cache {

    private map: Map <string, string> = new Map<string, string>()

    constructor() {
    }

    /**
     * @param {string} key
     * @return {string}
     */
    get (key: string) : string {
        if (!this.map.has(key)){
            return undefined
        }
        return this.map.get(key)
    }

    /**
     * @param {string} key
     * @param {string} value
     * @return {void}
     */
    set (key: string, value: string) : void {
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

    //for unit test
    private clearData () : void {
        this.map.clear()
    }
}
