export function timwer() {
    return function(target: any, name: string, descriptor: PropertyDescriptor) {
        const method = descriptor.value
        
        descriptor.value = function (...args: Array<unknown>) {
            const start = performance.now()
            method.apply(this, arguments)
            const timeElapsed = performance.now() - start
            console.log('Time elapsed ' + timeElapsed + ' for ' + target.name)
            return 
        }
    }
}

export function timer() {
    return function fun(target: any, name: string, descriptor: PropertyDescriptor) {
        const initialFunction = descriptor.value
        descriptor.value = function () {
            const start = performance.now()
            descriptor.value.apply(this, arguments)
            const timeElapsed = performance.now() - start
            console.log('Time elapsed ' + timeElapsed + ' for ' + target.name)
            return 
        }
        // let start = performance.now()
        // const result = fn.apply(fun, arguments)
        // let timeElapsed = performance.now() - start 
        // console.log('Time elapsed ' + timeElapsed + ' miliseconds for ' + fn.name)
        // return
    }
}