import { useEffect, useState } from "react";
import axios from "axios";
const Login = ({setUser}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const validateForm = () => {
    return username.length > 0 && password.length > 5;
  };
  const clearForm = () => {
    setUsername("");
    setPassword("");
  };
  const login = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/users?username=${username}&password=${password}`
      );
      setUser(response.data.user);
      if (!response.data.validCredentials) {
        alert("The credentials provided aren't valid");
      } else clearForm();
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
  const register = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/users", {
        username,
        password,
      });

      console.log(response);
      clearForm();
    } catch (error) {
      console.error("Error registering user:", error);
      alert(error.response.data.error);
    }
  };

  const handleLogin = async () => {
    if (!validateForm()) {
      alert("Invalid form");
      return;
    }

    await login();
  };
  const handleRegister = async () => {
    if (!validateForm()) {
      alert("Invalid form");
      return;
    }

    await register();
  };

  return (
    <>
      <div style={styles.container}>
        <form style={styles.form}>
          <label style={styles.label} htmlFor="username">
            Username
          </label>
          <input
            style={styles.input}
            id="username"
            type="text"
            placeholder="Enter Username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label style={styles.label} htmlFor="password">
            Password
          </label>
          <input
            style={styles.input}
            id="password"
            type="password"
            placeholder="Enter Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <button style={styles.button} type="button" onClick={handleLogin}>
              Login
            </button>

            <button
              style={styles.button}
              type="button"
              onClick={handleRegister}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  form: {
    width: "300px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  label: {
    display: "block",
    marginBottom: "8px",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "16px",
    boxSizing: "border-box",
  },
  button: {
    width: "50%",
  },
};
export default Login;
