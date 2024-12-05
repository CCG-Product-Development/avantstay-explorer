import Header from "./Header"
import Title from "./Title"
import Experiences from "./Experiences"
import HomeListings from "./HomeListings"
import './App.css'

function App() {

  return (
    <div className="App">
    <>
    <Header />
    <Title />
    <Experiences />
    <HomeListings title={"Family Friendly"} />
    <HomeListings title={"Group Stays"}/>
    <HomeListings title={"Couples Getaway"}/>
    <HomeListings title={"Coorporate Retreat"}/>
    </>
    </div>
  )
}

export default App
