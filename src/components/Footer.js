import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1F1B96] text-white py-12 px-6 sm:px-10 animate-slide-up">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Logical Media</h3>
          <p className="text-sm mb-4">
            We build identities that elevate your brand with high-converting content, graphics, and strategies.
          </p>
          <ul className="text-sm">
            <li>Email: logicalmedia.official@gmail.com</li>
            <li>Phone: +91 9505575574</li>
            <li>Address: LOGICAL MEDIA
Dr. Homi Bhabha Road,
Pashan, Pune - 411008</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Service</a></li>
            <li><a href="#" className="hover:underline">Work</a></li>
            <li><a href="#" className="hover:underline">Explore</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Our Services</h4>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:underline">Video Editing</a></li>
            <li><a href="#" className="hover:underline">Graphic Designing</a></li>
            <li><a href="#" className="hover:underline">Content Strategy Calls</a></li>
            <li><a href="#" className="hover:underline">Script Writing</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://instagram.com/logicalmedia" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} className="text-2xl hover:text-gray-300" />
            </a>
            <a href="https://youtube.com/logicalmedia" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FontAwesomeIcon icon={faYoutube} className="text-2xl hover:text-gray-300" />
            </a>
            <a href="https://linkedin.com/company/logicalmedia" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl hover:text-gray-300" />
            </a>
            <a href="https://twitter.com/logicalmedia" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} className="text-2xl hover:text-gray-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm border-t border-white/20 pt-4">
        &copy; {currentYear} Logical Media. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
