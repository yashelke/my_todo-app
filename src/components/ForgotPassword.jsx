import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { Link } from "react-router-dom";
import "./ForgotPassword.css"; // Import the CSS file

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("✅ Password reset email sent! Check your inbox.");
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        setError("No account found with this email.");
      } else if (err.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <div className="forgot-container">
      <div className="forgot-card">
        <div className="forgot-header">
          <h2>Reset Password</h2>
          <p>Enter your email address and we'll send you a reset link</p>
        </div>
        
        <form onSubmit={handleResetPassword} className="forgot-form">
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter your registered email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="reset-btn">Send Reset Link</button>

          {message && <p className="message">{message}</p>}
          {error && <p className="error">{error}</p>}
          
          <div className="forgot-links">
            <p>
              Try Now?{" "}
              <Link to="/login" className="link">Login</Link>
            </p>
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="link">Sign up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
 export default ForgotPassword;

