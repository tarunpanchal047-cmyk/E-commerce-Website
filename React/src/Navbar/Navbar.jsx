import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar" aria-label="Main navigation">

      <ul className="navbar__links">

        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/AllProduct">AllProducts</NavLink>
          <NavLink to="/Cart">Cart</NavLink>
        </li>

        <li>
          <NavLink to="/EditProfile">EditProfile</NavLink>
          <NavLink to="/Delete">DeleteProfile</NavLink>
          <NavLink to="/Logout">Logout</NavLink>
        </li>

        <li>
          <NavLink to="/Login">Login</NavLink>
          <NavLink to="/SignUp">SignUp</NavLink>
        </li>

      </ul>

    </nav>
  );
};

export default Navbar;