import { FiGithub, FiLinkedin } from "react-icons/fi";

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Full Stack Engineer</span>
            <h1 className="h1 mb-6">
              Hello I`m <br /> <span className="text-accent">Edwin Rivera</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-[18px] text-white/80">
              I am passionate about creating seamless digital experiences,
              leveraging my proficiency in multiple programming languages and
              technologies.
            </p>
            {/* socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <div className="mb-8 xl:mb-8">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-white transition-all duration-500"
                  links={[
                    {
                      href: "https://github.com/EdRivera016",
                      icon: <FiGithub className="w-6 h-6" />,
                    },
                    {
                      href: "https://www.linkedin.com/in/edwin-rivera-7125a92b9/",
                      icon: <FiLinkedin className="w-6 h-6" />,
                    },
                  ]}
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
