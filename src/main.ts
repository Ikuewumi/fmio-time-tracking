import { startListening } from "./markUp";
import "./scss/app.scss";
import { GenericObject, Topic } from "./types";
import imgWork from "/images/icon-work.svg";
import imgPlay from "/images/icon-play.svg";
import imgStudy from "/images/icon-study.svg";
import imgExercise from "/images/icon-exercise.svg";
import imgSocial from "/images/icon-social.svg";
import imgSelfCare from "/images/icon-self-care.svg";



export const colorMap: GenericObject = {
  work: "#ff8c66",
  play: "#56c2e6",
  study: "#ff5c7c",
  exercise: "#4acf81",
  social: "#7536d3",
  "self care": "#f1c65b",
}



export const imageMap: GenericObject = {
  work: imgWork,
  play: imgPlay,
  study: imgStudy,
  exercise: imgExercise,
  social: imgSocial,
  "self care": imgSelfCare,
}












// Making Requests to JSON File

export let appData = [] as Topic[]
const getData = async () => {
  try {
    const res = await fetch("/data.json")
    if (!res.ok) {throw Error("could not fetch document");}
    const json = await res.json() as Topic[]
    return json
  } catch(e) {
    throw Error(String(e))
  }
}




const startUp = async () => {
  appData = await getData()
  // writeCards(appData, "daily")
  startListening()
  const daily = document.querySelector('nav li')! as HTMLElement
  daily.click()

}


startUp()