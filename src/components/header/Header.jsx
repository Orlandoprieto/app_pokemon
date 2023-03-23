import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import './header.css'

const Header = () => {

  const items = [
    {nombre: "Todos", ruta: "/"},
    {nombre: "Fuego", ruta: "/type/fire"},
    {nombre: "Electrico", ruta: "/type/electric"},
    {nombre: "Agua", ruta: "/type/water"},
    {nombre: "Roca", ruta: "/type/rock"},
    {nombre: "Dragon", ruta: "/type/dragon"},
  ]

  return (
    <header className="header">

      <div className="header__img">
        <img src={logo} alt="pokebola_logo" />
      </div>

      <nav className="header__nav">
        <ul>
          {
            items.map(item =>
              <li >
                <Link style={ {color: 'white'} } to={item.ruta} >{item.nombre}</Link>
              </li>
            )
          }
        </ul>
      </nav>
      
    </header>
  )
}

export default Header