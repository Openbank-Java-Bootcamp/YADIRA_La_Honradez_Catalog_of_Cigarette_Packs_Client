import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { username, password };

    axios
      .post(`${API_URL}/api/auth/login`, requestBody)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        if (errorDescription) setErrorMessage(errorDescription);
        const errorDes = error.response.data.errors[0].defaultMessage;
        if (errorDes) setErrorMessage(errorDes);
      });
  };

  return (
    <div className="SignupContainer">
      <div className="Signup">
        <h1>LOGIN</h1>

        <form className="SignupForm" onSubmit={handleLoginSubmit}>
          <div className="mb-3">
            <label className="form-label">Username:</label>
            <input
              type="text"
              name="username"
              className="form-control"
              value={username}
              onChange={handleUsername}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={password}
              onChange={handlePassword}
            />
          </div>

          <button type="submit" className="BtnSubmit">
            Login
          </button>
        </form>
        {errorMessage && (
          <p className="error-message">
            <span>• •&nbsp;{errorMessage} &nbsp;• •</span>
          </p>
        )}

        <p>Don't have an account yet?</p>
        <Link className="LinkLogin" to={"/signup"}>
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
