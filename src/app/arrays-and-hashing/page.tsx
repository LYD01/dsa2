"use client"
import { useEffect } from "react";

export default function ArraysAndHashing() {



    const strs = ["act", "pots", "tops", "cat", "stop", "hat"]
    // Group Anagrams
    function groupAnagrams(strs: string[]) {
        const map = {};

        for (const str of strs) {
            const sortedStr = str.split("").sort().join("")

            if (!map[sortedStr]) {
                map[sortedStr] = []
            }

            map[sortedStr].push(str)

        }
        return Object.values(map)

    }

    useEffect(() => {

        console.log(groupAnagrams(strs))
        // console.log(twoSum(nums, target))

        // console.log(isAnogram(s, t));

        // console.log("using a hashmap: " + findDuplicates(nums))
        // console.log("using a set: " + findDuplicatesUsingSet(nums))
    }, [])

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
        <div>
            <h1>Arrays and Hashing</h1>
            <ul className="list-disc">
                <li>find duplicates</li>
                <li>is anogram</li>
                <li>two sum</li>
            </ul>
        </div>
    );
}