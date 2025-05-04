
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: "https://github.com/AnshuTanwar", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/aanshu-tanwar-3b9466ans", label: "LinkedIn" },
    { icon: Mail, href: "mailto:aanshutanwar07@gmail.com", label: "Email" }
  ];

  return (
    <footer className="bg-secondary/80 dark:bg-muted/20 py-12">
      <div className="section-container">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <h2 className="text-2xl font-bold gradient-text">Aanshu Tanwar</h2>
          </div>
          
          <div className="flex space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          
          <div className="text-sm text-muted-foreground text-center">
            <p>© {currentYear} Portfolio. All rights reserved.</p>
            <p className="mt-1"></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
