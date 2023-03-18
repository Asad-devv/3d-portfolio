import React from "react";

const SocialLinks = () => {
  return (
    <>
    
    <div className="flex z-50 mt-4 space-x-4">
      <a
      download
        href="public\logo.svg"
        className= " text-gray-300 hover:text-blue-500 transform  hover:animate-bounce animate-bounce  transition duration-300"
      >
        <i className="fab fa-linkedin fa-2x"></i>
      </a>
      <a
        href="#"
        className="text-gray-300 hover:animate-bounce animate-bounce  hover:text-blue-500 transform  transition duration-300"
      >
        <i className="fab fa-facebook fa-2x"></i>
      </a>
      <a
        href="#"
        className="text-gray-300 hover:text-pink-500 transform  transition  hover:animate-bounce animate-bounce  duration-300"
      >
        <i className="fab fa-instagram fa-2x"></i>
      </a>
      <a
        href="#"
        className="text-gray-300 hover:text-black hover:animate-bounce animate-bounce  cursor-pointer transform  transition duration-300"
      >
        <i className="fab fa-github fa-2x"></i>
      </a>
      {/* <div className="cursor-pointer -mt-2">      <button className="border-[3px] bg-black p-2 font-semibold border-gradient-red-blue border-blue-900 cursor-pointer ">DOWNLOAD CV</button></div> */}
    </div>
    <div className="cursor-pointer ">      <button className="border-[2px] p-2 font-semibold border-gradient-red-blue border-blue-900 cursor-pointer ">DOWNLOAD CV</button></div>
    
    </>
  );
};

export default SocialLinks;
