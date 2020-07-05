//const {suma} = require ('../calc')
import {suma} from '../calc'

test('test 3 + 6 should be 9',function(){
    expect(suma(3,6)).toBe(9)
})
test('test 3 + 6 should be 9', function () {
    expect(suma(3, 6)).not.toBe(6)
})