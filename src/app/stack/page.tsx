export default function stack() {


    // 2. 
    class MinStack {
        // use two stacks, a second one to keep track of the lowest number in the stack  
        private stack: number[]
        private minStack: number[]

        constructor() {
            this.stack = []
            this.minStack = []
        }

        push(val: number): void {
            this.stack.push(val)
            val = Math.min(val, this.minStack.length != 0 ? this.minStack[this.minStack.length - 1] : val)
            this.minStack.push(val)
        }

        pop(): void {
            this.stack.pop()
            this.minStack.pop()
        }

        top(): number {
            return this.stack[this.stack.length - 1]
        }

        getMin(): number {
            return this.minStack[this.minStack.length - 1]
        }

    }
    const test = new MinStack()
    test.push(10)
    console.log(test.getMin())


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