import {React,  useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";
import "./App.css";

function App() {

  const {currentUser} = useContext(AuthContext)

  const ProtectedRoute = ({children}) =>
  {
    if(!currentUser) {
      return <Navigate to="/login" />
    }
    return children;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
