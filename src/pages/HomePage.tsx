import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import SkillBar from '../components/SkillBar';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';
import { Code, Database, Server, CheckCircle } from 'lucide-react';

const HomePage: React.FC = () => {
  const skills = [
    { name: 'Java', percentage: 95, color: 'primary', delay: 0 },
    { name: 'Spring Boot', percentage: 90, color: 'primary', delay: 0.1 },
    { name: 'SQL/MySQL', percentage: 85, color: 'secondary', delay: 0.2 },
    { name: 'Hibernate', percentage: 85, color: 'secondary', delay: 0.3 },
    { name: 'Angular', percentage: 75, color: 'accent', delay: 0.4 },
    { name: 'HTML/CSS', percentage: 80, color: 'accent', delay: 0.5 },
  ];

  const projects = [
    {
      title: 'Audit Management Software',
      description: 'Developed the Risk Management Module and led a team of 34 developers. Utilized Liqui-base, Spring Boot, and Angular for module integration and feature delivery, achieving a 90% improvement in risk identification accuracy.',
      image: 'https://images.pexels.com/photos/7108/notebook-computer-chill-relax.jpg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Spring Boot', 'Angular', 'MySQL', 'Hibernate'],
      githubUrl: 'https://github.com/abubakar751',
    },
    {
      title: 'e-DigiSalesSystem',
      description: 'A digital sales management platform designed to streamline and automate the sales process of an organization. It aims to provide a comprehensive solution for managing product catalogs, customer orders, sales representatives, and real-time analytics.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Java', 'Spring MVC', 'MySQL', 'REST API'],
      githubUrl: 'https://github.com/abubakar751',
    },
  ];

  const features = [
    {
      icon: <Code className="h-6 w-6 text-primary-600 dark:text-primary-500" />,
      title: 'Java Development',
      description: 'Robust and scalable applications using Java 1.8, J2EE, and modern frameworks'
    },
    {
      icon: <Server className="h-6 w-6 text-secondary-600 dark:text-secondary-500" />,
      title: 'Backend Development',
      description: 'RESTful APIs and microservices using Spring Boot and Spring MVC'
    },
    {
      icon: <Database className="h-6 w-6 text-accent-600 dark:text-accent-500" />,
      title: 'Database Design',
      description: 'Efficient database solutions with MySQL, Oracle, and Hibernate ORM'
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-500" />,
      title: 'Team Collaboration',
      description: 'Experienced in working with cross-functional teams in Agile environments'
    },
  ];

  return (
    <div>
      <Hero />
      
      {/* About Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="About Me" 
            subtitle="Experienced Java Developer specializing in building robust web applications." 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I am a passionate Java developer with expertise in building robust web applications 
                using Java, Spring Boot, Angular, and MySQL. I specialize in designing scalable 
                back-end services, developing RESTful APIs, and implementing security protocols with 
                Spring Security.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                With strong hands-on experience in requirement analysis, system design, and end-to-end 
                development of software solutions, I focus on creating high-performance, user-centric 
                applications that prioritize quality, maintainability, and seamless user experiences.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                I graduated with a BCA degree from Siddharth University in 2024 and continuously strive 
                to expand my knowledge and stay updated with the latest technologies and best practices 
                in software development.
              </p>
            </motion.div>
            
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm"
                  >
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="My Skills" 
            subtitle="Proficiency in various technologies and tools" 
            centerAlign={true} 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                percentage={skill.percentage}
                color={skill.color}
                delay={skill.delay}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Featured Projects" 
            subtitle="Some of my recent work" 
            centerAlign={true} 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          
          <div className="mt-12 text-center">
            <motion.a
              href="/projects"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-300"
            >
              View All Projects
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;