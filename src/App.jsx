import { useState } from "react";
import "./App.css";
import { Button } from "@/components/ui/button";
import { NavBar } from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
import { Footer } from "./components/Footer";
import { ArticleSection } from "./components/ArticleSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <HeroSection />
      <ArticleSection/>
      <Footer />

    </>
  );
}

export default App;
