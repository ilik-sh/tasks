import { swap } from "../helpers/swap"

export class Sort {

    static bubbleSort(nums: Array<number>) {
        let swapped
        for (let i = 0; i < nums.length; i++) {
            swapped = false
            for (let j = 0; j < nums.length - i; j++) {
                if (nums[j] > nums[j+1]) {
                    swap(nums, j, j+1)
                    swapped = true
                }
            }
            if (!swapped) { return nums }
        }
        return nums
    }
}
