import {Link } from 'react-router-dom'

import logo from '../../assets/img/logo.png'
import './header.css'

const Header = () => {
    return(
        <header className="header">
            <div className="header__img">
                <img src={logo} alt="pokebola_logo" />
            </div>

            <nav className="header__nav">
                <ul>
                    <li >
                        <Link style={{color: 'white'}} to="/">Todos</Link>
                    </li>

                    <li>
                        <Link style={{color: 'white'}} to="/type/fire">Fuego</Link>
                    </li>

                    <li>
                        <Link style={{color: 'white'}} to="/type/electric">Electrico</Link>
                    </li>

                    <li>
                        <Link style={{color: 'white'}} to="/type/water">Agua</Link>
                    </li>

                    <li>
                        <Link style={{color: 'white'}} to="/type/rock">roca</Link>
                    </li>

                    <li>
                        <Link style={{color: 'white'}} to="/type/dragon">dragon</Link>
                    </li>

                    <li>
                        <Link style={{color: 'white'}} to="/type/fighting">Boxeador</Link>
                    </li>

                </ul>
            </nav>
        </header>
    )
}

export default Header