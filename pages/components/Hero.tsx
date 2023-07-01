import React from "react";
import {AiFillGithub, AiFillLinkedin}from "react-icons/ai"
import {TiSocialLinkedinCircular} from 'react-icons/ti'
import Image from "next/image";

function Hero(){

    return(
        <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
    <Image src="https://avatars.githubusercontent.com/u/111165172?v=4" width={400} height={400} alt="img" className=" pl-1 rounded-full"></Image>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">HI,There welcome to my site
      </h1>
      <p className="mb-8 leading-relaxed">Im Harish fullstack web Developer.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 h-fit p-2 w-fit focus:outline-none hover:bg-indigo-600 rounded-full text-4xl items-center"><TiSocialLinkedinCircular/></button>
        <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 p-2  h-fit w-fit focus:outline-none hover:bg-gray-700 hover:text-white rounded-full text-4xl items-center"><AiFillGithub/></button>
      </div>
    </div>
  </div>
</section>
    )
}



export default Hero