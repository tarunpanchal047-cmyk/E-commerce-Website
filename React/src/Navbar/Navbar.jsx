import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { Fragment } from 'react';

const Navbar = () => {
  let user_id = localStorage.getItem(userId)
  const [data, SetData] = useState([])


  return (


    < nav className="navbar" aria - label= "Main navigation" >

    <ul className="navbar__links">


      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      ( user_id ? (
      <Fragment>
        <li>

          <NavLink to="/Cart">Cart</NavLink>
        </li>
        <li>
          <NavLink to="/AllProduct">AllProducts</NavLink>
        </li>


        <ul>
            <li>
              <NavLink to="/EditProfile">EditProfile</NavLink>
              </li>

            <li><NavLink to="/Delete">DeleteProfile</NavLink></li>
            <li>
              <NavLink to="/Logout">Logout</NavLink>
            </li>
          </ul>
          <Fragment />
          ): (

  <Fragment>
<ul>
    <li>
      <NavLink to="/Login">Login</NavLink>

    </li>
    <li>
      <NavLink to="/SignUp">SignUp</NavLink>
    </li>
       </ul >
  </Fragment>
)

     

      </nav >
      );
};

export default Navbar;