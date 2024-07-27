import React, { useState } from 'react';
import '../../src/index.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [profileOpen, setProfileOpen] = useState(false);
    const [asideOpen, setAsideOpen] = useState(true);
  return (
    <main className="min-h-auto w-full bg-gray-100 text-gray-700 fixed top-0">
      {/* Header */}
      <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-gradient-to-r from-cyan-500  to-green-300 p-2">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-2">
          <button type="button" className="text-3xl " onClick={() => setAsideOpen(!asideOpen)}>
            <i className="fa-solid fa-caret-down"></i>
          </button>
          <div>Post It !</div>
        </div>

        {/* Profile Button */}
        <div className="relative">
          <button 
            type="button" 
            onClick={() => setProfileOpen(!profileOpen)} 
            className="h-9 w-9 overflow-hidden rounded-md"
          >
            <img src="https://plchldr.co/i/40x40?bg=111111" alt="profile" />
          </button>

          {/* Dropdown Profile */}
          {profileOpen && (
            <div 
              className="absolute right-2 mt-1 w-48 divide-y divide-gray-200 rounded-md border border-gray-200 bg-green-300 shadow-md"
              onBlur={() => setProfileOpen(false)}
            >
              <div className="flex items-center space-x-2 p-2">
                <img src="https://plchldr.co/i/40x40?bg=111111" alt="profile" className="h-9 w-9 rounded-lg" />
                <div className="font-medium">Hafiz Haziq</div>
              </div>


              <div className="p-2"> 
              <Link to='/Connexion'>
                <button className="flex items-center space-x-2 transition hover:text-blue-600">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                    </svg>
                    <div>Compte</div>
                  </button>
              </Link>
                
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="flex">
        {/* Aside */}
        {asideOpen && (
          <aside className="absolute flex w-72 flex-col space-y-2 border-r-2 border-gray-200 p-2 bg-gradient-to-r from-cyan-300 to-green-200" style={{ height: '90.5vh' }}>
            <Link to='/' className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
              <span className="text-2xl"><i className="bx bx-home"></i></span>
              <span>Accueil</span>
            </Link>

            <Link to='/create-post' className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
              <span className="text-2xl"><i className="bx bx-cart"></i></span>
              <span>Poster</span>
            </Link>
          </aside>
        )}
      </div>
    </main>
  );
}

export default Navbar;
