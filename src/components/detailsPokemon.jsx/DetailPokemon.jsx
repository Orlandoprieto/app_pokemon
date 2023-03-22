import {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './detailsPokemon.css'

const DetailPokemon = () => {

    const [pokemon, setPokemon] = useState({})
    const [ability, setAbility] = useState([])
    let {id} = useParams()

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(resp => resp.json())
            .then(resp => setPokemon(resp))

        fetch(`https://pokeapi.co/api/v2/ability/${id}`)
            .then(resp => resp.json())
            .then(resp => setAbility(resp.effect_entries))

            console.log(ability)
    }, [id])


    return (
        <div className="detallePokemon">
            <div className="detallePokemon__img">
                <img src={pokemon.sprites && pokemon.sprites.front_shiny} alt="" />
            </div>

            <div className="detallePokemon__info">
                <h2>{pokemon.name}</h2>
                <h3>Abilitys</h3>

                <ul>
                    {
                        ability.map( ability => 
                            <>
                                <li>{ability.effect}</li>  
                                <li>{ability.short_effect}</li> 
                            </> 
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default DetailPokemon