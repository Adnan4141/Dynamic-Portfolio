import Title from "../Components/layouts/Title"
import { projectOne, projectThree, projectTwo } from "../assets"
import ProjectsCard from "./ProjectsCard"

const Project = () => {
  return (
    <section  id="projects"
    className="w-full px-8 py-20 border-b-[1px] border-b-black">
     <div className="flex justify-center items-center text-center">
     <Title
        title ="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"  
        des="My Project"
      />
     </div>
     <div className="grid grid-cols-1 lgl:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-14">
        <ProjectsCard
          title="E-commerce Website"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nihil, ducimus, exercitationem magnam ratione reprehenderit perferendis non sunt earum officia quis rerum?"
          src={projectTwo}
        />
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nihil, ducimus, exercitationem magnam ratione reprehenderit perferendis non sunt earum officia quis rerum?"
          src={projectOne}
        />
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nihil, ducimus, exercitationem magnam ratione reprehenderit perferendis non sunt earum officia quis rerum?"
          src={projectThree}
        />
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nihil, ducimus, exercitationem magnam ratione reprehenderit perferendis non sunt earum officia quis rerum?"
          src={projectOne}
        />
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nihil, ducimus, exercitationem magnam ratione reprehenderit perferendis non sunt earum officia quis rerum?"
          src={projectOne}
        />
        
      
     </div>
     
       
    </section>
  )
}

export default Project