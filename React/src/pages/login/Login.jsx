
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";

const Login = () => {
  const [formData, setForm] = useState({
    email: "",
    password: "",
  });

  const [allUsers, setAllUsers] = useState([]);

  const navigate = useNavigate();

  // Input change
  function handleChange(e) {
    const { name, value } = e.target;

    setForm({
      ...formData,
      [name]: value,
    });
  }

  // Get all users
  useEffect(() => {
    async function fetchUserDetails() {
      try {
        const { data } = await axios.get("http://localhost:3030/users");
        setAllUsers(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchUserDetails();
  }, []);

  // Login
  function handleSubmit(e) {
    e.preventDefault();

    let authUser = allUsers.find(
      (user) =>
        user.email === formData.email &&
        user.password === formData.password
    );

    if (authUser) {
      alert("Login Successful");
      navigate("/allProduct");
      localStorage.setItem("userId",authUser.id)
    } else {
      alert("Check Email or Password");
      setForm({
        email : "",
        password : ""
      })
    }
  }

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>

        <h1>Log in</h1>

        <form onSubmit={handleSubmit}>

          {/* Email */}
          <div className={styles.inputGroup}>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className={styles.inputGroup}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Remember + Forgot */}
          <div className={styles.options}>

            <label className={styles.remember}>
              <input type="checkbox" />
              <span>Remember for 30 days</span>
            </label>

            <a href="#">Forgot password</a>

          </div>

          {/* Login Button */}
          <button type="submit" className={styles.loginBtn}>
            Login
          </button>

          {/* Google Button */}
          <button
            type="button"
            className={styles.googleBtn}
          >
            <span className={styles.googleIcon}>G</span>
            <span>Sign in with Google</span>
          </button>

        </form>

        {/* Signup */}
        <p className={styles.signupText}>
          Don't have an account?
          <button
            type="button"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </button>
        </p>

      </div>
    </div>
  );
};

export default Login;
