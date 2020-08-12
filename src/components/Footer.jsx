import React from 'react'

const Footer = () => {
    return (
      <>
        <footer className="text-gray-500 bg-gray-900 body-font">
          <div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
              <span className="ml-3 text-xl">Team Genius</span>
            </a>
            <p className="text-sm text-gray-600 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
              © 2020 Team Genius
            </p>
            
          </div>
        </footer>
      </>
    );
}

export default Footer
