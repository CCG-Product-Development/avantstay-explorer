import avantstayLogo from "../assets/avantstay.svg"
export default function Header(){
    return(
        <>
        <header>
            <img src={avantstayLogo}></img>
            <ul>
                <h5>Events & Offsites</h5>
                <h5>Vacation Rental Management</h5>
                <h5>Buy a Vacation Home</h5>
                <h5>Homeowner Portal</h5>
            </ul>

        </header>
        </>
    )
}