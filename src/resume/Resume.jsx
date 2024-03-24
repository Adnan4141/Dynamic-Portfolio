import { useState } from "react";
import Title from "../Components/layouts/Title";
import Achievement from "./Achievement";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

const Resume = () => {
  const lists = [
    {
      title: "Education",
      designClass: "border-designColor rounded-lg",
    },
    {
      title: "Professional Skills",
      designClass: "border-designColor rounded-lg",
    },
    {
      title: "Experience",
      designClass: "border-designColor rounded-lg",
    },
    {
      title: "Achievements",
      designClass: "border-designColor rounded-lg",
    },
  ];

 const [clickList,SetClickList] = useState("Education") 

 console.log(clickList)



  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="7+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>

      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 px-2 gap-3 lg:grid-cols-4">
        {
            lists.map((list)=>(
          <li onClick={()=>SetClickList(list.title)}
          key={list.title} className={`${clickList.includes(list.title)?"border-designColor border-[2px]  rounded-lg":"border-transparent"} resumeLi`}>{list.title}</li>
            ))
        } 
         
        </ul>
      </div>
        
   
   <div className="w-full px-2">
   {
        (clickList.includes('Education')) && <Education/>
    }
    {
        (clickList.includes('Professional Skills')) && <Skills/>
    }
    {
        (clickList.includes('Experience')) && <Achievement/>
    }
    {
        (clickList.includes('Achievements')) &&  <Experience />
    }

   </div>




      
     
    
    </section>
  );
};

export default Resume;
