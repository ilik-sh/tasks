let parent = document.getElementById("js-setInterval").parentElement
let child = document.getElementById("js-setInterval")
let transition = document.querySelector(".css-transition")
let requestAF = document.querySelector("#js-requestAnimationFrame")


function setIntervalAnimation() {
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

function requestAnimationFrameAnimation() {
    let direction = true 
    let current = 0
    let step = 10

    function draw() {
        let finalPoint = parent.clientWidth - requestAF.clientWidth
    
        if (direction) {
            current += step
            requestAF.style.marginLeft = current + "px";
            if (current >= finalPoint) {
                direction = false
            }
        }
    
        if (!direction) {
            current -= step
            requestAF.style.marginLeft = current + "px";
            if (current <= 0) {
                direction = true
            }
        }

        requestAnimationFrame(draw)
    }

    draw()
}



function loopTransition(e) {
    if (e.propertyName == "margin-left") {
        if (transition.className == "square css-transition stateTwo") {
            transition.className = "square css-transition stateOne"
            return
        }
        if (transition.className == "square css-transition stateOne") {
            transition.className = "square css-transition stateTwo"
            return 
        }
    }
}

setIntervalAnimation()
requestAnimationFrameAnimation()
transition.addEventListener("webkitTransitionEnd", loopTransition, false)
transition.className = "square css-transition stateTwo"

