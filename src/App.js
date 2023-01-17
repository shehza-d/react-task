import { useState } from "react";
import "./styles/App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/AuthPages/Login.jsx";
import Signup from "./pages/AuthPages/Signup.jsx";
import AuthBase from "./pages/AuthPages/Authbase";
import Welcome from "./pages/Welcome";
import BaseSetupBackground from "./pages/BaseSetupPages/BaseSetupBackground";

export default function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="App">
      {isLogin ? (
        <Routes>
          <Route path="/" element={<BaseSetupBackground />} />

          {/* <Route path="attendance" element={<Attendance />} />
          <Route path="courses" element={<Courses />} />
          <Route path="students" element={<Students />} /> */}
          {/* <Route path="profile" element={<Profile />} /> */}

          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/auth" element={<AuthBase />} />
          {/* <Route
            path="/login"
            element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />}
          /> */}
          <Route path="*" element={<Navigate to="/auth" replace={true} />} />
        </Routes>
      )}
    </div>
  );
}
