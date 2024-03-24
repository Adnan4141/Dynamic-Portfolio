import { FaGlobe, FaMobile } from "react-icons/fa";
import Title from "../layouts/Title";
import Card from "./Card";
import { SiAntdesign, SiProgress } from "react-icons/si";
import { AiFillAppstore } from 'react-icons/ai';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full px-8  py-20 pt-10 pb-20  border-b-black border-b-[1px]"
    >
    <Title 
        title="Features"
        des="What I Do"
    />
      
     <div className="grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-8 lgl:gap-20">
        <Card 
            title="Mobile Development"
            des="Lorem ipsum dolor sit amet consectetur .Lorem ipsum dolor sit amet, consectetur adipisicing elit."     
            icon={<FaMobile/>}
        />
        <Card 
            title="UX Design"
            des="Lorem ipsum dolor sit amet consectetur .Lorem ipsum dolor sit amet, consectetur adipisicing elit."     
            icon={<SiAntdesign/>}
        />
        <Card 
            title="Hosting Website"
            des="Lorem ipsum dolor sit amet consectetur .Lorem ipsum dolor sit amet, consectetur adipisicing elit."     
            icon={<FaGlobe/>}
        />
        <Card 
            title="SEO Optimization"
            des="Lorem ipsum dolor sit amet consectetur .Lorem ipsum dolor sit amet, consectetur adipisicing elit."     
            icon={<SiProgress/>}
        />
        <Card 
            title="Hosting Website"
            des="Lorem ipsum dolor sit amet consectetur .Lorem ipsum dolor sit amet, consectetur adipisicing elit."     
            icon={<FaGlobe/>}
        />
        <Card 
            title="Business Strategy"
            des="Lorem ipsum dolor sit amet consectetur .Lorem ipsum dolor sit amet, consectetur adipisicing elit."     
            icon={<AiFillAppstore/>}
        />
       
     </div>
    </section>
  );
};

export default Features;


