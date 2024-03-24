import { bannerImg } from "../../assets";

const RightBanner = () => {
  return (
    <div className="w-1/2 flex justify-center items-center relative mx-auto ">
        <img className="w-[5540px] h-[450px] lgl:w-[500px] lgl:h-[680px] z-10  "
        src={bannerImg} 
        alt="bannerImg" />

        <div className=" absolute bottom-0 w-[400px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r
    from-[#1e2024] to-[#202324] shadow-shadowOne flex justify-center items-center">

        </div>
      </div>
  )
}

export default RightBanner