export default function TwoPointers() {

    // 4. 
    // const nums = [1, 7, 2, 5, 4, 7, 3, 6]
    // function containerWithMostWater(nums: number[]) {
    //     // calculate current area w/ min
    //     // update area w/ max
    //     // inc/dec pointers

    //     let maxWater = 0

    //     let l = 0
    //     let r = nums.length - 1

    //     while (l < r) {
    //         const width = r - l
    //         const height = Math.min(nums[l], nums[r])
    //         const area = width * height

    //         maxWater = Math.max(area, maxWater) // update maxWater

    //         if (nums[l] < nums[r]) {
    //             l++
    //         } else {
    //             r++
    //         }
    //     }
    //     return maxWater
    // }

    // console.log(containerWithMostWater(nums))

    // 3. 
    // const nums = [-1, 0, 1, 2, -1, -4]
    // function threeSum(nums: number[],) {
    //     // sort array 
    //     // target = 0
    //     // loop through array
    //     // first check if start + 1 and end are the same if yes continue  
    //     // implement 2 pointer
    //     // add items to array
    //     // incrment left 
    //     // check for same sum 
    //     // return res

    //     const sortedArr = nums.sort((a, b) => a - b)
    //     const res = []

    //     for (let i = 0; i < sortedArr.length; i++) {
    //         const num = sortedArr[i]
    //         if (i + 1 == sortedArr[i - 1]) {
    //             continue
    //         }

    //         let l = 0
    //         let r = i - 1

    //         while (l < r) {
    //             const sum = num + sortedArr[l] + sortedArr[r]

    //             if (sum > 0) {
    //                 r -= 1
    //             } else if (sum < 0) {
    //                 l += 1
    //             } else {
    //                 res.push([num, sortedArr[l], sortedArr[r]])
    //                 l += 1

    //                 while (nums[l] == nums[l - 1]) {
    //                     l += 1
    //                 }

    //             }

    //         }
    //     }
    //     return res
    // }
    // console.log(threeSum(nums))


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
                <li>container with most water</li>
                <li>three sum</li>
                <li>two sum 2</li>
                <li>valid palendrone</li>
            </ul>
        </div>
    )
}