"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaBootstrap,
  FaDatabase,
  FaNetworkWired,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiGraphql,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const about = {
  title: "About me",
  description: "Jr Full Stack Engineer looking to grow in the industry with the latest languages and technologies.",
  info: [
    { fieldName: "Name", fieldValue: "Edwin Rivera" },
    { fieldName: "Phone", fieldValue: "(813)-454-4235" },
    { fieldName: "Experience", fieldValue: "6+ Months" },
    { fieldName: "Nationality", fieldValue: "Puerto Rican" },
    { fieldName: "Email", fieldValue: "edwinrivera016@outlook.com" },
    { fieldName: "Languages", fieldValue: "English, Spanish" },
  ],
};

const education = {
  title: "Education",
  description: "UCF Coding Bootcamp",
  items: [
    { institution: "UCF", degree: "Full Stack Web Developer Bootcamp", duration: "2024" },
  ],
};

const skills = {
  title: "My Skills",
  description: "Languages and technologies",
  categories: {
    frontend: {
      title: "Frontend Technologies",
      description: "Languages and frameworks for frontend development",
      skillList: [
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3 />, name: "CSS3" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaReact />, name: "React.js" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <FaFigma />, name: "Figma" },
        { icon: <FaBootstrap />, name: "Bootstrap" },
        { icon: <FaNetworkWired />, name: "Responsive Design" },
      ],
    },
    backend: {
      title: "Backend Technologies",
      description: "Technologies for backend development",
      skillList: [
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiExpress />, name: "Express.js" },
        { icon: <FaDatabase />, name: "MySQL with Sequelize" },
        { icon: <SiMongodb />, name: "MongoDB with Mongoose" },
      ],
    },
    middleware: {
      title: "Middleware & APIs",
      description: "Middleware and API technologies",
      skillList: [
        { icon: <FaNetworkWired />, name: "REST API" },
        { icon: <SiGraphql />, name: "GraphQL" },
      ],
    },
  },
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="education" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                {Object.values(skills.categories).map((category, catIndex) => (
                  <div key={catIndex} className="category">
                    <h4 className="text-3xl font-semibold">{category.title}</h4>
                    <p className="text-white/60">{category.description}</p>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                      {category.skillList.map((skill, skillIndex) => (
                        <li
                          key={skillIndex}
                          className="flex items-center gap-2"
                        >
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
