"use client"
import { useEffect } from "react";

export default function ArraysAndHashing() {

    useEffect(() => {
        console.log("using a hashmap: " + findDuplicates(nums))
        console.log("using a set: " + findDuplicatesUsingSet(nums))
    }, [])

    const nums = [1, 2, 4, 5, 7, 10, 20,];

    const findDuplicates = (nums: number[]) => {
        const hashMap = {};
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];

            // if elem has already been seen
            if (hashMap[num]) {
                return true;
            }
            // otherwise add elem to object
            hashMap[num] = true;
        }
        return false;
    }

    const findDuplicatesUsingSet = (nums: number[]) => {
        const seen = new Set;

        for (const num of nums) {
            if (seen.has(num)) {
                return true
            }
            seen.add(num);
        }
        return false;
    }

    return (
        <div>
            <h1>Arrays and Hashing</h1>
        </div>
    );
}