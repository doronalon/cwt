import {Cache} from '../src/cache'

describe('Cache class methods', () => {
    let cache: Cache
    beforeAll(() => {
        cache = new Cache()
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

    it('checking the toObject method when have a content', () => {
        cache.set('1', 'one')
        cache.set('2', 'two')
        cache.set('3', 'three')
        expect((cache.toObjet())).toMatchObject({
            "1": "one",
            "2": "two",
            "3": "three"
        })
    })

    it('checking the toObject method when map is empty', () => {
        expect((cache.toObjet())).toMatchObject({})
    })
})