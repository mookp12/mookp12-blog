import { useState } from "react";
import "./App.css";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:postId" element={<PostPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
