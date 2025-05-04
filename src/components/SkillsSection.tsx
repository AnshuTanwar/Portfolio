import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Globe, Palette, Server, Settings } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const SkillsSection = () => {
  const skillCategories = [
    {
      name: "Frontend",
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: [
        { name: "React.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Next.js", level: 75 },
        { name: "Tailwind CSS", level: 95 },
      ]
    },
    {
      name: "Backend",
      icon: <Server className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 90 },
        { name: "RESTful APIs", level: 80 },
        { name: "GraphQL", level: 70 },
      ]
    },
    {
      name: "Database",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "Mongoose", level: 85 },
        { name: "SQL", level: 70 },
        { name: "Redis", level: 60 },
      ]
    },
    {
      name: "Tools & Others",
      icon: <Settings className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 65 },
        { name: "Jest", level: 70 },
      ]
    },
    {
      name: "UI/UX",
      icon: <Palette className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Figma", level: 80 },
        { name: "Web Design", level: 75 },
        { name: "Responsive Design", level: 90 },
        { name: "Accessibility", level: 85 },
      ]
    },
    {
      name: "Languages",
      icon: <Globe className="h-6 w-6 text-primary" />,
      skills: [
        { name: "JavaScript", level: 75 },
        { name: "TypeScript", level: 65 },
        { name: "Java", level: 80 },
        { name: "Python", level: 70 },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/50 dark:bg-secondary/10">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-2">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded"></div>
          <p className="text-lg text-muted-foreground">
            I've developed a diverse set of skills throughout my journey as a developer.
            Here's a breakdown of my technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              category={category}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ category, delay }) => {
  const { ref, inView: isInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
      className={`transition-all duration-500 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <Card className="border border-muted shadow-sm">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-6">
            {category.icon}
            <h3 className="text-xl font-semibold">{category.name}</h3>
          </div>

          <div className="space-y-5">
            {category.skills.map((skill, skillIndex) => (
              <AnimatedSkill
                key={skillIndex}
                skill={skill}
                isInView={isInView}
                delay={skillIndex * 0.1}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const AnimatedSkill = ({ skill, isInView, delay }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timeout, interval;

    if (isInView) {
      timeout = setTimeout(() => {
        const duration = 1000;
        const increment = skill.level / (duration / 15);
        let currentProgress = 0;

        interval = setInterval(() => {
          currentProgress += increment;
          if (currentProgress >= skill.level) {
            setProgress(skill.level);
            clearInterval(interval);
          } else {
            setProgress(currentProgress);
          }
        }, 15);
      }, delay * 1000);
    }

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [isInView, skill.level, delay]);

  return (
    <div
      className="transition-opacity duration-500"
      style={{
        opacity: isInView ? 1 : 0,
        transitionDelay: `${delay + 0.3}s`
      }}
    >
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-xs text-muted-foreground">{Math.round(progress)}%</span>
      </div>
      <Progress
        value={progress}
        className="h-2 overflow-hidden transition-all duration-300 relative"
      />
    </div>
  );
};

export default SkillsSection;
