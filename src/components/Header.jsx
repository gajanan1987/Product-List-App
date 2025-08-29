import { NavLink } from "react-router";

const Header = () => {
  return (
    <nav className="header-nav">
      <NavLink className="logo" to="/home" exact="true">
        Product List App
      </NavLink>
    </nav>
  );
};

export default Header;
