import HomePage from "./pages/HomePage";
import Pokemon from "./pages/Pokemon";
import GenerationPokemon from "./pages/TypePokemons";
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/style.css'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path='type/:type/' element={ <GenerationPokemon /> } />
        <Route path="pokemon/:id/" element={ <Pokemon /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
