import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const projects = [
    {
      title: "AlpesTech",
      description: "AlpesTech is a MERN stack web application that enables students to enroll in courses, view enrollments and results, while admins manage courses and upload student results via a role-based system.",
      image: "https://ik.imagekit.io/anshut/alpstech/Screenshot%202025-04-09%20204035.png?updatedAt=1744211808005",
      technologies: ["React", "Node.js", "Express", "MongoDB", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/AnshuTanwar/AlpesTech",
      liveUrl: "https://alpes-tech.vercel.app/"
    },
    {
      title: "StayWise",
      description: "A full-stack web application designed to simplify the process of discovering, listing, and booking accommodations.",
      image: "https://ik.imagekit.io/anshut/alpstech/Screenshot%202025-05-04%20162901.png?updatedAt=1746356446706",
      technologies: ["HTML", "Node.js", "MongoDB", "Express", "JWT"],
      githubUrl: "https://github.com/AnshuTanwar/StayWise",
      liveUrl: "https://staywise-d2rd.onrender.com/listings"
    },
    {
      title: "BitBranch",
      description: "An advanced web-based communication platform designed to revolutionize virtual collaboration. Leveraging the MERN stack, Unimeet offers robust real-time video conferencing integrated with state-of-the-art features tailored for modern-day remote communication needs.",
      image: "https://shorturl.at/EuJK0",
      technologies: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
      githubUrl: "hhttps://github.com/AnshuTanwar/BitBranch",
      liveUrl: "https://bit-branch.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold mb-2">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded animate-width-expand"></div>
          <p className="text-lg text-muted-foreground">
            Here are some of the projects I've worked on. Each one presented unique challenges
            and opportunities to learn and grow my skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden card-hover border border-muted h-full flex flex-col transform transition-all duration-700 delay-${index * 150} hover:shadow-lg hover:-translate-y-2 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button variant="outline" size="sm" asChild className="transition-all duration-300 hover:border-primary/50">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" /> GitHub
                  </a>
                </Button>
                <Button size="sm" asChild className="transition-all duration-300 hover:bg-primary/90">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            asChild 
            variant="outline" 
            className="rounded-full transition-all duration-300 hover:scale-105 hover:shadow-md"
          >
            <a href="https://github.com/AnshuTanwar" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
