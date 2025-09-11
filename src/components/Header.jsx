import { NavLink } from "react-router";

const Header = () => {
  return (
    <nav className="header-nav">
      <NavLink className="logo" to="/home" exact="true">
        Home
      </NavLink>
      <NavLink to="/project">project</NavLink>
    </nav>
  );
};

export default Header;
