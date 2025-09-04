// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";  // 👈 Use Link instead of <a>
// import { auth } from "../firebaseConfig";   // 👈 import the shared Firebase auth instance
// import { signInWithEmailAndPassword } from "firebase/auth";
// // import './Login.css';
// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       alert("Login successful ✅");
//       navigate("*"); // 👈 redirect to home/dashboard after login
//     } catch (error) {
//       // Handle Firebase auth errors
//       if (error.code === "auth/user-not-found") {
//         alert("No account found with this email. Please sign up.");
//       } else if (error.code === "auth/wrong-password") {
//         alert("Incorrect password. Try again.");
//       } else if (error.code === "auth/invalid-email") {
//         alert("Please enter a valid email address.");
//       } else {
//         alert(error.message);
//       }
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <h1>Login</h1>
//         </div>

//         <div>
//           <label>Email: </label>
//           <input
//             type="email"
//             value={email}
//             placeholder="Enter your email"
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         <div>
//           <label>Password: </label>
//           <input
//             type="password"
//             value={password}
//             placeholder="Enter your password"
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>

//         <button type="submit">Login</button>

//         <div>
//           <p>
//             Don't have an account?{" "}
//             <Link to="/signup">Sign up</Link> 
//           </p>
//           <p>
//             <Link to="/forgot">Forgot Password?</Link>
//           </p>
//         </div>
//       </form>
//     </>
//   );
// }

// export default Login;


import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css"; // We'll create this CSS file

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful ✅");
      navigate("/todo");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("No account found with this email. Please sign up.");
      } else if (error.code === "auth/wrong-password") {
        alert("Incorrect password. Try again.");
      } else if (error.code === "auth/invalid-email") {
        alert("Please enter a valid email address.");
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
         <h1>Login</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">Login</button>

          <div className="login-links">
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="link">Sign Up</Link> 
            </p>
            <p>
              
              <Link to="/forgot" className="link">Forgot Password?</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
