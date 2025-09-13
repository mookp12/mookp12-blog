import logo from "/logo.png";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authentication.jsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function NavBar() {
  const { logout, isAuthenticated, state } = useAuth();
  const { getUserLoading } = state;


  return (
    <header className="h-[48px] md:h-[80px] w-full bg-[#F9F8F6]  border-b border-[#DAD6D1]">
      <nav className=" max-w-sm mx-auto h-full px-4 md:max-w-[1200px] md:px-6 flex justify-between items-center ">
        {/* Logo */}
        <Link to="/" className="h-11 w-auto">
          <img src={logo} alt="Logo" className="h-full w-auto" />
        </Link>

        {/* Buttons */}
        <div className="hidden md:flex md:justify-between md:items-center md:gap-2">
          {getUserLoading ? (
            // Show loading state or placeholder
            <div className="px-10 py-3 rounded-full bg-gray-200 animate-pulse">
              <div className="w-20 h-6 bg-gray-300 rounded"></div>
            </div>
          ) : !isAuthenticated ? (
            <>
              <Link 
                to="/login" 
                className="px-10 py-3 rounded-full border-1 border-[#75716B] text-[#75716B] font-medium text-lg hover:bg-gray-50 transition-colors"
              >
                Log in
              </Link>
              <Link 
                to="/signup" 
                className="px-10 py-3 rounded-full bg-black text-white font-medium text-lg hover:bg-gray-800 transition-colors"
              >
                Sign up
              </Link>
            </>
          ) : (
            <button 
              className="px-10 py-3 rounded-full bg-black text-white font-medium text-lg hover:bg-gray-800 transition-colors"
              onClick={logout}
            >
              Log out
            </button>
          )}
        </div>

        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu className="w-6 h-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {getUserLoading ? (
                <DropdownMenuLabel>
                  <div className="px-10 py-3 rounded-full bg-gray-200 animate-pulse">
                    <div className="w-20 h-6 bg-gray-300 rounded"></div>
                  </div>
                </DropdownMenuLabel>
              ) : !isAuthenticated ? (
                <>
                  <DropdownMenuLabel>
                    <Link 
                      to="/login" 
                      className="block px-10 py-3 rounded-full border-1 border-[#75716B] text-[#75716B] font-medium text-lg hover:bg-gray-50 transition-colors"
                    >
                      Log in
                    </Link>
                  </DropdownMenuLabel>
                  <DropdownMenuLabel>
                    <Link 
                      to="/signup" 
                      className="block px-10 py-3 rounded-full bg-black text-white font-medium text-lg hover:bg-gray-800 transition-colors"
                    >
                      Sign up
                    </Link>
                  </DropdownMenuLabel>
                </>
              ) : (
                <DropdownMenuLabel>
                  <button 
                    className="block px-10 py-3 rounded-full bg-black text-white font-medium text-lg hover:bg-gray-800 transition-colors w-full text-left"
                    onClick={logout}
                  >
                    Log out
                  </button>
                </DropdownMenuLabel>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
}
