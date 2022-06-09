import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <>
      {isLoggedIn && (
        <nav className="Navbar">
          <div>
            <Link to="/"> LA HONRADEZ</Link>
            <Link to="/cigarette_packs"> COLLECTIONS </Link>
            <Link to="/articles"> ARTICLES </Link>
          </div>
          <div>
            <button className="Btn" onClick={logOutUser}>
              Logout
            </button>
            <span>{user && user.name}</span>
          </div>
        </nav>
      )}

      {!isLoggedIn && (
        <nav className="Navbar">
          <div>
            <Link to="/"> LA HONRADEZ </Link>
          </div>
          <div>
            <Link to="/signup">
              <button className="Btn">Sign Up</button>
            </Link>
            <Link to="/login">
              <button className="Btn">Login</button>
            </Link>
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;
