import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const requestBody = { username, password, name };

    axios
      .post(`${API_URL}/api/auth/signup`, requestBody)
      .then((response) => {
        navigate("/login");
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
        <h1>SIGN UP</h1>

        <form className="SignupForm" onSubmit={handleSignupSubmit}>
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
            <label className="form-label Label">Password:</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={password}
              onChange={handlePassword}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={name}
              onChange={handleName}
            />
          </div>
          <button type="submit" className="BtnSubmit">
            Sign Up
          </button>
        </form>

        {errorMessage && <p className="error-message"><span>• •&nbsp;{errorMessage} &nbsp;• •</span></p>}

        
        <p>Already have account?</p>
        <Link className="LinkLogin" to={"/login"}>
          Login
        </Link>
      </div>
    </div>
  );
}

export default SignupPage;
