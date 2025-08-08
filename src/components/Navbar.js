import React, { useState } from 'react';

const Navbar = ({ scrollToHome, scrollToServices, scrollToWork, scrollToDashboardSection, scrollToGraphicsDesigning }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavLinkClick = (scrollFunction) => {
    scrollFunction();
    setMenuOpen(false); // Close menu on click
  };

  return (
    <nav className="relative flex justify-between items-center px-6 sm:px-10 py-5 bg-white shadow-md border-b border-gray-300">
      {/* Brand */}
      <div className="text-2xl font-bold">
        <span className="text-black">Logical</span>{' '}
        <span className="text-[#1F1B96]">Media</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex space-x-8 text-lg items-center">
        <li><button type="button" onClick={() => handleNavLinkClick(scrollToHome)} className="text-black hover:text-[#1F1B96] transition">Home</button></li>
        <li><button type="button" onClick={() => handleNavLinkClick(scrollToServices)} className="text-black hover:text-[#1F1B96] transition">Service</button></li>
        <li><button type="button" onClick={() => handleNavLinkClick(scrollToWork)} className="text-black hover:text-[#1F1B96] transition">Work</button></li>
        <li><button type="button" onClick={() => handleNavLinkClick(scrollToGraphicsDesigning)} className="text-black hover:text-[#1F1B96] transition">Graphics</button></li>
        <li>
          <button
            type="button"
            onClick={() => handleNavLinkClick(scrollToDashboardSection)}
            className="px-4 py-2 bg-[#1F1B96] text-white rounded-lg hover:bg-[#251DFF] transition"
          >
            Explore →
          </button>
        </li>
      </ul>

      {/* Mobile Hamburger Button */}
      <button
        className="sm:hidden p-2 text-black text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✖' : '☰'}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-300 sm:hidden z-50">
          <ul className="flex flex-col space-y-4 px-6 py-5 text-lg">
            <li><button type="button" onClick={() => handleNavLinkClick(scrollToHome)} className="text-black hover:text-[#1F1B96] transition">Home</button></li>
            <li><button type="button" onClick={() => handleNavLinkClick(scrollToServices)} className="text-black hover:text-[#1F1B96] transition">Service</button></li>
            <li><button type="button" onClick={() => handleNavLinkClick(scrollToWork)} className="text-black hover:text-[#1F1B96] transition">Work</button></li>
            <li><button type="button" onClick={() => handleNavLinkClick(scrollToGraphicsDesigning)} className="text-black hover:text-[#1F1B96] transition">Graphics</button></li>
            <li>
              <button
                type="button"
                onClick={() => handleNavLinkClick(scrollToDashboardSection)}
                className="px-4 py-2 bg-[#1F1B96] text-white rounded-lg hover:bg-[#251DFF] transition inline-block"
              >
                Explore →
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
