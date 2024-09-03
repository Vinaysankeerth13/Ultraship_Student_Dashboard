import React, { useState } from 'react';
import Body from './Body';

const Core = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex min-h-screen">
      <div
        className={`fixed top-0 left-0 h-full bg-black text-white transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-48 p-4 z-40`}
      >
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <ul className="space-y-2">
  <li className="hover:bg-black p-2 rounded relative group">
    <a href="#dashboard" className="flex justify-between items-center">
      Dashboard
      <span className="group-hover:rotate-90 transition-transform">▸</span>
    </a>
    <ul className="hidden group-hover:block pl-4 mt-2 bg-black rounded">
      <li className="hover:bg-black hover:text-lightBeige p-2 rounded">
        <a href="#students">Students</a>
      </li>
      <li className="hover:bg-black  hover:text-lightBeige p-2 rounded">
        <a href="#teachers">Teachers</a>
      </li>
      <li className="hover:bg-black  hover:text-lightBeige p-2 rounded">
        <a href="#classes">Classes</a>
      </li>
    </ul>
  </li>
  <li className="hover:bg-black p-2 rounded relative group">
    <a href="#profile" className="flex justify-between items-center">
      Profile
      <span className="group-hover:rotate-90 transition-transform">▸</span>
    </a>
    <ul className="hidden group-hover:block pl-4 mt-2 bg-black rounded">
      <li className="hover:bg-black p-2  hover:text-lightBeige rounded">
        <a href="#personal-info">Personal Info</a>
      </li>
      <li className="hover:bg-black  hover:text-lightBeige p-2 rounded">
        <a href="#security">Security</a>
      </li>
      <li className="hover:bg-black  hover:text-lightBeige p-2 rounded">
        <a href="#notifications">Notifications</a>
      </li>
    </ul>
  </li>
  <li className="hover:bg-black p-2 rounded relative group">
    <a href="#settings" className="flex justify-between items-center">
      Settings
      <span className="group-hover:rotate-90 transition-transform">▸</span>
    </a>
    <ul className="hidden group-hover:block pl-4 mt-2 bg-black rounded">
      <li className="hover:bg-black  hover:text-lightBeige p-2 rounded">
        <a href="#account-settings">Account</a>
      </li>
      <li className="hover:bg-black  hover:text-lightBeige p-2 rounded">
        <a href="#privacy-settings">Privacy</a>
      </li>
      <li className="hover:bg-black  hover:text-lightBeige p-2 rounded">
        <a href="#language">Language</a>
      </li>
    </ul>
  </li>
  <li className="hover:bg-black p-2 rounded relative group">
    <a href="#help" className="flex justify-between items-center">
      Help
      <span className="group-hover:rotate-90 transition-transform">▸</span>
    </a>
    <ul className="hidden group-hover:block pl-4 mt-2 bg-black rounded">
      <li className="hover:bg-black  hover:text-lightBeige p-2 rounded">
        <a href="#faq">FAQ</a>
      </li>
      <li className="hover:bg-black  hover:text-lightBeige p-2 rounded">
        <a href="#contact-support">Contact Support</a>
      </li>
      <li className="hover:bg-black  hover:text-lightBeige p-2 rounded">
        <a href="#user-guide">User Guide</a>
      </li>
    </ul>
  </li>
</ul>
      </div>
      <div className={`flex-1 ${isOpen ? 'ml-48' : 'ml-0'} transition-margin duration-300 ease-in-out`}>
        <header className="bg-black text-white">
          <div className="container flex items-center justify-between p-4 mx-auto">
            <button
              onClick={toggleSidebar}
              className="text-white rounded-md focus:outline-none text-3xl"
            >
              ☰
            </button>
            <nav className="hidden space-x-14 md:flex">
              <a href="#home" className="hover:underline">Home</a>
              <a href="#about" className="hover:underline">About</a>
              <a href="#services" className="hover:underline">Services</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </nav>
          </div>
        </header>
        <main>
          <Body/>
        </main>
      </div>
    </div>
  );
};

export default Core;
