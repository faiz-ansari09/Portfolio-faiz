import { ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Mohd Faiz Ansari
            </span>
            {/* <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
            </span> */}
          </h1>
          <div className="text-3xl md:text-4xl text-bold mt-14 mb-10 text-secondary max-w-5xl mx-auto hover:text-primary transition-colors">
            <TypeAnimation
              sequence={[
                "Full-Stack Developer",
                1000,
                "UI/UX Designer",
                1000,
                "MERN Stack Developer",
                1000,
                "Web Developer",
                1000,
                "Programmer",
                1000,
                "Tech Enthusiast",
                1000,
                "Software Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
              style={{ display: "inline-block" }}
            />
          </div>
          <div className="pt-8 mt-12 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
