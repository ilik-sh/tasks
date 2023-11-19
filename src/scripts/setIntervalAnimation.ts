export function setIntervalAnimation(child: HTMLElement, parent: HTMLElement) {
    let direction = true 
    let current = 0
    let step = 10

    let slider = setInterval(function() {
        let finalPoint = parent.clientWidth - child.clientWidth
    
        if (direction) {
            current += step
            child.style.marginLeft = current + "px";
            if (current >= finalPoint) {
                direction = false
            }
        }
    
        if (!direction) {
            current -= step
            child.style.marginLeft = current + "px";
            if (current <= 0) {
                direction = true
            }
        }
    
    }, 1000/120)
}