import Image from "next/image";
import Link from "next/link";
import React from "react";

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
          ].map((link) => {
            return (
              <Link href={`/${link.path}`}>
                <li className="ml-10 text-sum uppercase hover:border-b">
                  {link.title}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
