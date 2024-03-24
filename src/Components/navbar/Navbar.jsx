
import {logo} from "../../assets/index"
import { navLinksdata } from '../../constants';
import  { useState } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {

  const [showMenu, setShowMenu]=useState(false)

  return (
    <div className="w-full h-24 px-10 sticky  top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">

     <div>
        <img src={logo} alt="" />
     </div>

     <div>
     <ul className="flex items-center gap-10">
        {
          navLinksdata.map((navlink=>(
            <li key={navlink._id}
            className="text-base font-normal text-gray-400 tracking-wide cursor-pointer
            hover:text-designColor duration-300">
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
          )))
        }
     </ul>

     </div>

    </div>
  )
}

export default Navbar