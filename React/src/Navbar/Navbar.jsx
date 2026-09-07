import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar" aria-label="Main navigation">
      {/* <div className="navbar__brand">M7 Web Technologies</div> */}

      <ul className="navbar__links">
        <li><NavLink to="/">Home</NavLink></li>
        <li>
            <>
            <NavLink to="/src/pages/allProduct/AllProduct.jsx">AllProducts</NavLink>
            <NavLink to="/src/pages/cart/Cart.jsx">Cart</NavLink>
            </>
            <>
            <NavLink to="/src/pages/editProfile/EditProfile.jsx">EditProfile</NavLink>
            <NavLink to="/Delete">DeleteProfile</NavLink>
            <NavLink to="/Logout">Logout</NavLink>
            
            </>
        </li>
        <li>
            <NavLink to="/src/pages/login/Login.jsx">Login</NavLink>
            <NavLink to="/src/pages/signup/SignUp.jsx">SignUp</NavLink>
        </li>
      </ul>

      {/* <button type="button" className="navbar__button">
        Get Started
      </button> */}
    </nav>
  );
};

export default Navbar;
