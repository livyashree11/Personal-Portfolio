import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const links = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/about", label: "About" },
    { to: "/education", label: "Education" },
    { to: "/connect", label: "Connect" },
  ];

  return (
    <header className=" bg-gradient-to-br from-[rgb(163,121,220)] via-[#8347e4] to-[#5631ad] top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-black-600">PortFolio</h1>
        <nav className="flex space-x-6">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`hover:text-blue-600 transition ${
                location.pathname === link.to ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
