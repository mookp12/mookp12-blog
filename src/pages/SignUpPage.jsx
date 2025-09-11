import { NavBar } from "../components/NavBar";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <main className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <section className="w-full max-w-md">
          <div className="bg-[#F5F5F5] rounded-lg p-8 shadow-sm">
            <h1 className="text-3xl font-bold text-[#333333] mb-8 text-center">
              Sign up
            </h1>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#333333] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Full name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#333333] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
              
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-[#333333] mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#333333] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#333333] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#333333] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#333333] mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#333333] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#333333] text-white py-3 rounded-lg font-medium text-lg hover:bg-[#444444] transition-colors"
              >
                Sign up
              </button>
            </form>
            
            <p className="text-center text-[#333333] mt-6 text-sm">
              Already have an account?{" "}
              <Link 
                to="/login" 
                className="text-[#333333] underline hover:text-[#555555] transition-colors"
              >
                Log in
              </Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
