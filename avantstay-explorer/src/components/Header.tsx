export default function Header({ color, logo, openPage2 }){
    return(
        <>
        <header>
            <img src={logo}></img>
            <ul>
                <h5 style={{color: color} } onClick={() => openPage2(true)}>Favorites</h5>
                <h5 style={{color: color}}>Explore</h5>
                <h5 style={{color: color}}>Vacation Rental</h5>
                <h5 style={{color: color}}>Buy a Vacation Home</h5>
                <h5 style={{color: color}}>Homeowner Portal</h5>
            </ul>

        </header>
        </>
    )
}