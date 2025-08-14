import logo from "/logo.png";
import { Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="h-[152px] md:h-[144px] w-full bg-[#EFEEEB]">
      <div className=" max-w-sm mx-auto h-full px-4 md:max-w-[1200px] md:px-6 flex md:justify-between justify-evenly items-center flex-col md:flex-row">
        <div className="flex flex-row gap-6">
          <p>Get in touch</p>
          <Linkedin />
          <Github />
          <Mail />
        </div>
        <p>Home page</p>
      </div>
    </footer>
  );
}
