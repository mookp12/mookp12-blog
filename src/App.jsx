import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import logo from "./assets/logo.png"
import "./App.css";

function NavBar() {
  return (
    <header className="w-full bg-[#F9F8F6] border-b border-gray-200">
      <nav className="flex justify-between items-center px-6 py-[16px] max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-gray-800">
          <img
            src={logo}
            alt="Logo"
            className="h-[44px] w-auto"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-6">
          <button className="px-8 py-3 rounded-full border border-gray-400 text-gray-800 font-medium text-lg">
            Log in
          </button>
          <button className="px-8 py-3 rounded-full bg-black text-white font-medium text-lg">
            Sign up
          </button>
        </div>
      </nav>
    </header>
  );
}
function HeroSection() {
  return (
    <section className="pt-20 bg-[#F9F8F6] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Section - Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Stay Informed,
              <br />
              Stay Inspired
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Discover a World of Knowledge at Your Fingertips. Your Daily Dose
              of Inspiration and Information.
            </p>
          </div>

          {/* Middle Section - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
                alt="Man with beard and cat on shoulder in autumn forest"
                className="w-80 h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right Section - Author Bio */}
          <div className="space-y-4">
            <div className="text-sm text-gray-500 font-medium">-Author</div>
            <h2 className="text-2xl font-bold text-gray-800">Thompson P.</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                I am a pet enthusiast and freelance writer who specializes in
                animal behavior and care. With a deep love for cats, I enjoy
                sharing insights on feline companionship and wellness.
              </p>
              <p>
                When i'm not writing, I spends time volunteering at my local
                animal shelter, helping cats find loving homes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <HeroSection />
    </>
  );
}

export default App;
