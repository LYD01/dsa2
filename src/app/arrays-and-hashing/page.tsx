"use client"
import { useEffect } from "react";

export default function ArraysAndHashing() {

    useEffect(() => {
        // console.log("using a hashmap: " + findDuplicates(nums))
        // console.log("using a set: " + findDuplicatesUsingSet(nums))

        // console.log(isAnogram(s, t));
    }, [])

    const nums = [1, 2, 4, 5, 7, 10, 20,];
    const s = "racecar"
    const t = "racecar"

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

    const isAnogram = (s: string, t: string) => {
        if (s.length != t.length) {
            return false;
        }

        return s.split("").sort().join("") === t.split("").sort().join("");
    }



    return (
        <div>
            <h1>Arrays and Hashing</h1>
            <ul className="list-disc">
                <li>find duplicates</li>
                <li>is anogram</li>
                <li></li>
            </ul>
        </div>
    );
}