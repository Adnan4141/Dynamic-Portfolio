/* eslint-disable react/prop-types */
import { HiArrowRight } from "react-icons/hi";


const Card = ({title,des,icon}) => {
  return (
    <div className="w-full px-12 py-10 md:py-10 rounded-lg shadow-shadowOne
    flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group 
    hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors
    duration-100">
      <div className="h-64  py-10 md:py-0 overflow-hidden">
      <div className="flex h-full  flex-col gap-10  translate-y-5 lg:translate-y-8
      group-hover:-translate-y-10  lg:group-hover:-translate-y-0 transition-transform">
      <div className="w-10 h-8 flex gap-1 flex-col justify-between">
        {
          icon?( <span className="text-5xl text-designColor">{icon}</span>):
        (<><span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
        <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
        <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
        <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
        </>
        )

        } 


       </div>
       <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-titleFont font-bold text-gray-300">
            {title}
        </h1>
        <p className="base">{des}</p>
        <span className="text-2xl text-designColor">
           <HiArrowRight/>
        </span>
       </div>
      </div>
      </div>
    </div>
  )
}

export default Card