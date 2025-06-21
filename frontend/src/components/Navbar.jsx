import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({showExplore=true}) {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Journey", path: "/journey" },
    { name: "Learn", path: "/learn" },
    { name: "Act", path: "/act" },
    { name: "About", path: "/about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md  w-[70%] left-1/2 -translate-x-1/2 rounded-full py-3 mt-3 shadow-md"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-20 transition-all duration-300">
        <Link
          to="/"
          className={`text-xl font-bold ${
            scrolled ? "text-yellow-300" : "text-white"
          }`}
        >
          OceanTales
        </Link>

        <ul className="flex gap-6 text-white">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`hover:text-yellow-400 transition ${
                  pathname === item.path ? "text-yellow-400 font-semibold" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
         { showExplore && (
            <Link
          to="/journey"
          className={`text-sm md:text-md font-semibold text-blue-900 bg-yellow-400 px-4 py-2 rounded-full hover:bg-yellow-300 transition`}
        >
          Explore Now
        </Link>
          )}
        
      </nav>
    </header>
  );
}
