import logo from '/logo.png';
import { Menu } from 'lucide-react';

export function NavBar() {
    return (
      <header className="h-[48px] md:h-[80px] w-full bg-[#F9F8F6]  border-b border-[#DAD6D1]">
        <nav className=" max-w-sm mx-auto h-full px-4 md:max-w-[1200px] md:px-6 flex justify-between items-center ">
          {/* Logo */}
          <div className="h-11 w-auto">
            <img src={logo} alt="Logo" className="h-full w-auto"/>
          </div>
  
          {/* Buttons */}
          <div className="hidden md:flex md:justify-between md:items-center md:gap-2">
            <button className="px-10 py-3 rounded-full border-1 border-[#75716B] text-brown-600 font-medium text-lg">
              Log in
            </button>
            <button className="px-10 py-3 rounded-full bg-black text-white font-medium text-lg">
              Sign up
            </button>
            
            
          </div>
          <Menu className="w-6 h-6 md:hidden" />
        </nav>
      </header>
    );
  }