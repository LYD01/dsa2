export default function TwoPointers() {



    // 2. 
    // const numbers = [1, 2, 3, 4]
    // const target = 3
    // function twoSum2(numbers: number[], target: number) {
    //     let left = 0
    //     let right = numbers.length - 1

    //     while (left < right) {

    //         const curSum = numbers[left] + numbers[right]

    //         if (curSum > target) {
    //             right -= 1
    //         } else if (curSum < target) {
    //             left += 1
    //         } else {
    //             return [left + 1, right + 1]
    //         }
    //     }
    //     return []
    // }
    // console.log(twoSum2(numbers, target))



    // 1. 
    // const str = "race car?"
    // function isValidPalendrone(str: string) {
    //     let left = 0
    //     let right = str.length - 1
    //     const cleanStr = str.toLowerCase().replaceAll(" ", "")
    //     console.log(cleanStr)
    //     function isAlpha(char: string) {
    //         return (
    //             (char >= 'a' && char <= 'z') ||
    //             (char >= 'A' && char <= 'Z') ||
    //             (char >= '0' && char <= '9')
    //         );
    //     }

    //     while (left < right) {
    //         if (!isAlpha(cleanStr[left])) {
    //             left++
    //         }

    //         if (!isAlpha(cleanStr[right])) {
    //             right--
    //         }

    //         else if (cleanStr[left] !== cleanStr[right]) {
    //             return false
    //         } else {
    //             left++
    //             right--
    //         }
    //     }
    //     return true;
    // }

    // console.log(isValidPalendrone(str))























    return (
        <div className="p-4">
            <h1>Two Pointers</h1>
            <ul className="ml-4 list-disc">
                <li>two sum 2</li>
                <li>valid palendrone</li>
            </ul>
        </div>
    )
}