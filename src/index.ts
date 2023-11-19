import { setIntervalAnimation } from "@/scripts/setIntervalAnimation";
import { requestAnimationFrameAnimation } from "@/scripts/requestAnimationFrameAnimation";
import { transitionAnimation } from "@/scripts/transitionAnimation";
import { getCharactersFrom, getEverySecondCharacterPageStartingFrom } from "./api/characterApi";

const transitionSquare = document.getElementById("css-transition")!
const setIntervalSquare = document.getElementById("js-setInterval")!
const requestAnimationFrameSquare = document.getElementById("js-requestAnimationFrame")!
const parentRectangle = document.querySelector(".rectangle") as HTMLElement

const worker = new Worker(new URL('./workers/worker.ts', import.meta.url))

setIntervalAnimation(setIntervalSquare, parentRectangle)
requestAnimationFrameAnimation(requestAnimationFrameSquare, parentRectangle)
transitionAnimation(transitionSquare)

getEverySecondCharacterPageStartingFrom(1).then((data) => console.log(data))





