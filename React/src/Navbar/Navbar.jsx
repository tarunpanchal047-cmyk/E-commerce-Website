import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar" aria-label="Main navigation">
      {/* <div className="navbar__brand">M7 Web Technologies</div> */}

      <ul className="navbar__links">
        <li><NavLink to="/">Home</NavLink></li>
        <li>
            <>
            <NavLink to="/AllProduct">AllProducts</NavLink>
            <NavLink to="/Cart">Cart</NavLink>
            </>
            <>
            <NavLink to="/EditProfile">EditProfile</NavLink>
            <NavLink to="/Delete">DeleteProfile</NavLink>
            <NavLink to="/Logout">Logout</NavLink>
            
            </>
        </li>
        <li>
            <NavLink to="/Login">Login</NavLink>
            <NavLink to="/SignUp">SignUp</NavLink>
        </li>
      </ul>

      {/* <button type="button" className="navbar__button">
        Get Started
      </button> */}
    </nav>
  );
};

export default Navbar;
