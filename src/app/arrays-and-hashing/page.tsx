"use client"
import { useEffect } from "react";

export default function ArraysAndHashing() {

    // const nums = [3, 4, 5, 6, 6, 6, 4, 1, 0, 9, 7, 9, 9, 9]
    // const k = 3
    const strs = ['apple', 'banana', 'cat']

    useEffect(() => {

        console.log(encodeStr(strs))
        console.log(decodeStr(encodeStr(strs)))

        // console.log(topKFrequent(nums, k))

        // console.log(groupAnagrams(strs))
        // console.log(twoSum(nums, target))

        // console.log(isAnogram(s, t));

        // console.log("using a hashmap: " + findDuplicates(nums))
        // console.log("using a set: " + findDuplicatesUsingSet(nums))
    }, [])


    // 6
    function encodeStr(strs: string[]) {
        let res = "";

        for (const str of strs) {

            res += String(str.length) + "#" + str

        }
        return res;
    }

    function decodeStr(str: string) {
        let i = 0
        const res = []

        while (i < str.length) {
            const j = str.indexOf("#", i)
            const length = parseInt(str.slice(i, j), 10)
            const strExtract = str.slice(j + 1, j + 1 + length)
            res.push(strExtract)

            i = j + 1 + length;

        }
        return res;
    }


    // 5 
    // function topKFrequent(nums: number[], k: number) {
    //     const map = {}

    //     for (const num of nums) {
    //         map[num] = (map[num] || 0) + 1
    //     }

    //     console.log(map)

    //     const sortedElements = Object.keys(map).sort((a, b) =>
    //         map[b] - map[a]
    //     )

    //     console.log(sortedElements)

    //     return sortedElements.slice(0, k).map(Number);

    // }


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
    //     return Object.values(map)
    // }

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
    //             console.log(map)
    //             return [map[complement], i];
    //         }

    //         // We’re storing each number’s index in the map so that later, if we find another number that adds with num to meet the target, we can easily retrieve the index of this stored num using the map.
    //         /*
    //             1. map[num]: This is where we use the value of the current number (num) as a key in the map (the hash map or JavaScript object).
    //             2. = i: We set the value for that key (map[num]) to be the index (i) of num in the nums array.
    //         */
    //         map[num] = i;
    //     }
    // }


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
                <li>encode and decode strings</li>
                <li>top K frequent</li>
                <li>find duplicates</li>
                <li>is anogram</li>
                <li>two sum</li>
            </ul>
        </div>
    );
}