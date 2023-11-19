export function swap<T>(nums: Array<T>, firstIndex: number, secondIndex: number) {
    let temp = nums[firstIndex]
    nums[firstIndex] = nums[secondIndex]
    nums[secondIndex] = temp
}

