import ExplorePage from "./ExplorePage"
import ExperiencePage from "./ExperiencePage.tsx"
import FavoritesPage from "./FavoritesPage"
import { useState, useEffect } from "react"
import './App.css'

function App() {
  const [displayExplorePage, setDisplayExplorePage] = useState(true)
  const [displayExperiencePage, setDisplayExperiencePage] = useState(false)
  const [ displayFavoritesPage, setFavoritesPage] = useState(false)
  const [currentExperience, setCurrentExperience] = useState(null)
  const [favoriteHomes, setFaoriteHomes] = useState([])
  console.log("experience:", currentExperience)
  useEffect(() => {
    if (displayExperiencePage == true){
      setDisplayExplorePage(false)
    } 
  }, [displayExperiencePage])

  useEffect(() => {
    if (displayFavoritesPage == true){
      setDisplayExplorePage(false)
    } 
  }, [displayFavoritesPage])
  return (
    <div className="App">
    <>
    {displayFavoritesPage && <FavoritesPage />}
    { displayExplorePage && <ExplorePage openPage={setDisplayExperiencePage} openPage2={setFavoritesPage} setExperience={setCurrentExperience} addFavorite={setFaoriteHomes} />}
    { displayExperiencePage && <ExperiencePage experience={currentExperience} />}
    { console.log(displayExplorePage, displayExperiencePage)}
    </>
    </div>
  )
}

export default App
