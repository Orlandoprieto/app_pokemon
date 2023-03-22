import { useEffect, useState } from "react"
import Button from "../UI/Button"
import {Link} from 'react-router-dom'
import './itemPokemon.css'

const ItemPokemon = ({ url }) => {

    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(resp => setPokemon(resp))
    }, [])

    return (
        <div className="itemPokemon">

            <div className="itemPokemon__name">
                <h2>{pokemon.name}</h2>
            </div>

            <div className="itemPokemon__sprite" >
                <img src={pokemon.sprites && pokemon.sprites.front_shiny} alt={`sprite de ${pokemon.name}`} />
            </div>

            <div className="itemPokemon__buttons" >
                <Link to={`/pokemon/${pokemon.id}`}>
                    <Button descripcion="Ver habilidades" />
                </Link>

            </div>

        </div>
    )
}

export default ItemPokemon
