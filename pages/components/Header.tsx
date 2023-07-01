import React from "react";
import Image from "next/image";
function Header(){
    return(
        <header className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0 cursor-pointer">
     <Image src="https://avatars.githubusercontent.com/u/111165172?v=4" width={40} height={40} alt="img" className=" pl-1 rounded-full"></Image>
      <span className="ml-3 text-xl">Harish</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-white cursor-pointer">About</a>
      <a className="mr-5 hover:text-white cursor-pointer" href="#skill">Skills</a>
      <a className="mr-5 hover:text-white cursor-pointer" href="#project">Projects</a>
      <a className="mr-5 hover:text-white cursor-pointer">Resume</a> 
    </nav>
    
  </div>
</header>
    )
}

export default Header