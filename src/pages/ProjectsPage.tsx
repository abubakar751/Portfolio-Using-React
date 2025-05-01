import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage: React.FC = () => {
  const projects = [
    {
      title: 'Audit Management Software',
      description: 'Developed the Risk Management Module and led a team of 34 developers. Utilized Liqui-base, Spring Boot, and Angular for module integration and feature delivery, achieving a 90% improvement in risk identification accuracy.',
      image: 'https://tracegains.com/wp-content/uploads/2022/08/TG-main-nav-audit-management-Thumbnail.jpg',
      technologies: ['Spring Boot', 'Angular', 'MySQL', 'Hibernate'],
      githubUrl: 'https://github.com/abubakar751',
    },
    {
      title: 'e-DigiSalesSystem',
      description: 'A digital sales management platform designed to streamline and automate the sales process of an organization. It aims to provide a comprehensive solution for managing product catalogs, customer orders, sales representatives, and real-time analytics. The system focuses on enhancing the efficiency of sales operations, improving customer experiences, and ensuring seamless order tracking and management.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Java', 'Spring MVC', 'MySQL', 'REST API'],
      githubUrl: 'https://github.com/abubakar751',
    },
    {
      title: 'Exam Portal',
      description: 'The Exam Portal allows students to take quizzes online while offering comprehensive admin capabilities. Admins can create, update, and manage quizzes, including setting questions and configuring quiz parameters. The system ensures smooth quiz functionality for students, with features like time limits and result tracking. It also provides detailed reporting for both students and administrators.',
      image: 'https://www.simform.com/wp-content/uploads/2020/03/Hybrid-app-dev3x-austin.png',
      technologies: ['Spring Boot', 'Angular', 'JWT', 'MySQL'],
      githubUrl: 'https://github.com/abubakar751',
    },
    {
      title: 'Java Microservices Project',
      description: 'A scalable microservices architecture implementing service discovery, API gateway, and fault tolerance patterns. Developed with Spring Boot, Spring Cloud, and containerized with Docker for seamless deployment.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Spring Boot', 'Spring Cloud', 'Docker', 'Kubernetes'],
      githubUrl: 'https://github.com/abubakar751',
    },
    {
      title: 'Inventory Management System',
      description: 'A comprehensive system for tracking product inventory, managing suppliers, and generating reports. Features include barcode scanning, low stock alerts, and detailed analytics dashboard.',
      image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Java', 'Spring MVC', 'Hibernate', 'MySQL'],
      githubUrl: 'https://github.com/abubakar751',
    },
    {
      title: 'Customer Relationship Management',
      description: 'A CRM system designed to help businesses manage customer interactions, track sales pipelines, and improve customer service. Includes features for contact management, lead tracking, and performance analytics.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL'],
      githubUrl: 'https://github.com/abubakar751',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="My Projects" 
          subtitle="A showcase of my development experience and technical skills" 
          centerAlign={true}
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;