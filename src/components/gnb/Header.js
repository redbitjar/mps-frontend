import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { AppBar } from "@mui/material";

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          Logo
        </Link>
        {/* <AppBar component="nav"> */}
        <Navbar />
        {/* </AppBar> */}
      </div>
    </header>
  );
};

export default Header;
