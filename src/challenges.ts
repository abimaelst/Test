
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
