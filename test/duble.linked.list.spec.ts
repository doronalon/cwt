import {DoublyLinkedList} from '../src/duble.linked.list'

describe('Cache class methods', () => {
    let linkedList: DoublyLinkedList

    beforeAll(() => {
        linkedList = new DoublyLinkedList()
    })

    afterEach(() => {
        linkedList['deleteAll']()
    })

    it('is empty method', () => {
        expect(linkedList.isEmpty()).toEqual(true)
    })

    it('addFirst', () => {
        linkedList.addFirst('one')
        expect(linkedList.isEmpty()).toEqual(false)
        expect(linkedList['getHead']().value).toEqual('one')
    })

    it('addFirst twice', () => {
        linkedList.addFirst('one')
        linkedList.addFirst('two')
        expect(linkedList.isEmpty()).toEqual(false)
        expect(linkedList['getHead']().value).toEqual('two')
        expect(linkedList['getSize']()).toEqual(2)
    })

    it('removeLast + getLast', () => {
        linkedList.addFirst('one')
        linkedList.addFirst('two')
        linkedList.addFirst('three')
        linkedList.removeLast()
        expect(linkedList.isEmpty()).toEqual(false)
        expect(linkedList['getHead']().value).toEqual('three')
        expect(linkedList['getSize']()).toEqual(2)
        expect(linkedList.getLast()).toEqual('two')
    })

    it('getLast when empty', () => {
        expect(linkedList.getLast()).toEqual(null)
    })

    it('remove value when empty', () => {
        expect(linkedList.remove('one')).toEqual(undefined)
    })

    it('remove value', () => {
        linkedList.addFirst('one')
        linkedList.addFirst('two')
        linkedList.addFirst('three')
        linkedList.remove("two")
        expect(linkedList['getSize']()).toEqual(2)
        expect(linkedList.getLast()).toEqual('one')
    })

})