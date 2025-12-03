// src/App.jsx
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import Home from "./pages/Home";
import Predictor from "./pages/Predictor";
import Dashboard from "./pages/Dashboard";
import Consult from "./pages/Consult";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./components/AuthContext";
import "./index.css";
import "./App.css";

export default function App() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Token ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }

    function onStorage(e) {
      if (e.key === "token") {
        if (e.newValue)
          axios.defaults.headers.common[
            "Authorization"
          ] = `Token ${e.newValue}`;
        else delete axios.defaults.headers.common["Authorization"];
      }
    }
    window.addEventListener("storage", onStorage);

    // Notify header and others in this tab (ensures same-tab update)
    window.dispatchEvent(new Event("auth:changed"));

    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return (
    <AuthProvider>
      <Header />
      <main className="min-h-[calc(100vh-80px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/predictor" element={<Predictor />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/consult"
            element={
              <ProtectedRoute>
                <Consult />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </AuthProvider>
  );
}
