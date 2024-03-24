import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaFigma } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const LeftBanner = () => {

    const [text] = useTypewriter({
        words: ["Professional Coder.", "Full Stack Developer.","MERN Stack Developer.", "UI Designer ."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
      });



  return (
    <div className="w-full md:w-1/2 flex flex-col gap-20">
        <div className="flex flex-col gap-5 px-8  ">
          <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {" "}
            Hi, I'm
            <span className="text-designColor capitalize"> Adnan</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            ></Cursor>
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
          I’m a modern full-stack web developer (MERN) with 2+ years of IT experience designing and developing solid, reliable, responsive and scalable software solutions in the MERN stack. My goal is to provide you clean, organized and professional project.           </p>
        </div>
        
        
        <div className="flex flex-col md:flex-row justify-between md:items-center px-9  gap-16">
           
         <div className="flex flex-col ">
         <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-6">
          <span className="bannerIcon">
              <FaFacebook />
            </span>
            <span className="bannerIcon">
              <FaTwitter />
            </span>
            <span className="bannerIcon">
              <FaLinkedin />
            </span>
          </div>
         </div>

         <div className="flex flex-col">
         <h2 className="text-base uppercase font-titleFont mb-4">
            Best skill on
          </h2>
          <div className="flex gap-6">
          <span className="bannerIcon">
              <TbBrandNextjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaFigma />
            </span>
          </div>
         </div> 


        </div>
        
       
       
       
       
       
       
       
        {/* <div className="flex flex-col">
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-between md:items-center">
        
        
          <div className="flex gap-4">
           
          </div>
          










          
          <div className="flex flex-col gap-4">
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex">
         
          </div>
          </div>
          </div>
        </div> */}








      </div>
  )
}

export default LeftBanner