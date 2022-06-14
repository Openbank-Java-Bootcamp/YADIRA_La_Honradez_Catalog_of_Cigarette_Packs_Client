import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { isLoggedIn, user, role, logOutUser } = useContext(AuthContext);

  return (
    <>
      {isLoggedIn && (
        <nav className="Navbar">
          <div>
            <Link to="/"> LA HONRADEZ</Link>
            <Link to="/collections"> COLLECTION </Link>
            <Link to="/articles"> ARTICLES </Link>
          </div>
          <div>
            <span>• {user && user} •</span>
            <button className="Btn" onClick={logOutUser}>
              Logout
            </button>
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
              <button className="Btn-SignUp">Sign Up</button>
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
