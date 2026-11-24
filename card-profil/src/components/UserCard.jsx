// import React from 'react'
import { FaYoutube, FaFacebook } from "react-icons/fa";
import Button from "./Button";
import { CiHeart } from "react-icons/ci";

const UserCard = () => {
  return (
    <div className="w-[20rem] h-120 bg-white-400 rounded-xl overflow-hidden shadow-2xl">
      <div className=" relative w-full  h-50 bg-blue-400">
        {/* top-part  */}
        <img
          className="absolute translate-x-[25%] translate-y-[20%] border-4 border-blue-400 p-1 bg-white  h-full  aspect-square object-cover object-top rounded-full"
          src="https://img.magnific.com/free-vector/hand-drawn-people-taking-selfie_52683-67272.jpg?semt=ais_hybrid&w=740&q=80"
        />
      </div>

      {/* bottom-part */}

      <div className="flex flex-col items-center pt-10">
        <h1>Jhon Doe</h1>
        <p>Software Developer</p>
        <div className="flex gap-4">
          <FaYoutube className="bg-red-400 p-2 text-white text-4xl rounded-full"/>
          <FaFacebook className="bg-blue-400 p-2 text-white text-4xl rounded-full"/>
          <FaFacebook className="bg-blue-400 p-2 text-white text-4xl rounded-full"/>
          <FaFacebook className="bg-blue-400 p-2 text-white text-4xl rounded-full"/>
        </div>
       
       <div className="flex gap-4 items-center pt-5">
        <Button text="Follow"/>
        <Button text="Message"/>
        </div>
        <div className="flex gap-4 items-center pt-5">
          <div className="flex items-center text-xl ">
            <CiHeart/>
            <span>60k</span>
          </div>
          <div className="flex items-center text-xl">
            <CiHeart/>
            <span>30k</span>
          </div>
          <div className="flex items-center text-xl">
            <CiHeart/>
            <span>30k</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
