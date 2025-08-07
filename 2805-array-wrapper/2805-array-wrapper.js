class ArrayWrapper {
    constructor(nums) {
        this.nums = nums;
    }

    // Allows use of "obj1 + obj2"
    valueOf() {
        return this.nums.reduce((acc, val) => acc + val, 0);
    }

    // Allows use of String(obj)
    toString() {
        return `[${this.nums.join(',')}]`;
    }
}

// Example 1
const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log(obj1 + obj2); // Output: 10

// Example 2
const obj3 = new ArrayWrapper([23, 98, 42, 70]);
console.log(String(obj3)); // Output: "[23,98,42,70]"

// Example 3
const obj4 = new ArrayWrapper([]);
const obj5 = new ArrayWrapper([]);
console.log(obj4 + obj5); // Output: 0
