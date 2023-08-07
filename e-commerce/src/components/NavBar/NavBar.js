import CartWidget from "../CartWidget/CartWidget";
import logo from "./img/logo.png";
import "bulma/css/bulma.css";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
      <nav className="navbar is-primary is-spaced" role="navigation" aria-label="main navigation">
        <div className="navbar-brand m-3">
          <Link to='/'>
          <img src={logo} alt="logo" width="112" />
          </Link>
        </div>
        <div id="navbarBasicExample" className="navbar-menu mx-4">
          <div className="navbar-start">
            <NavLink to={'/category/JuegosDeMesa'}className={({isActive}) => isActive? 'ActiveOption m-2 has-text-white has-text-decoration-none':'Option m-2 ml-4 has-text-white has-text-decoration-none'}>Juegos de Mesa</NavLink>
            <NavLink to={'/category/AireLibre'}className={({isActive}) => isActive? 'ActiveOption m-2 has-text-white has-text-decoration-none':'Option m-2 ml-4 has-text-white has-text-decoration-none'}>Juegos de aire libre</NavLink>
            <NavLink to={'/category/Peluches'}className={({isActive}) => isActive? 'ActiveOption m-2 has-text-white has-text-decoration-none':'Option m-2 ml-4 has-text-white has-text-decoration-none'}>Peluches</NavLink>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <CartWidget />
          </div>
        </div>
      </nav>
    );
}

export default NavBar;