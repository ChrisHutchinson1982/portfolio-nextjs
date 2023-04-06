import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src="/../public/assets/navLogo.png"
          alt="/"
          width="125"
          height="125"
        />
        <ul className="hidden md:flex">
          {[
            { path: "", title: "Home" },
            { path: "", title: "About" },
            { path: "", title: "Skills" },
            { path: "", title: "Projects" },
            { path: "", title: "Contact" },
          ].map((link, index) => {
            return (
              <Link href={`/${link.path}`} key={index}>
                <li className="ml-10 text-sum uppercase hover:border-b">
                  {link.title}
                </li>
              </Link>
            );
          })}
        </ul>

        <div className="md:hidden">
          <AiOutlineMenu size={25} />
        </div>
        <div className="fixed left-0 top-0 w-full h-screen bg-black/70">
          <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
