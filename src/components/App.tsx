import '@styles/App.css'
import MenuLayout from './layouts/MenuLayout'
import { useState } from 'react'
import { Character } from '@app-types/character'

function App() {
  const [characters, setCharacters] = useState<Array<Character>>([])
  
  return (
    <MenuLayout characters={characters} setCharacters={setCharacters} />
  )
}

export default App
