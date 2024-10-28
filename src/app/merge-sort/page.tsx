'use client'
import { useEffect } from "react";

export default function MergeSort() {

    useEffect(() => {
        console.log(sortedMergedArray)



    }, [])

    /*
    * @param {number[]} nums1
    * @param {number} n
    * @param {number[]} nums2
    * @param {number} m
    
    */


    const merge = (nums1: number[], n: number, nums2: number[], m: number) => {
        const i = n - 1
        const j = m - 1
        const k = n + m - 1

        while (i >= 0 && j >= 0) {
            if (nums1[i] > nums2[j]) {
                console.log('yes')
                console.log(i)
                console.log(j)
                console.log(k)

            }
        }




    }

    const array1 = [1, 5, 8, 0, 0, 0]
    const array2 = [6, 0, 8, 0]
    const arra1Length = array1.length
    const arra2Length = array2.length
    const sortedMergedArray = merge(array1, arra1Length, array2, arra2Length)



    return (
        <h1>Merge Sort</h1>
    );

}