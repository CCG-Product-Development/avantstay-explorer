export default function Home({ image, location, title, description}){

    return (
        <>
        <div id="home">
            <img src={image} id="home-img" />
            <p id="location"> {location}</p>
            <h4 id="title"> {title}</h4>
            <p id="decription"> {description}</p>
        </div>
        </>
    )
}