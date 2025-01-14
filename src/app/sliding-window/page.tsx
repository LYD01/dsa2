export default function SlidingWindow() {


    // 2. 
    const s = "zxyzxyz"
    function lengthOfLongestSubstring(s: string): number {
        // we'll use the sliding window with left and right pointer
        // we'll use a set to check for duplicates instantly
        let l = 0
        let r = 0
        const charSet = new Set()
        let maxLength = 0

        while (r < s.length) {
            // check if char is not in set, if yes add to set and expand window
            // compute max leng and update max length var
            if (!charSet.has(s[r])) {
                charSet.add(s[r])
                maxLength = Math.max(maxLength, r - l + 1)
                r++
            } else {
                charSet.delete(s[l])
                l++
            }
        }
        return maxLength
    }

    console.log(lengthOfLongestSubstring(s))


    // 1. 
    // const prices = [10, 1, 5, 6, 7, 1]
    // function maxProfit(prices: number[]): number {
    //     // two pointers at pos 0 and 1
    //     // init maxPrice = 0
    //     // iterate through while right pointer < prices.length
    //     // check if we are profitable prices[l] < prices[r]
    //     // add new mac profit 
    //     // if not profitable move left pointer to right pointer
    //     // incr r pointer

    //     let l = 0
    //     let r = 1
    //     let maxProfit = 0

    //     while (r < prices.length) {
    //         if (prices[l] < prices[r]) { // profit can be made
    //             // calc profit
    //             const profit = prices[r] - prices[l]
    //             maxProfit = Math.max(profit, maxProfit)
    //         } else {
    //             l = r
    //         }
    //         r += 1
    //     }
    //     return maxProfit
    // }

    // console.log(maxProfit(prices))


    return (<></>)
}