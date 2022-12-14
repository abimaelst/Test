import {
    isOddOrEven,
    isProperlyNested,
    quantityZeroInIntegerToBinary,
    productBitwise,
    rotateElement
} from "./challenges";

console.log('the number 3 is Even?', isOddOrEven(3)) // false
console.log('the number -1 is Even?', isOddOrEven(-1)) // false
console.log('the number -2 is Even?',isOddOrEven(-2)) // true
console.log('the number 0 is Even?',isOddOrEven(0)) // true

console.log('it is has nested property?', isProperlyNested('{name}')) // true
console.log('it is has nested property?', isProperlyNested('{[()()]}')) // true
console.log('it is has nested property?', isProperlyNested('{name')) // false
console.log('it is has nested property?', isProperlyNested('([)()]')) // false

console.log('consecutive zeros in binary value?', quantityZeroInIntegerToBinary(9)) // 2
console.log('consecutive zeros in binary value?', quantityZeroInIntegerToBinary(328)) // 2
console.log('consecutive zeros in binary value?', quantityZeroInIntegerToBinary(20)) // 1

console.log('product for interval 5 and 7?', productBitwise(5, 7)) // 4

console.log('rotated element?', rotateElement( [3, 8, 9, 7, 6], -1)) // 4
