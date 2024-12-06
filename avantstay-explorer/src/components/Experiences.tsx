import experienceImg from "../assets/avantExpCoachella.jpeg"
import arrow from "../assets/avanrExpSwitch.svg"
import seclector1 from "../assets/avantSelector1.svg"
import seclector2 from "../assets/avantSelector2.svg"
import seclector3 from "../assets/avantSelector3.svg"
import avantstayLogo from "../assets/avantstay.svg"
import eventsData from "./events.json"
import { useState} from "react"
const selectors = [seclector1, seclector2, seclector3]
export default function Experiences({ openPage, setExperience }){
    const [eventIndex, setEventIndex] = useState(0)
    const currentEvent = eventsData.events[eventIndex]
    console.log(currentEvent, experienceImg)
    return (
        <>
        <section id="Experiences">
            <h2> Experiences</h2>
            <small>Elevate your event experience with our curated selection of stays.</small>
            <div className="ExpSection">
                <button onClick={() => setEventIndex(eventIndex - 1)}>
                    <img id="downArrow" src={arrow} ></img>
                </button>
                <div className="ExpContainer" style={{backgroundImage: `url(${currentEvent.image})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
                    <article>
                        <div className="date">
                            <h3 className="expTitle">{currentEvent.name}</h3>
                            <p className="expCaption"> {currentEvent.caption}</p>
                            <h6 className="expDate"> {currentEvent.date}</h6>
                            <h6 className="expLocation"> {currentEvent.location}</h6>
                        </div>
                        <button className="ExploreButton" 
                        onClick={() => {
                            openPage(true)
                            setExperience(currentEvent)
                            }
                            }> <h4> Explore</h4></button>
                    </article>
            
                </div>
                <button onClick={() => setEventIndex(eventIndex + 1)}>
                    <img id="upArrow" src={arrow} ></img>
                </button>
            </div>
            <img id="selectors" src={selectors[eventIndex]} ></img>
        </section>
        </>
    )
}