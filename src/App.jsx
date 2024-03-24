import Banner from "./Components/banner/Banner"
import Contact from "./Components/contact/Contact"
import Features from "./Components/features/Features"
import Footer from "./Components/footer/Footer"
import Navbar from "./Components/navbar/Navbar"
import Testimonial from "./Components/testimonial/Testimonial"
import Projects from "./project/Projects"
import Resume from "./resume/Resume"



function App() {


  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <Navbar/>
    <div className="max-w-[1400px] mx-auto md:px-16">
      <Banner/>
      <Features/>
      <Projects/>
      <Resume/> 
      <Testimonial/>
      <Contact/>
      <Footer/>

   
    </div>
    </div>
  )
}

export default App




// npm i react-scroll
// npm i react-simple-typewriter
// npm install react-slick --save
// npm install slick-carousel --save