
export function transitionAnimation(element: HTMLElement) {
    function loopTransition(e: TransitionEvent) {
        if (e.propertyName == "margin-left") {
            if (element.className == "square css-transition stateTwo") {
                element.className = "square css-transition stateOne"
                return
            }
            if (element.className == "square css-transition stateOne") {
                element.className = "square css-transition stateTwo"
                return 
            }
        }
    }
    
    element.addEventListener("transitionend", loopTransition, false)

    element.className = "square css-transition stateTwo"
}