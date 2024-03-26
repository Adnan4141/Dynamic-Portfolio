import ResumeCard from "./ResumeCard"
import { motion } from 'framer-motion';


const Education = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="w-full flex flex-col gap-10 lgl:gap-20 px-5 md:px-0"
      >
        {/* part one */}
        <div>
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">2004-2024</p>
            <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
          </div>
          <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="BSc in Computer Science & Engineering"
              subTitle="International Islamic University Chittagong(2006 - 2010)"
              // result="3.90/4"
              des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
            />
            <ResumeCard
              title="Completed Intermediate Education at Science"
              subTitle="BAF Shaheen College, Chittagong"
              result="4.75/5"
              des="The Higher Secondary Certificate (HSC)  is a secondary education qualification in Bangladesh. Higher education, also called post-secondary education."
            />
            <ResumeCard
              title="Secondary School Education"
              subTitle="Kingstar Secondary School (1998 - 2000)"
              result="5.00/5"
              des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
            />
          </div>
        </div>
        {/* part Two */}
  
        <div>
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
            <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
          </div>
          <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
         
            <ResumeCard
              title="Front-end Developer"
              subTitle="Fiver Online Marketplace"
              result="Online"
              des="Fiver is a freelance marketplace that connects businesses or individuals with skilled professionals who offer a variety of services, including web development. Web development on Fiverr typically involves creating and designing websites, web applications, and other digital products that operate on the internet."
            />
            <ResumeCard
              title="Web Developer & Trainer"
              subTitle="Apple Developer Team - (2012 - 2016)"
              result="MALAYSIA"
              des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
            />
          </div>
        </div>
      </motion.div>
    );
  }

export default Education