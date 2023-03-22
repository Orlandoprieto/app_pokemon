import { useEffect, useState } from "react"
import Button from "../UI/Button"
import { Link } from 'react-router-dom'
import { BarLoader } from 'react-spinners'
import './itemPokemon.css'

const ItemPokemon = ({ url }) => {

    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(resp => setPokemon(resp))
    }, [url])

    return (

        <div className="itemPokemon">
            {
                (!pokemon.sprites) ? <BarLoader color="#000000" />
                :   <>
                        <div className="itemPokemon__name">
                            <h2>{pokemon.name}</h2>
                        </div>
    
                        <div className="itemPokemon__sprite" >
                            <img src={pokemon.sprites.front_shiny} alt={`sprite de ${pokemon.name}`} />
                        </div>
    
                        <div className="itemPokemon__buttons" >
                            <Link to={`/pokemon/${pokemon.id}`}>
                                <Button descripcion="Ver habilidades" />
                            </Link>
                        </div>
                    </>
            }
        </div>
    )
}

export default ItemPokemon
