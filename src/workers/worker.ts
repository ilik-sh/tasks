import { Sort } from "@/scripts/bubbleSort"

console.log('WebWorkerStarted')
let nums = Array.from({length: 50000}, () => Math.floor(Math.random() * 30))

console.log(nums)
Sort.bubbleSort(nums)
console.log(nums)
