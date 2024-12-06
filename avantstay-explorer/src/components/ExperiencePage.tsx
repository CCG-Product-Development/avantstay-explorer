import Header from "./Header"
import avantstayLogo from "../assets/avantstayWhite.svg"
import HomeListings from "./HomeListings"
export default function ExperiencePage({ experience }){
    return(
        <>
        <div className="Experience-Page" style={{backgroundImage: `url(${experience.image})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <Header color={"white"} logo={avantstayLogo} openPage2={null}/>
            <h1 className="Experience-Title"> {experience.name}</h1>
            <p className="Experience-subTitle">{experience.location} | {experience.date}</p>
        </div>
        <div className="Experience-Listings" >
            <h4 style={{justifySelf: 'flex-start', width: 'fit-content', display: 'flex', flexDirection: 'row', alignItems: 'center', columnGap: '20px', marginLeft: ' 50px', marginTop: '20px'}}> Near {experience.name }  <p id="decription"> ・14 homes</p></h4>
            <HomeListings title="" isExplore={false}/>
            <HomeListings title="" isExplore={false}/>
            <HomeListings title="" isExplore={false}/>
            <HomeListings title="" isExplore={false}/>
        </div>
        
        </>
    )
}