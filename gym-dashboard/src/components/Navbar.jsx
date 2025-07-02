// Updated Navbar.jsx
import { useState, useEffect } from 'react';

export default function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <header className={`sticky top-0 z-10 shadow transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-gray-100' : 'bg-beige-100 text-gray-800'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex-1"></div> {/* Spacer for balance */}
        
        <div className="flex-1 flex justify-center">
          <h1 className="text-2xl font-bold tracking-tight">The Gym Program</h1>
        </div>
        
        <div className="flex-1 flex justify-end items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${
              darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
          
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${
            darkMode ? 'bg-gray-700 text-beige-200' : 'bg-beige-300 text-gray-700'
          }`}>
            S
          </div>
        </div>
      </div>
    </header>
  );
}