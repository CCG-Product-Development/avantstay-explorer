import { useState } from 'react'
import Header from "./Header.tsx"
import Title from "./Title.tsx"
import Experiences from "./Experiences.tsx"
import './App.css'

function App() {

  return (
    <div className="App">
    <>
    <Header />
    <Title />
    <Experiences />
    </>
    </div>
  )
}

export default App
