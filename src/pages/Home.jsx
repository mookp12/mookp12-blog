import { Button } from "@/components/ui/button";
import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";
import { ArticleSection } from "@/components/ArticleSection";

const Home = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ArticleSection/>
      <Footer />
    </>
  )
}

export default Home