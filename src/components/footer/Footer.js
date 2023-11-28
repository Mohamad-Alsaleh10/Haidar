import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import {logo} from "../../assets/index"
import FooterList from "./FooterList"

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2  gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={logo} alt="logo" />
        <div className="flex gap-4">
          <a href='' className="bannerIcon">
            <FaFacebookF />
          </a>
          <a href='' className="bannerIcon">
            <FaTwitter />
          </a>
          <a href='' className="bannerIcon">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div className="w-full h-full">
        <FooterList />
      </div>

    </div>
  );
}

export default Footer