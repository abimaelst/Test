
// Question 1
export const isOddOrEven = (value: number) => {
    let tempNumber = value
    if (tempNumber < 0) {
       tempNumber *= (-1)
    }
    while (tempNumber > 0) {
        tempNumber -= 2
    }

    return tempNumber === 0
}

// Question 2
export const isProperlyNested = (value: string) => {
    const nestedOpen: string[] = ['(', '{', '[']
    const nestedClose: string[] = [')', '}', ']']
    const {length} = value

    if(length === 0) {
        return true
    }
    if(nestedOpen.includes(value.charAt(0)) && nestedClose.includes(value.charAt(length - 1))) {
        const indexOpen = nestedOpen.findIndex((item) => item === value.charAt(0))
        const indexClose = nestedClose.findIndex((item) => item === value.charAt(length - 1))
        return indexOpen === indexClose
    }

    return false
}

// Question 3
export const quantityZeroInIntegerToBinary = (value: number) => {
    const binaryNumber = Number(value).toString(2)
    let countZero = 0
    let current = 0
    for (let i = 0; i<binaryNumber.length; i++) {
        Number(binaryNumber[i]) === 1 ? current = 0 : current++
        if (current > countZero) {
            countZero = current
        }
    }
    return countZero;

}


// Question 4
export const rangeNumber = (valueX: number, ValueY:number) => {


}


// Question 5
export const rotatedElement = (numbers: number[], valueN:number) => {
    const result = [...numbers]
   for (let i = 0; numbers.length; i++) {
       if(valueN < 0) {
          result[i] = result[i+1]
           return
       }

       result[i+1] = result[i]
   }

   return result

}

