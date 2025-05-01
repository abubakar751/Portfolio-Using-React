import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';
import { Award, BookOpen, Brain, Clock } from 'lucide-react';

const AboutPage: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Siddharth University',
      period: '2021 - 2024',
      description: 'Focused on computer science fundamentals, programming, and software development concepts.'
    }
  ];

  const certifications = [
    {
      title: 'Oracle Cloud Infrastructure Certified Foundations Associate',
      issuer: 'Oracle University',
      date: '2023',
      description: 'Certification validating essential knowledge of cloud concepts and Oracle Cloud Infrastructure services.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="About Me" 
            subtitle="Learn more about my background and expertise" 
            centerAlign={true}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
                <div className="aspect-w-1 aspect-h-1">
                  <img 
                    src="image/photo.jpg" 
                    alt="Abu Bakar" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Abu Bakar</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">Java Developer & Software Engineer</p>
                  
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                        <p className="font-medium text-gray-900 dark:text-white">Mumbai, India</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                        <a 
                          href="mailto:abubakartechsak01@gmail.com" 
                          className="font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                        >
                          Contact Me
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <a 
                      href="image/resume.pdf" 
                      download="resume.pdf"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-300"
                    >
                      Download Resume
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Professional Profile</h3>
                
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300">
                    Experienced Java Developer specializing in building robust web applications using Java, Spring Boot, Angular, and MySQL. Proficient in designing scalable back-end services, developing RESTful APIs, and implementing security protocols with Spring Security.
                  </p>
                  
                  <p className="text-gray-700 dark:text-gray-300 mt-4">
                    Strong hands-on experience in requirement analysis, system design, and end-to-end development of software solutions. Passionate about creating high-performance, user-centric applications with a focus on quality, maintainability, and seamless user experiences.
                  </p>
                  
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Key Strengths</h4>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 text-primary-600 dark:text-primary-400 mr-2">•</span>
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>Team Collaboration:</strong> Proven experience working in cross-functional teams, contributing to project success through clear communication and collaboration.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 text-primary-600 dark:text-primary-400 mr-2">•</span>
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>Adaptability and Learning:</strong> Quick to adapt to new technologies and methodologies, with a continuous drive for learning and staying updated with industry best practices.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 text-primary-600 dark:text-primary-400 mr-2">•</span>
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>Efficient Problem-solving:</strong> Strong analytical skills with a focus on performance optimization and code quality.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 text-primary-600 dark:text-primary-400 mr-2">•</span>
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>Strong Core Java Knowledge:</strong> Proficiency in Java fundamentals like OOP, collections, multithreading, and exception handling.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div 
                  className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <div className="flex items-center mb-4">
                    <BookOpen className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-2" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <div key={index} className="border-l-2 border-primary-500 dark:border-primary-600 pl-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                        <p className="text-primary-600 dark:text-primary-400">{edu.institution}</p>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{edu.period}</span>
                        </div>
                        <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">{edu.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <div className="flex items-center mb-4">
                    <Award className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-2" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Certifications</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {certifications.map((cert, index) => (
                      <div key={index} className="border-l-2 border-accent-500 dark:border-accent-600 pl-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{cert.title}</h4>
                        <p className="text-accent-600 dark:text-accent-400">{cert.issuer}</p>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{cert.date}</span>
                        </div>
                        <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">{cert.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;