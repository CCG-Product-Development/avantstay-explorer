import Home from "./Home.tsx"
import homeData from "./homes.json"
export default function HomeListings({ title }){
    
    return(
        <>
        <section id="Listings">
        <h2 id="listing-title"> {title}</h2>
        <small> Bookings the whole family will love.</small>
        <div id="home-listing">
        {homeData.homes.map((home) => (
            <Home image={home.image} location={home.location} title={home.title} description={home.description} />
        ))}
        </div>
        <p id="explore"> Explore All</p>
        </section>

        </>
    )
}