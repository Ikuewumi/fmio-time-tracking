import { appData, colorMap, imageMap } from "./main";
import { TimeframeString, Topic } from "./types";

const mainEl = document.querySelector("main")! as HTMLElement;
const nav = document.querySelector("nav")! as HTMLElement;




export const generateCard = (
    topic: Topic, duration: TimeframeString = "daily",
    color = "#ff8c66",
    img = ""
) => {
    const d = "hrs"
    const last = duration === "daily" ? "Yesterday" :
        (duration === 'monthly' ? "Last Month" : 
        (duration === "weekly") ? "Last Week" : "Yesterday"
        );
    
    
    

    const html = `

        <section class="card" style="--bgCard: ${color}; --urlCard: url(${img});">
            <div class="wrapper flex">
            <article class="header flex">

                <h2>${topic.title}</h2>
                <img src="/public/images/icon-ellipsis.svg" alt="ellipsis">


            </article>
            <article class="body flex">
                <time>
                <strong>${topic.timeframes[duration].current}</strong>${d}
                </time>


                <time class="last">
                ${last} - ${topic.timeframes[duration].previous} ${d}
                </time>
            </article>
            </div>
        </section>
    
    
    `


    return html



}







export const writeCards = (topics: Topic[], duration: TimeframeString) => {

    mainEl.innerHTML = ``
    topics.forEach(topic => {
        mainEl.innerHTML += generateCard(
         topic,
         duration,
         colorMap[topic.title.toLowerCase()],
         imageMap[topic.title.toLowerCase()]
        )
    })


}






export const startListening = () => {

    nav.addEventListener('click', (e) => {
        e.preventDefault()
        const el = e.target! as HTMLLIElement
        const elIsLi = el?.tagName?.toLowerCase() === 'li'


        if (!elIsLi) return

        Array.from(document.querySelectorAll('nav li')).forEach(li => {
            li.classList.remove('active')
            if (el === li) li.classList.add('active')
        })


        writeCards(appData, el.textContent!.toLowerCase().trim()! as TimeframeString)
    })



}


export {}