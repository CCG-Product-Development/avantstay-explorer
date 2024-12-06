import Header from "./Header"
import avantstayLogo from "../assets/avantstayWhite.svg"
import favoritesImg from "../assets/avantFavorites.png"
import HomeListings from "./HomeListings"
export default function FavoritesPage(){
    return(
        <>
        <div className="Experience-Page" style={{backgroundImage: `url(${favoritesImg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <Header color={"white"} logo={avantstayLogo} openPage2={null}/>
            <h1 className="Experience-Title"> Favorites</h1>
            <p className="Experience-subTitle">Compare all of your favorited homes</p>

        </div>
        <div className="Experience-Listings" >
        <h4 style={{justifySelf: 'flex-start', width: 'fit-content', display: 'flex', flexDirection: 'row', alignItems: 'center', columnGap: '20px', marginLeft: ' 50px', marginTop: '20px'}}> Your Favorites  <p id="decription"> ・3 homes</p></h4>
            <HomeListings />

        </div>
        
        </>
    )
}