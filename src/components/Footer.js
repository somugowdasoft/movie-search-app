import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary-color text-white py-5 sticky bottom-0">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Movie Search App. All Rights Reserved.</p>
        <p>Powered by <a href="https://www.omdbapi.com/" className="text-blue-500 hover:underline">OMDB API</a></p>
      </div>
    </footer>
  );
};

export default Footer;
