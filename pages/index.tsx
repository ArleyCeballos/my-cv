
import { About } from "@/components/About"
import { ProgressBar } from "@/components/ProgressBar"
import { ContainerEducation } from "@/components/container-education";
import { ContainerMain } from "@/components/container-main";
import { ContainerMainText } from "@/components/container-main-text";
import Image from 'next/image';
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsFiletypePhp, BsGit, BsFillDatabaseFill } from "react-icons/bs";
import { MdDesignServices } from "react-icons/md";
import { FaPython } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiSolidSelectMultiple } from "react-icons/bi";
import { Skills } from "@/components/skills";
import { Button } from "@/components/button";
import { IconLink } from "@/components/icon-links";
import { PortafolioContainerMain } from "@/components/portafolio-containeer";

const Index = () => {
  return (
    <div className="h-full w-full  flex bg-[#F0F0F6]">
      <aside className="bg-white p-4 flex flex-col w-[450px] gap-4 items-center " style={{ position: 'sticky', left: '0', top: '0' }} >
        <section className="h-[350px] py-10 flex flex-col items-center text-xs">
          <div className="h-[200px] w-[200px] rounded-full overflow-hidden">
            <Image className='object-cover w-full h-full' src='/image/Imagen de WhatsApp 2023-10-06 a las 23.11.00_8cd37093.jpg' width={200} height={200} alt='Profile Image' />
          </div>
          <span className="font-bold text-xl">Daniela Monsalve</span>
          <span className="text-lg text-gray-text">Back-End Developer</span>
        </section>
        <div className="flex flex-col w-[300px] h-[126px]">
          <About Title="Age:" Description="25" />
          <About Title="Residence:" Description="Col" />
          {/* Here goes your job position and description */}
          <About Title="Dev" Description="Backend" />
          <About Title="Addres:" Description="Colombia, Bello" />
        </div>

        <section className="py-4 h-[200px] w-[300px]">
          <span className="font-semibold text-xl"> Languages </span>
          <ProgressBar Title="English" Percentage="100" />
          <ProgressBar Title="Spanish" Percentage="100" />
        </section>

        <section className="h-[400px] w-[300px]">
          <span className="font-semibold w-[220px] h-[1.5px] text-xl"> Programing Languages </span>
          <ProgressBar Title="Golang" Percentage="100%" />
          <ProgressBar Title="Python" Percentage="100%" />
          <ProgressBar Title="Java" Percentage="90%" />
          <ProgressBar Title="Javascript" Percentage="85%" />
          <ProgressBar Title="CSS" Percentage="95%" />
          <ProgressBar Title="HTML" Percentage="80%" />
          <ProgressBar Title="PHP" Percentage="90%" />
        </section>

        <section className=" h-[180px] w-[300px] " >
          <p className="mb-2 text-xl font-semibold">Extra Skills</p>
          <Skills Description="Fast Api Framework" Icono={BiSolidSelectMultiple} />
          <Skills Description="Docker" Icono={BiSolidSelectMultiple} />
          <Skills Description="Automatic testing" Icono={BiSolidSelectMultiple} />
        </section>
      </aside>


      <main className=" flex flex-col items-center m-3 gap-4 bg-[#F0F0F6] " >
        <div className="main-content-container" style={{ maxHeight: 'calc(100vh - 80px)', overflowY: 'auto' }}>

          <section className="p-4  w-[1300px] h-[467px] items-center flex bg-white m-6" >
            <div className="flex flex-col items-center">
              <span className="px-9 py-8 font-bold text-7xl">I'm Daniela Monsalve</span>
              <div>
                <span className="px-9 text-[#FFB400] font-bold text-7xl">Back-end</span>
                <span className="py-8 font-bold text-7xl">Developer</span>
              </div>
              <span className="py-10 px-9 text-xl">I'm very grateful that you've taken the time to look at my CV.</span>
              <Button text="Click Me" />
            </div>
            <div className="mr flex justify-end">
              <Image className='' src='/image/woman bussiness.png' height={"290"} width={"280"} alt='Main image' />
            </div>
          </section>

          <section className="flex flex-col items-center  w-[1300px] h-[600px]">
            <ContainerMainText Title="My Knowledge" Description="Here goes all your knowledege" />
            <div className="grid-cols-3 grid grid-rows-2 ">
              <ContainerMain Title="Web development" Description="Blog, E-Commerce" Icono={HiOutlineDesktopComputer} />
              <ContainerMain Title="PHP" Description="Full Handle of frameworks" Icono={BsFiletypePhp} />
              <ContainerMain Title="GIT" Description="Knowledge About Git-Flow" Icono={BsGit} />
              <ContainerMain Title="UX/UI Designer" Description="Website Design" Icono={MdDesignServices} />
              <ContainerMain Title="DB" Description="Design And Settings of Data Bases" Icono={BsFillDatabaseFill} />
              <ContainerMain Title="Python" Description="Full Experience As A Python Develop" Icono={FaPython} />
            </div>
          </section>

          <section className="flex flex-col m-6 font-serif  w-[1300px] h-[653px]">
            <ContainerMainText Title="Education" Description="Bachelor of Systems Engineering (expected graduation date: 2024)" />
            <ContainerEducation TitleLeft="University of Antioquia" DescriptionLeft="Systems Engineering" TitleRight="Relevant coursework" DescriptionRight="Data Structures and Algorithms
                      Object-Oriented Programming -
                      Database Management Systems -
                      Web Development - 
                      Operating Systems -
                      Software Engineering
                      "/>
            <ContainerEducation TitleLeft=" " DescriptionLeft=" " TitleRight="Skills" DescriptionRight="• Redis (including pub/sub and caching)
                    • RabbitMQ (including message queues and publish/subscribe)
                    • GCP Pub/Sub (Google Cloud Platform's message broker)
                    • Python (including asynchronous and parallel programming)
                    • FastAPI
                    • PostgreSQL
                    • Docker
                    • HTML/CSS
                    • Git/GitHub
                    • Java
                    • JavaScript
                    • Golang
                    • gRPC with Python
                    • PHP/Laravel Framework
                    • Scrum and Agile
                    " />
            <ContainerEducation TitleLeft=" " DescriptionLeft=" " TitleRight="Soft Skills" DescriptionRight="• Strong communication and interpersonal skills
                    • Ability to work collaboratively in cross-functional teams
                    • Problem-solving skills and ability to handle complex tasks
                    • Self-starter and ability to work independently
                    " />
          </section>

          <section className="flex flex-col items-center  w-[1300px] h-[600px]">
            <ContainerMainText Title="Portafolio" Description="Here are some of my recent projects, if you want to see more you can click on the box and go to my github repository for a better view." />
            <div className="grid-cols-3 grid">
              <PortafolioContainerMain Title="Web development" Description="Blog, E-Commerce" Icono={HiOutlineDesktopComputer} />
              <PortafolioContainerMain Title="Web development" Description="Blog, E-Commerce" Icono={HiOutlineDesktopComputer} />
              <PortafolioContainerMain Title="Web development" Description="Blog, E-Commerce" Icono={HiOutlineDesktopComputer} />
            </div>
          </section>



        </div>
        <footer className="py-4 text-center">
          <p>Este es el pie de página del contenido principal.</p>
        </footer>
      </main>


      <aside className="py-16 flex flex-col bg-white" style={{ position: 'sticky', right: '0', top: '0' }}>
        <span className=" flex justify-center font-bold text-2xl text-[#2B2B2B]" >Links</span>
        <IconLink Icono={AiFillGithub} href="https://github.com/DanielaMGX" />
        <IconLink Icono={AiFillLinkedin} href="https://www.linkedin.com/in/ldaniela-monsalve" />
      </aside>
    </div>
  )
}

export default Index