
export default function ArraysAndHashing() {





    // const strs = ['apple', 'banana', 'cat']

    // console.log(productExceptSelf(nums))

    // console.log(encodeStr(strs))
    // console.log(decodeStr(encodeStr(strs)))




    // console.log(twoSum(nums, target))

    // console.log(isAnogram(s, t));

    // console.log("using a hashmap: " + findDuplicates(nums))
    // console.log("using a set: " + findDuplicatesUsingSet(nums))


    // 9 Longest Consecutive Sequence
    // const nums = [1, 2, 3, 4, 100, 99, 33]
    // function longestConsecutive(nums: number[]) {
    //     const numSet = new Set(nums)
    //     let longest = 0 // init tracking of the longest consec seq

    //     for (const num of numSet) {
    //         if (!numSet.has(1 - num)) {

    //             let length = 0

    //             while (numSet.has(num + length)) {
    //                 length += 1;
    //             }
    //             console.log(longest)

    //             longest = Math.max(length, longest)
    //         }
    //     }

    //     return longest

    // }
    // longestConsecutive(nums)


    // 8. Valiid Sudoku
    // const board = [
    //     ["1", "2", ".", ".", "3", ".", ".", ".", "."],
    //     ["4", ".", ".", "5", ".", ".", ".", ".", "."],
    //     [".", "9", "8", ".", ".", ".", ".", ".", "3"],
    //     ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
    //     [".", ".", ".", "8", ".", "3", ".", ".", "5"],
    //     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    //     [".", ".", ".", ".", ".", ".", "2", ".", "."],
    //     [".", ".", ".", "4", "1", "9", ".", ".", "8"],
    //     [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    // ];
    // function isValidSudoku(board: string[][]) {
    //     const cols = Array.from({ length: 9 }, () => new Set());
    //     const rows = Array.from({ length: 9 }, () => new Set());
    //     const boxes = Array.from({ length: 9 }, () => new Set());


    //     for (let r = 0; r < 9; r++) {
    //         for (let c = 0; c < 9; c++) {
    //             const value = board[r][c];

    //             if (value === ".") continue

    //             const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
    //             // console.log(r, c)

    //             if (rows[r].has(value) || cols[c].has(value) || boxes[boxIndex].has(value)) {
    //                 return false;
    //             }

    //             rows[r].add(value)
    //             cols[c].add(value)
    //             boxes[boxIndex].add(value)
    //         }
    //     }
    //     return true
    // }

    // isValidSudoku(board)

    // 7. Products of array except self
    // function productExceptSelf(nums: number[]) {
    //     const n = nums.length;
    //     const result = new Array(n).fill(1);

    //     let prefix = 1;
    //     for (let i = 0; i < n; i++) {
    //         // take prefix and put in pos i
    //         result[i] = prefix
    //         prefix *= nums[i]
    //     }

    //     let postfix = 1;
    //     for (let i = n - 1; i >= 0; i--) {
    //         result[i] *= postfix
    //         postfix *= nums[i]
    //     }
    //     return result;
    // }


    // 6
    // const strs = ["neet", "code", "love", "you"]
    // function encodeStr(strs: string[]) {
    //     let res = "";
    //     for (const str of strs) {
    //         res += String(str.length) + "#" + str
    //     }
    //     return res;
    // }

    // function decodeStr(str: string) {
    //     let i = 0
    //     const res = []
    //     while (i < str.length) {
    //         const j = str.indexOf("#", i)
    //         const length = parseInt(str.slice(i, j), 10)
    //         const strExtract = str.slice(j + 1, j + 1 + length)
    //         res.push(strExtract)
    //         i = j + 1 + length;
    //     }
    //     return res;
    // }
    // console.log(encodeStr(strs))




    // 5 
    // const nums = [1, 1, 2, 3, 4, 4, 4,]
    // const k = 2
    // function topKFrequent(nums: number[], k: number) {
    //     const map = {}

    //     for (const num of nums) {
    //         map[num] = (map[num] || 0) + 1
    //     }

    //     // console.log(map)

    //     const sortedElements = Object.keys(map).sort((a, b) =>
    //         map[b] - map[a]
    //     )

    //     console.log(sortedElements)

    //     return sortedElements.slice(0, k).map(Number);

    // }
    // // console.log(topKFrequent(nums, k))
    // topKFrequent(nums, k)


    // 4.
    // const strs = ["act", "pots", "tops", "cat", "stop", "hat"]
    // function groupAnagrams(strs: string[]) {
    //     const map = {};

    //     for (const str of strs) {
    //         const sortedStr = str.split("").sort().join("")

    //         if (!map[sortedStr]) {
    //             map[sortedStr] = []
    //         }

    //         map[sortedStr].push(str)

    //     }
    //     console.log(Object.values(map))
    //     return Object.values(map)
    // }
    // // console.log(groupAnagrams(strs))
    // groupAnagrams(strs)

    // groupAnagrams2
    // const strs = ["act", "pots", "tops", "cat", "stop", "hat"]
    // function groupAnagrams2(strs: string[]) {
    //     const map = {}

    //     for (const str of strs) {
    //         const count = new Array(26).fill(0);

    //         for (const char of str) {
    //             count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
    //         }

    //         const key = count.join('#')
    //         if (!map[key]) {
    //             map[key] = []
    //         }

    //         map[key].push(str)
    //     }
    //     return Object.values(map)
    // }

    // console.log(groupAnagrams2(strs)) // output: [ [ 'act', 'pots', 'tops', 'cat', 'stop', 'hat' ] ]
    // groupAnagrams2(strs)


    // 3 
    // const nums = [3, 4, 5, 6]
    // const target = 10 // 7
    // const twoSum = (nums: number[], target: number) => {
    //     const map = {};

    //     for (let i = 0; i < nums.length; i++) {
    //         const num = nums[i];
    //         const complement = target - num

    //         if (map[complement] != undefined) {
    //             // found the sum
    //             // console.log(map)
    //             return [map[complement], i];
    //         }

    //         // We’re storing each number’s index in the map so that later, if we find another number that adds with num to meet the target, we can easily retrieve the index of this stored num using the map.
    //         /*
    //             1. map[num]: This is where we use the value of the current number (num) as a key in the map (the hash map or JavaScript object).
    //             2. = i: We set the value for that key (map[num]) to be the index (i) of num in the nums array.
    //         */
    //         // console.log(map[num] = i)
    //         map[num] = i;
    //         console.log(map)
    //     }
    // }
    // twoSum(nums, target)


    // 2.
    // const s = "racecar"
    // const t = "racecar"
    // const isAnogram = (s: string, t: string) => {
    //     if (s.length != t.length) {
    //         return false;
    //     }
    //     return s.split("").sort().join("") === t.split("").sort().join("");
    // }

    // 1.
    // const nums = [1, 2, 4, 5, 7, 10, 20,];
    // const findDuplicates = (nums: number[]) => {
    //     const hashMap = {};
    //     for (let i = 0; i < nums.length; i++) {
    //         const num = nums[i];

    //         // if elem has already been seen
    //         if (hashMap[num]) {
    //             return true;
    //         }
    //         // otherwise add elem to object
    //         hashMap[num] = true;
    //     }
    //     return false;
    // }
    // const findDuplicatesUsingSet = (nums: number[]) => {
    //     const seen = new Set;

    //     for (const num of nums) {
    //         if (seen.has(num)) {
    //             return true
    //         }
    //         seen.add(num);
    //     }
    //     return false;
    // }

    return (
        <div className="p-4">
            <h1>Arrays and Hashing</h1>
            <ul className="list-disc ml-4">
                <li>longest consecutive sequence</li>
                <li>products of array except self</li>
                <li>encode and decode strings</li>
                <li>top K frequent</li>
                <li>find duplicates</li>
                <li>is anogram</li>
                <li>two sum</li>
            </ul>
        </div>
    );
}