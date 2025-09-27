import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">
              Passionate Web Developer & Tech Enthusiast
            </h3>
            <p className="text-muted-foreground text-left">
              I'm a dedicated web developer with a passion for creating dynamic
              and responsive web applications. With a strong foundation in both
              front-end and back-end technologies, I strive to build seamless
              user experiences and efficient solutions. My journey in tech has
              been fueled by curiosity and a commitment to continuous learning,
              allowing me to stay updated with the latest industry trends and
              best practices.
            </p>
            <p className="text-muted-foreground text-left">
              Beyond coding, I enjoy collaborating with like-minded
              professionals and contributing to open-source projects. When I'm
              not immersed in development, you can find me exploring new
              technologies, reading tech blogs, or engaging in outdoor
              activities. Let's connect and create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-primary">
                    Web Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building responsive and dynamic web applications using
                    modern technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-primary">
                    UI/UX Design
                  </h4>
                  <p className="text-muted-foreground">
                    Crafting intuitive and engaging user interfaces for better
                    user experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-primary">
                    Project Management
                  </h4>
                  <p className="text-muted-foreground">
                    Experienced in leading projects from concept to completion,
                    ensuring timely delivery and quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
