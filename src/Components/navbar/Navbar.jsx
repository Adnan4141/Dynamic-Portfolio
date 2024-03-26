import { FaBars } from "react-icons/fa";
import { Adnan,  logo } from "../../assets/index";
import { navLinksdata } from "../../constants";
import { useState } from "react";
import { Link } from "react-scroll";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { easeIn, motion } from 'framer-motion';



const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full h-24 px-4 lg:px-10 sticky  top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 ">
      <div>
        <img className="w-16 rounded-full outline-lime-50 border-[2px]" src={Adnan} alt="" />
      </div>

      <div>
        <ul className="hidden lg:inline-flex  items-center gap-10">
          {navLinksdata.map((navlink) => (
            <li
              key={navlink._id}
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer
            hover:text-designColor duration-300"
            >
              <Link
                activeClass="active"
                to={navlink.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {navlink.title}
              </Link>
            </li>
          ))}
        </ul>

        {/*=================== sidebar  start=============================*/}
        { showMenu && 
          <motion.div 
         initial={{translateX:-96 ,opacity:0}}
         animate={{translateX:0,opacity:1}}
         transition={{duration:0.5,ease:easeIn,delay:0.2}}
         className="min-h-screen h-full tr  bg-[#212428] w-[80%] absolute left-0 top-0">
          <div className="h-full flex flex-col gap-5 px-5 py-10 ml-4 bg-[#111827]">
           
           <div className="flex justify-between">

           <div>
           <img className="w-16 rounded-full outline-lime-50 border-[2px]" src={Adnan} alt="" />
            </div>

            <div onClick={()=>setShowMenu(false)} className="mt-5 cursor-pointer">
            <span className="text-3xl"><IoMdClose />
              </span>
            </div>

           </div>

            <p>
            I’m a modern full-stack web developer (MERN) with 2+ years of IT experience designing and developing solid, reliable, responsive and scalable software solutions in the MERN stack. My goal is to provide you clean, organized and professional project.
            </p>

            <ul className="flex flex-col  items-start gap-5">
              {navLinksdata.map((navlink) => (
                <li
                  key={navlink._id}
                  className="text-base font-normal text-gray-400 tracking-wide cursor-pointer
            hover:text-designColor duration-300"
                >
                  <Link
                    activeClass="active"
                    to={navlink.link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {navlink.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-5 my-5">
         <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-6">
          <span className="bannerIcon">
              <FaFacebookF/>
            </span>
            <span className="bannerIcon">
              <FaTwitter />
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn/>
            </span>
          </div>
         </div>
          </div>
        </motion.div>

        }
         
          { /*=================== sidebar  end=============================*/}

        <div
          onClick={() => setShowMenu(!showMenu)}
          className="bg-black rounded-full p-3 cursor-pointer lg:hidden"
        >
          <span className="text-xl text-designColor  bg-white">
            {" "}
            <FaBars />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
