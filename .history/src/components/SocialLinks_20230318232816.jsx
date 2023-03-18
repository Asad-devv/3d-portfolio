import React from "react";

const SocialLinks = () => {
//    const color= ""
   const animate = ""
  return (
    <div className="flex z-50 mt-4 space-x-4">
      <a
        href="#"
        className= " text-gray-300 hover:text-blue-500 transform hover:scale-110 animate-bounce transition duration-300"
      >
        <i className="fab fa-linkedin fa-2x"></i>
      </a>
      <a
        href="#"
        className="text-gray-300 animate-pulse hover:text-blue-500 transform hover:scale-110 transition duration-300"
      >
        <i className="fab fa-facebook fa-2x"></i>
      </a>
      <a
        href="#"
        className="text-gray-300 hover:text-pink-500 transform hover:scale-110 transition motion-safe:animate-spin duration-300"
      >
        <i className="fab fa-instagram fa-2x"></i>
      </a>
      <a
        href="#"
        className="text-gray-300 hover:text-black transform hover:scale-110 transition duration-300"
      >
        <i className="fab fa-github fa-2x"></i>
      </a>
    </div>
  );
};

export default SocialLinks;