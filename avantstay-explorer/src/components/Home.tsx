import heart from "../assets/favorite.svg"
export default function Home({ image, location, title, description, addFavorite}){

    return (
        <>
        <div id="home">
            <img src={image} id="home-img" />
            <p id="location"> {location}</p>
            <div className="home-listing">
                <h4 id="title"> {title} </h4>
                <img src={heart} className="heart" onClick={() => addFavorite()} />
            </div>
            <p id="decription"> {description}</p>
        </div>
        </>
    )
}