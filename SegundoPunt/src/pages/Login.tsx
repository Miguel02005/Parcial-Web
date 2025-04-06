import { useState } from "react";
import "../styles/login.css";
import user from "../assets/user.svg";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };

  return (
    <div className="login-container">
      <div className="circle1"></div>
      <div className="circle2"></div>
        <form className="login-form" onSubmit={handleSubmit}>

          <div className="user-icon">
            <img src={user} className="logousuario" alt="userLogo" />
          </div>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label className="checkbox">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            Remember me
          </label>
          <button type="submit" className="login-button">
            Sign in
          </button>
          <a className="forgot">Forgot password?</a>
        </form>
      <div className="botton-line"></div>
    </div>
  );
}

export default Login;
