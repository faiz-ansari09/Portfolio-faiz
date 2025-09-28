import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: "1",
    title: "DailyScope",
    description:
      "DailyScope is a modern news aggregator web app. It fetches and displays the latest headlines and news articles using the NewsAPI.",
    image: "/projects/project1.png",
    tags: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
    // demoUrl: "https://github.com/faiz-ansari09/DailyScope",
    repoUrl: "https://github.com/faiz-ansari09/DailyScope",
  },
  {
    id: "2",
    title: "logiTracker",
    description:
      "logiTracker is a full-stack web application which provides user authentication, watchlist management, and real-time tracking of cryptocurrency.",
    image: "/projects/project2.png",
    tags: [
      "React",
      "JavaScript",
      "TailwindCSS",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
    ],
    // demoUrl: "https://logi-tracker-ihzh.vercel.app",
    repoUrl: "https://github.com/faiz-ansari09/logiTracker",
  },
  {
    id: "3",
    title: "myNoteSync",
    description:
      "myNoteSync is a simple note synchronization tool designed to keep your notes consistent across multiple devices.",
    image: "/projects/project3.png",
    tags: [
      "React",
      "JavaScript",
      "Bootstrap",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
    ],
    // demoUrl: "https://my-note-sync-faiz.vercel.app",
    repoUrl: "https://github.com/faiz-ansari09/myNoteSync",
  },
  {
    id: "4",
    title: "SumItUp",
    description:
      "SumItUp is a simple, fast, and responsive React web application for analyzing and manipulating text.",
    image: "/projects/project4.png",
    tags: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
    // demoUrl: "https://sum-it-up-faiz.vercel.app",
    repoUrl: "https://github.com/faiz-ansari09/SumItUp",
  },
  {
    id: "5",
    title: "MedManage",
    description:
      "A web-based Hospital Management System designed to streamline hospital operations such as patient registration, doctor management, and appointment scheduling.",
    image: "/projects/project5.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    // demoUrl: "https://github.com/faiz-ansari09/MedManage-HMS",
    repoUrl: "https://github.com/faiz-ansari09/MedManage-HMS",
  },
  {
    id: "6",
    title: "SMS-Spam Detection",
    description:
      "This is a web application for the detection of SMS messages created using Streamlit which helps you determine if an SMS is spam or not using a machine learning model.",
    image: "/projects/project6.png",
    tags: ["Python", "Streamlit", "scikit-learn", "NumPy", "SciPy"],
    // demoUrl: "https://sms-spam-detection-faiz.streamlit.app",
    repoUrl: "https://github.com/faiz-ansari09/SMS-Spam-Detection",
  },
  {
    id: "7",
    title: "Temperature Converter",
    description:
      "This is a web-based temperature converter application that allows users to convert temperatures between Celsius and Fahrenheit.",
    image: "/projects/project7.png",
    tags: ["HTML", "CSS", "JavaScript"],
    // demoUrl: "https://faiz-ansari09.github.io/Temperature_Converter",
    repoUrl: "https://github.com/faiz-ansari09/Temperature_Converter",
  },
  {
    id: "8",
    title: "E-Comm",
    description:
      "The project demonstrates a scalable architecture for online stores, featuring product listings, shopping cart functionality, and a responsive user interface.",
    image: "/projects/project8.png",
    tags: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS"],
    // demoUrl: "https://e-comm-faiz.vercel.app",
    repoUrl: "https://github.com/faiz-ansari09/E-Comm",
  },
  {
    id: "9",
    title: "Portfolio Website",
    description:
      "A clean, modern, and fully responsive personal portfolio built to showcase my skills and projects. Developed with a focus on performance and a sleek user interface using the latest front-end technologies.",
    image: "/projects/project9.png",
    tags: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS"],
    // demoUrl: "https://portfolio-faiz-ans.vercel.app",
    repoUrl: "https://github.com/faiz-ansari09/Portfolio-faiz",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of projects showcasing my skills and experience in web
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/10 text-secondary-foreground hover:text-primary transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1 text-primary">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {/* <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a> */}
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/faiz-ansari09?tab=repositories"
          >
            Check My GitHub Repositories <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
