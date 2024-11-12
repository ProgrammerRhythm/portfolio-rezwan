import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);

  // Toggle menu and button visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Update `isMobile` based on screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container">
      <div className="navbar">
        <div className="brand">rezwan.design</div>

        {/* Hamburger Icon for Small Screens */}
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>

        <ul className={isOpen ? "nav-links active" : "nav-links"}>
          <li>
            <a href="#process">Process</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#booking">Booking</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>

        {/* Show button based on screen size and menu state */}
        {(!isMobile || isOpen) && (
          <button className="animated-button book-call">
            <span className="text">Book a Call</span>
            <svg className="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
