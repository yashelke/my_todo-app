

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import "./Signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("❌ Passwords do not match");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Send verification email
      await sendEmailVerification(userCredential.user);

      alert("✅ Signup successful! Please check your inbox for a verification email.");
      navigate("/login");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("This email is already registered. Try logging in.");
      } else if (error.code === "auth/weak-password") {
        alert("Password should be at least 6 characters.");
      } else if (error.code === "auth/invalid-email") {
        alert("Invalid email address.");
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <h1>TaskFlow</h1>
          <p>Create your account</p>
        </div>
        
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              placeholder="Create a password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              placeholder="Confirm your password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signup-btn">Sign Up</button>
          
          <div className="signup-links">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="link">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
