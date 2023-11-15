function quickSort(nums, left, right) {
    let index
    left = left ? left : 0
    right = right ? right : nums.lenght - 1
    if (nums.length > 1) {
        index = divide(nums, left, right)
        if (left < index - 1) {
            quickSort(nums, left, index - 1)
        }
        if (index < right) {
            quickSort(nums, index, right)
        }
    }
    return nums
}

async function bubbleSort(nums) {
    let swapped
    for (let i = 0; i < nums.length; i++) {
        swapped = false
        for (let j = 0; j < nums.length - i - 1; j++) {
            setTimeout(chunkPerform, 0, nums, j, swapped)
        }
        if (!swapped) { return }
    } 
    return nums
}

function divide(nums, left, right) {
    let pivot = Math.floor((left + right) / 2)
    let lPointer = left
    let rPointer = right
    while (lPointer <= rPointer) {
        while (nums[lPointer] < nums[pivot]) { 
            lPointer++
        } 
        while (nums[rPointer] > nums[pivot]) { 
            rPointer--
        } 
        if (lPointer <= rPointer) {
            swap(nums, rPointer, lPointer)
            rPointer--
            lPointer++
        }
    }
    return lPointer
}

function swap(nums, firstIndex, secondIndex) {
    let temp = nums[firstIndex]
    nums[firstIndex] = nums[secondIndex]
    nums[secondIndex] = temp
}

function timer(fn) {
    return function() {
        let start = performance.now()
        fn.apply(this, arguments)
        let timeElapsed = performance.now() - start 
        console.log('Time elapsed ' + timeElapsed + ' for ' + fn.name)
        return
    }
}

function worker_function() {
    function bubbleSort(nums) {
        let swapped
        for (let i = 0; i < nums.length; i++) {
            swapped = false
            for (let j = 0; j < nums.length - i - 1; j++) {
                if (nums[j] > nums[j+1]) {
                    swap(nums, j, j+1)
                    swapped = true
                }   
            }
            if (!swapped) { return nums }
        }
        return nums
    }
    
    function timer(fn) {
        return function() {
            let start = performance.now()
            fn.apply(this, arguments)
            let timeElapsed = performance.now() - start 
            console.log('Time elapsed ' + timeElapsed + ' for ' + fn.name)
            return
        }
    }
    function swap(nums, firstIndex, secondIndex) {
        let temp = nums[firstIndex]
        nums[firstIndex] = nums[secondIndex]
        nums[secondIndex] = temp
    }
    
    let nums = Array.from({length: 50000}, () => Math.floor(Math.random() * 40))
    
    let sortTimer = timer(bubbleSort)
    sortTimer(nums)
}
var worker = new Worker(URL.createObjectURL(new Blob(["("+worker_function.toString()+")()"], {type: 'text/javascript'})));



 