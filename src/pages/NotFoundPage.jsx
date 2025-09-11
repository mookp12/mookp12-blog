import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

const NotFoundPage = () => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow flex items-center justify-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <AlertCircle className="w-10 h-10" />
          <p className="text-2xl font-bold">Page not found</p>
          <Button className="rounded-full bg-black text-white p-6" onClick={() => navigate("/")}>Go To Homepage</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;