import { useState } from "react";
import "./App.css";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:postId" element={<PostPage />} />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
