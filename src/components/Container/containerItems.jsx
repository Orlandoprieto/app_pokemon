import { useEffect, useState } from "react"
import ItemPokemon from "../ItemPokemon/ItemPokemon"
import { useParams } from 'react-router-dom'

import './containerItems.css'

const ContainerItems = () => {

    const [pokemons, setPokemons] = useState([])
    let { type } = useParams()

    useEffect(() => {
        if (type === undefined) {
            fetch('https://pokeapi.co/api/v2/pokemon/?offset=1&limit=20')
                .then(resp => resp.json())
                .then(resp => setPokemons(resp.results))

        } else {
            setPokemons([])
            fetch(`https://pokeapi.co/api/v2/type/${type}/?offset=1&limit=20`)
                .then(resp => resp.json())
                .then(resp => setPokemons(resp.pokemon)) 
        }
    }, [type])

    return(
        <div className="containerItems">
            {
                pokemons.map( pokemon => 
                    <ItemPokemon 
                        key={pokemon.id}
                        url={(pokemon.pokemon) ? pokemon.pokemon.url : pokemon.url} />
                )
            }            
        </div>
    )
}

export default ContainerItems