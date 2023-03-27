import Header from "../components/header/Header"
import DetailPokemon from "../components/detailsPokemon.jsx/DetailPokemon"

const Pokemon = () => {
    return (
        <>
            <Header />
            
            <main>
                <section>
                    <DetailPokemon />
                </section>
            </main>
        </>
    )
}

export default Pokemon