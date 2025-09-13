import { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { AuthProvider } from "./context/authentication.jsx";
import jwtInterceptor from "./utils/jwtInterceptor";
import AuthenticationRoute from "./components/auth/AuthenticationRoute";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import ProfilePage from "./pages/ProfilePage";
import { useAuth } from "./context/authentication.jsx";

function AppContent() {
  const { isAuthenticated, state } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:postId" element={<PostPage />} />

      <Route
        path="/login"
        element={
          <AuthenticationRoute
            isLoading={state.getUserLoading}
            isAuthenticated={isAuthenticated}
          >
            <LoginPage />
          </AuthenticationRoute>
        }
      />
      <Route path="/signup" element={<SignUpPage />} />

      <Route
        path="/profile"
        element={
          <ProtectedRoute
            isLoading={state.getUserLoading}
            isAuthenticated={isAuthenticated}
            userRole={state.user?.role}
            requiredRole="user"
          >
            <ProfilePage />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

function App() {
  jwtInterceptor();
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
