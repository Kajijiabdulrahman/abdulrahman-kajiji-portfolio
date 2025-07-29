import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import ecommerceImage from '@/assets/project-ecommerce.jpg';
import taskManagerImage from '@/assets/project-taskmanager.jpg';
import weatherImage from '@/assets/project-weather.jpg';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard.',
      image: ecommerceImage,
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      highlights: [
        'Secure payment processing with Stripe',
        'Real-time inventory management',
        'Responsive design for all devices',
        'Admin panel with analytics dashboard'
      ]
    },
    {
      id: 2,
      title: 'Task Management System',
      description: 'A collaborative task management application with kanban boards, real-time updates, and team collaboration features. Built using React, Express.js, and MongoDB.',
      image: taskManagerImage,
      technologies: ['React', 'Express.js', 'MongoDB', 'Socket.io', 'Material-UI'],
      liveUrl: '#',
      githubUrl: '#',
      highlights: [
        'Real-time collaboration with Socket.io',
        'Drag & drop kanban interface',
        'Team member management',
        'Progress tracking and reporting'
      ]
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A comprehensive weather application that provides current conditions, forecasts, and weather maps. Features location-based weather data and interactive charts.',
      image: weatherImage,
      technologies: ['React', 'Chart.js', 'OpenWeatherMap API', 'Geolocation API'],
      liveUrl: '#',
      githubUrl: '#',
      highlights: [
        'Real-time weather data from OpenWeatherMap',
        'Interactive charts and visualizations',
        'Location-based weather detection',
        'Seven-day weather forecast'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Header Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            My Portfolio
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in-up">
            A showcase of my recent projects and technical expertise. Each project represents 
            a unique challenge and demonstrates different aspects of modern web development.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group">
                    <div className="overflow-hidden rounded-lg shadow-elegant group-hover:shadow-glow transition-all duration-300">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
                  </div>
                </div>

                {/* Project Details */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <Card className="shadow-card hover:shadow-elegant transition-all duration-300 bg-gradient-card">
                    <CardHeader>
                      <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-lg">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="secondary"
                              className="bg-primary/10 text-primary hover:bg-primary/20"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>

                    <CardFooter className="gap-4">
                      <Button className="flex-1 gap-2 bg-gradient-primary hover:opacity-90">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Button>
                      <Button variant="outline" className="flex-1 gap-2">
                        <Github className="h-4 w-4" />
                        Source Code
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Interested in Working Together?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and work on innovative projects. 
            Let's discuss how I can help bring your ideas to life.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:opacity-90 shadow-glow"
          >
            Get In Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;