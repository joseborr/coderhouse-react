import CartWidget from "../CartWidget/CartWidget";
import logo from "./img/logo.png";
import "bulma/css/bulma.css";

const NavBar = () => {
    return (
      <nav className="navbar is-primary is-spaced" role="navigation" aria-label="main navigation">
        <div className="navbar-brand m-3">
          <img src={logo} alt="logo" width="112" />
        </div>
        <div id="navbarBasicExample" className="navbar-menu mx-4">
          <div className="navbar-start ">
            <a className="navbar-item">Juegos de Mesa</a>
            <a className="navbar-item">Bebés</a>
            <a className="navbar-item">Personajes</a>
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