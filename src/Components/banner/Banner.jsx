

import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {


  return (
    <section
      id="home" 
      className="w-full py-20 gap-10  flex flex-col lg:flex-row items-start  lgl:items-center border-b-[1px] border-b-black font-titleFont"
    >
      
     <LeftBanner/>
     <RightBanner/>
    </section>
  );
};

export default Banner;





