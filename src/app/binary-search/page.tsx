export default function binarySearchPage() {

    // 2. 
    const matrix = [[1, 2, 4, 8], [10, 11, 12, 13], [14, 20, 30, 40]]
    const target = 10
    function search2DMatric(matrix: number[][], target: number): boolean {
        // each row itsealf is sorted in accending order as well as the cololumns
        // we can use binary search to search which row we are looking for in the first place
        // O(logm * logn) 
        // init row/cols 
        // init l/r pointers 
        // binary search on the rows
        // break and binary search on row
        // return bool

        const m = matrix.length // rows
        const n = matrix[0].length // cols

        let top = 0
        let bottom = m - 1 // last row

        while (top <= bottom) {
            // calc mid row
            const row = Math.floor((top + bottom) / 2)

            if (target > matrix[row][n - 1]) {
                top = row + 1
            } else if (target < matrix[row][0]) {
                bottom = row - 1
            } else {
                break
            }
        }

        if (top > bottom) {
            return false
        }

        let l = 0
        let r = n - 1
        const row = Math.floor((top + bottom) / 2)
        while (l <= r) {
            const m = Math.floor((l + r) / 2)

            if (target > matrix[row][m]) {
                l = m + 1
            } else if (target < matrix[row][m]) {
                r = m - 1
            } else {
                return true
            }
        }
        return false
    }

    console.log(search2DMatric(matrix, target))

    // 1. 
    // const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // const target = 9
    // function binarySeach(nums: number[], target: number) {
    //     // init pointers at start and end of nums
    //     // while l <= r 
    //     // calc mid way point
    //     // check if target > than nums[m] 
    //     // inc/dec pointers
    //     // return m
    //     // else return -1 (target not in nums)

    //     let l = 0
    //     let r = nums.length - 1

    //     while (l <= r) {
    //         const m = Math.floor((l + r) / 2)
    //         if (nums[m] === target) {
    //             return nums[m]
    //         }

    //         if (nums[m] > target) {
    //             r = nums[m] - 1
    //         } else if (nums[m] < target) {
    //             l = nums[m] + 1
    //         } else {
    //             return m
    //         }
    //     }
    //     return -1
    // }
    // console.log(binarySeach(nums, target))




    return (<></>)
}