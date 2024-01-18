import { Link } from "react-router-dom";
import { ButtonPrimary } from "./utilities";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">🏨 BookingPage</span>
        </Link>
        <div className="navItems">
          <ButtonPrimary style={{ width: "100px" }}>Register</ButtonPrimary>
          <ButtonPrimary style={{ width: "100px" }}>Login</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
