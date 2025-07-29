import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import profilePhoto from '@/assets/profile-photo.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
                Hi, I'm{' '}
                <span className="text-white drop-shadow-glow">
                  Abdulrahman
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up">
                Full-Stack Developer from Kano, Nigeria
              </p>
              <p className="text-lg text-white/80 mb-8 max-w-lg animate-fade-in-up">
                I create modern, responsive web applications using cutting-edge technologies. 
                Passionate about clean code, user experience, and bringing ideas to life through programming.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 font-medium shadow-glow"
                >
                  <Link to="/portfolio">View My Work</Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-elegant animate-float border-4 border-white/20">
                  <img 
                    src={profilePhoto} 
                    alt="Abdulrahman Abubakar Kajiji"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-glow">
                  <span className="text-primary font-bold text-lg">👋</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                About Me
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  I'm a passionate full-stack developer based in Kano, Nigeria, with expertise in modern web technologies. 
                  I specialize in creating scalable, user-friendly applications that solve real-world problems.
                </p>
                <p className="text-lg leading-relaxed">
                  My journey in programming started with a curiosity about how websites work, and it has evolved into 
                  a career focused on building exceptional digital experiences. I enjoy working with React, Node.js, 
                  Python, and various databases to create complete solutions.
                </p>
                <div className="flex items-center gap-2 text-primary">
                  <MapPin className="h-5 w-5" />
                  <span className="font-medium">Kano, Nigeria</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 bg-gradient-card">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </Card>
              <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 bg-gradient-card">
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </Card>
              <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 bg-gradient-card">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </Card>
              <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 bg-gradient-card">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Dedication</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Technologies I Work With
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'React', 'Node.js', 'Python', 'TypeScript', 
              'PostgreSQL', 'MongoDB', 'Docker', 'AWS',
              'Git', 'Tailwind CSS', 'Express.js', 'Next.js'
            ].map((skill) => (
              <div 
                key={skill}
                className="bg-background rounded-lg p-4 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105"
              >
                <span className="font-medium text-foreground">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and projects. 
            Feel free to reach out if you'd like to work together!
          </p>
          <div className="flex justify-center gap-6">
            <Button variant="outline" size="lg" className="gap-2">
              <Github className="h-5 w-5" />
              GitHub
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Mail className="h-5 w-5" />
              Email
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;