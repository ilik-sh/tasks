export function requestAnimationFrameAnimation(child: HTMLElement, parent: HTMLElement) {
    let direction = true 
    let currentMargin = 0
    let step = 10

    function draw() {
        let finalPoint = parent.clientWidth - child.clientWidth
    
        if (direction) {
            currentMargin += step
            child.style.marginLeft = currentMargin + "px";
            if (currentMargin >= finalPoint) {
                direction = false
            }
        }
    
        if (!direction) {
            currentMargin -= step
            child.style.marginLeft = currentMargin + "px";
            if (currentMargin <= 0) {
                direction = true
            }
        }

        requestAnimationFrame(draw)
    }

    draw()
}