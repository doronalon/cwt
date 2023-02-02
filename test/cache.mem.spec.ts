import {CacheMem} from '../src/cache.mem'

describe('Cache class methods maxItem set 0', () => {
    let cache: CacheMem

    beforeAll(() => {
        cache = new CacheMem(0)
    })

    afterEach(() => {
        cache['clearData']()
    })

    it('get for un exist key => undefined', () => {
        expect(cache.get('1')).toEqual(undefined)
    })

    it('get for exist key => value', () => {
        cache.set('4', 'four')
        expect(cache.get('4')).toEqual(undefined)
    })

    it('checking the toObject method when have a content', () => {
        cache.set('1', 'one')
        cache.set('2', 'two')
        cache.set('3', 'three')
        expect((cache.toObjet())).toEqual({})
    })

    it('toObject when value was change', () => {
        cache.set('1', 'one')
        cache.set('2', 'two')
        cache.set('3', 'three')
        cache.set('3', 'four')
        expect((cache.toObjet())).toMatchObject({})
    })


    it('checking the toObject method when map is empty', () => {
        expect((cache.toObjet())).toMatchObject({})
    })
})

describe('Cache class methods maxItem set 3', () => {
    let cache: CacheMem

    beforeAll(() => {
        cache = new CacheMem(3)
    })

    afterEach(() => {
        cache['clearData']()
    })

    it('get for un exist key => undefined', () => {
        expect(cache.get('1')).toEqual(undefined)
    })

    it('get for exist key => value', () => {
        cache.set('4', 'four')
        expect(cache.get('4')).toEqual('four')
    })

    it('checking the toObject method when try to set nums of records which more than maxItems', () => {
        cache.set('1', 'one')
        cache.set('2', 'two')
        cache.set('3', 'three')
        cache.set('4', 'three')
        expect((cache.toObjet())).toMatchObject({
            "2": "two",
            "3": "three",
            "4": "three",
        })
    })

    it('toObject when value was change', () => {
        cache.set('1', 'one')
        cache.set('2', 'two')
        cache.set('3', 'three')
        cache.set('3', 'four')
        expect((cache.toObjet())).toMatchObject({
            '1': 'one',
            "2": "two",
            "3": "four",
        })
    })

    it('checking the toObject method when map is empty', () => {
        expect((cache.toObjet())).toEqual({})
    })

    it('"get" increase priority', () => {
        cache.set('1', 'one')
        cache.set('2', 'two')
        cache.get('1')
        cache.set('4', 'four')
        cache.set('5', 'five')
        expect((cache.toObjet())).toMatchObject({
            '1': 'one',
            "4": "four",
            "5": "five"
        })
    })
})