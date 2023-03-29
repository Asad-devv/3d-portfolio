import React from "react";

const SocialLinks = () => {

  return (
    <>
    <div className="flex mb-5 pb-5 z-50 mt-4 space-x-4">
      <a
        href="https://www.linkedin.com/in/asad-ullah-35941a223/"
        target="_blank"
        className= " text-gray-300 hover:text-blue-500 transform  hover:animate-bounce transition duration-300"
      >
        <i className="fab fa-linkedin fa-2x"></i>
      </a>
      <a
        href="#"
        target="_blank"
        className="text-gray-300 hover:animate-bounce hover:text-blue-500 transform  transition duration-300"
      >
        <i className="fab fa-facebook fa-2x"></i>
      </a>
      <a
        href="#"
        target="_blank"
        className="text-gray-300 hover:text-pink-500 transform  transition  hover:animate-bounce duration-300"
      >
        <i className="fab fa-instagram fa-2x"></i>
      </a>
      <a
        href="https://github.com/Asad-devv"
        className="text-gray-300 hover:text-black hover:animate-bounce transform  transition duration-300"
      >
        <i className="fab fa-github fa-2x"></i>
      </a>
      <button target="_blank"  className="border-[1px] p-2 border-gradient-red-blue"><a href="https://drive.google.com/file/d/1lxCD_L-2mBmqH2a30npEKu9VopGkv9ZP/view?usp=sharing" target="_blank" download>DOWNLOAD CV</a></button>
    </div>
    {/* <button className=" border-[1px]  p-2 border-gradient-from-red-500 to-yellow-500">DOWNLOAD CV</button> */}
    </>
  );
};

export default SocialLinks;
