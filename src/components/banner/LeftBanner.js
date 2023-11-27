import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["إعلامي ", " صحفي ", " مراسل حربي"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal"> اهلاً بك في موقعي </h4>
        <h1 className="text-6xl font-bold text-white">
          الإعلامي{" "}
          <span className="text-designColor capitalize">حيدر رزوق </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          من مواليد سورية-حمص-عام 1980 يعمل لدى إذاعة شام إف إم كمدير لمكتبها في
          محافظة حمص بالاضافة للظهور المستمر في وسائل الإعلام العالمية مثل:
          BBC-روسيا اليوم-الميادين-الغدير مدير لعديد من الصفحات الاخبارية التي
          تعمل بالشأن المحلي و السياسي السوري
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">تابعني</h2>
          <div className="flex gap-4">
            <a href="" className="bannerIcon">
              <FaFacebookF />
            </a>
            <a href="" className="bannerIcon">
              <FaTwitter />
            </a>
            <a href="" className="bannerIcon">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        {/* <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            مهاراتي
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default LeftBanner;
