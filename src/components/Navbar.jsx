import '../styles/styleNavbar.css' ;
import iconLuffy from '../assets/icons/caveira.png' ;

export function Navbar() {
  return( 
  <nav className="nav-bar">
     <img src={iconLuffy} className="logo"/>
     <label>Animes online</label>
  </nav>
  );
}
