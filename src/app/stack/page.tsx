export default function stack() {

    // 5. 
    const temps = [30, 38, 30, 36, 35, 40, 28]
    function dailyTemperatures(temps: number[]) {
        const stack: number[] = []
        const res = new Array(temps.length).fill(0)

        for (let i = 0; i < temps.length; i++) {
            while (stack.length > 0 && temps[i] > temps[stack[stack.length - 1]]) {
                const prevIndex = stack.pop()
                res[prevIndex] = i - prevIndex

            }
            stack.push(i)
        }
        return res
    }
    console.log(dailyTemperatures(temps))


    // 4. 
    // function generateParenthesis(n: number) {
    //     // use stack
    //     // recursive backtracking to output all combos of valid parenthesis
    //     // count number of open and close parenthesis
    //     // base case counts = n
    //     // add open if openN < n
    //     // add close if close < n


    //     const stack: string[] = []
    //     const res = []

    //     function backtrack(openN: number, closedN: number) {
    //         // base case
    //         if (openN === n && closedN === n) {
    //             // stack of valid parenthesis
    //             res.push(stack.join(""))
    //             return
    //         }

    //         if (openN < n) {
    //             stack.push("(")
    //             backtrack(openN + 1, closedN)
    //             stack.pop()
    //         }

    //         if (closedN < openN) {
    //             stack.push(")")
    //             backtrack(openN, closedN + 1)
    //             stack.pop()
    //         }
    //     }
    //     backtrack(0, 0)
    //     return res
    // }

    // console.log(generateParenthesis(1)) 


    // 3.
    // const tokens = ["1", "2", "+", "3", "*", "4", "-"]
    // function evaluateRPN(tokens: string[]) {
    //     const stack = []

    //     for (const c of tokens) {
    //         if (c === '+') {
    //             stack.push(stack.pop() + stack.pop())
    //         } else if (c === '-') {
    //             const a = stack.pop()
    //             const b = stack.pop()
    //             stack.push(b - a)
    //         } else if (c === '*') {
    //             stack.push(stack.pop() * stack.pop())
    //         } else if (c === '/') {
    //             const a = stack.pop()
    //             const b = stack.pop()
    //             stack.push(Math.trunc(b / a))
    //         } else {
    //             stack.push(Number(c))
    //         }
    //     }

    //     return stack[0]
    // }
    // console.log(evaluateRPN(tokens))

    // 2. 
    // class MinStack {
    //     // use two stacks, a second one to keep track of the lowest number in the stack  
    //     private stack: number[]
    //     private minStack: number[]

    //     constructor() {
    //         this.stack = []
    //         this.minStack = []
    //     }

    //     push(val: number): void {
    //         this.stack.push(val)
    //         val = Math.min(val, this.minStack.length != 0 ? this.minStack[this.minStack.length - 1] : val)
    //         this.minStack.push(val)
    //     }

    //     pop(): void {
    //         this.stack.pop()
    //         this.minStack.pop()
    //     }

    //     top(): number {
    //         return this.stack[this.stack.length - 1]
    //     }

    //     getMin(): number {
    //         return this.minStack[this.minStack.length - 1]
    //     }

    // }
    // const test = new MinStack()
    // test.push(10)
    // console.log(test.getMin())


    // 1.
    // const s = "[]"
    // function validParentheses(s: string) {
    //     // init stack 
    //     // init hashMap closeToOpen
    //     // loop through string c of s
    //     // if stack && stack[-1] == closeToOpen[c] then stack.pop()
    //     // else return false
    //     // else stack.append(c)
    //     // if stack === [] return true else false

    //     const stack: number[] = []
    //     const map = { ")": "(", "}": "{", "]": "[" }

    //     for (const c of s) {

    //         if (map[c]) {
    //             if (stack && stack[stack.length - 1] === map[c]) {
    //                 stack.pop()
    //             } else {
    //                 return false
    //             }
    //         } else {
    //             stack.push(c)
    //         }
    //     }
    //     return stack.length === 0
    // }
    // console.log(validParentheses(s))



    return (
        <div className="p-4">
            <ul className="list-disc ml-4">
                <li>valid parentheses</li>
            </ul>
        </div>

    );
}