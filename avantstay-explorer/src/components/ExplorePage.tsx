import Header from "./Header"
import Title from "./Title"
import Experiences from "./Experiences"
import HomeListings from "./HomeListings"
import avantstayLogo from "../assets/avantstay.svg"
export default function ExplorePage({ openPage, openPage2, setExperience, addFavorite}){

    return(
        <>
            <Header color={"#022B54"} logo={avantstayLogo} openPage2={openPage2}/>
            <Title />
            <Experiences openPage={openPage} setExperience={setExperience}/>
            <HomeListings title={"Family Friendly"} isExplore={true} addFavorite={addFavorite} />
            <HomeListings title={"Group Stays"} isExplore={true} addFavorite={addFavorite}/>
            <HomeListings title={"Couples Getaway"} isExplore={true} addFavorite={addFavorite}/>
            <HomeListings title={"Coorporate Retreat"} isExplore={true} addFavorite={addFavorite}/>
        </>
    )
}