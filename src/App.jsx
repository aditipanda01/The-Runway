import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'

function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Design Gallery (Home)</h2>
      <p>Browse and vote for your favorite designs!</p>
    </div>
  );
}

function SubmitDesign() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Designer Submission Portal</h2>
      <p>Submit your design for public review and voting.</p>
    </div>
  );
}

function DesignDetail() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Design Detail Page</h2>
      <p>View design details, vote, and leave comments.</p>
    </div>
  );
}

function Login() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Login / Signup</h2>
      <p>Sign in to submit designs or vote on others.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc", backgroundColor: "#f8f9fa" }}>
          <Link to="/" style={{ marginRight: 16, textDecoration: "none", color: "#333" }}>Home</Link>
          <Link to="/submit" style={{ marginRight: 16, textDecoration: "none", color: "#333" }}>Submit Design</Link>
          <Link to="/login" style={{ textDecoration: "none", color: "#333" }}>Login</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submit" element={<SubmitDesign />} />
          <Route path="/design/:id" element={<DesignDetail />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
