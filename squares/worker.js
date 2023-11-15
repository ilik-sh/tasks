function bubbleSort(nums) {
    let swapped
    for (let i = 0; i < nums.length; i++) {
        swapped = false
        for (let j = 0; j < nums.length - i - 1; j++) {
            setTimeout(100)
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

let nums = Array.from({length: 100000}, () => Math.floor(Math.random() * 40))


let sortTimer = timer(bubbleSort)
sortTimer(nums)