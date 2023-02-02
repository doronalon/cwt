import {LinkedList, ListNode} from '../src/linked.list'

describe('Cache class methods', () => {
    let linkedList: LinkedList

    beforeEach(() => {
        linkedList = new LinkedList()
    })


    it('add', () => {
        linkedList.add('1', 'one')
        expect(linkedList['getHead']().value).toEqual('one')
    })

    it('add twice', () => {
        linkedList.add('1', 'one')
        linkedList.add('2', 'two')
        expect(linkedList['getHead']().value).toEqual('two')
    })

    it('removeTail', () => {
        linkedList.add('1', 'one')
        linkedList.add('2', 'two')
        linkedList.add('3', 'three')
        linkedList.removeTail()
        expect(linkedList['getHead']().value).toEqual('three')
    })


    it('remove value when empty', () => {
        expect(linkedList.removeTail()).toEqual(undefined)
    })

    it('promote', () => {
        linkedList.add('1', 'one')
        linkedList.add('2', 'two')
        linkedList.add('3', 'three')
        let node: ListNode = {
            key: '4',
            value: 'four'
        }

        linkedList.promote(node)
        expect(linkedList['getHead']().value).toEqual('four')
    })
})