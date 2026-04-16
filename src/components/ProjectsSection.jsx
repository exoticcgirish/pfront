import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import faceImg from "../assets/face.jpeg";
const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Web Application",
      description:
        "Full-stack e-commerce platform with JWT authentication, product management, and scalable MongoDB schema design.",
      tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d", // ecommerce
      liveUrl: "#",
      repoUrl: "https://github.com/exoticcgirish/commerce-project",
    },
    {
      title: "Face Recognition Attendance System",
      description:
        "Face recognition-based attendance system using FastAPI and DeepFace with secure JWT authentication.",
      tags: ["React", "FastAPI", "MongoDB", "DeepFace"],
      imageUrl: faceImg, // AI/face
      liveUrl: "#",
      repoUrl: "https://github.com/exoticcgirish/attendence",
    },
    {
      title: "Health & Fitness Application",
      description:
        "Workout tracking system with authentication, REST APIs, and responsive UI using React and FastAPI.",
      tags: ["React", "FastAPI", "MongoDB"],
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b", // fitness
      liveUrl: "#",
      repoUrl: "https://github.com/exoticcgirish/health",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built using React and Tailwind CSS to showcase projects.",
      tags: ["React", "Tailwind CSS", "Vite"],
      imageUrl: "./p.png", // coding
      liveUrl: "https://pfront-one.vercel.app/",
      repoUrl: "https://github.com/phoniccgirish/pfront",
    },
    {
      title: "Tic Tac Toe Game",
      description:
        "Interactive Tic Tac Toe game with dynamic logic and responsive UI.",
      tags: ["React", "JavaScript", "CSS"],
      imageUrl: "./t.png", // game
      liveUrl: "https://tic-tac-toe-toag.vercel.app/",
      repoUrl: "https://github.com/phoniccgirish/Tic-Tac-Toe",
    },
    {
      title: "Weather Web App",
      description:
        "Weather app using external API to show real-time weather data.",
      tags: ["JavaScript", "HTML", "CSS", "API"],
      imageUrl: "./w.png", // weather
      liveUrl: "https://weather-app0202.netlify.app/",
      repoUrl: "#",
    },
  ];

  return (
    <section id='projects' className='pt-20 scroll-mt-20 md:pt-32 bg-gray-50'>
      <div className='px-4 mx-auto text-center max-w-7xl'>
        <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
          My Projects
        </h2>
        <p className='mt-4 text-lg text-gray-600'>A few things I've built.</p>

        <div className='grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project) => (
            <div
              key={project.title}
              className='flex flex-col overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1'
            >
              {/* Image */}
              <img
                src={project.imageUrl}
                alt={project.title}
                className='flex-shrink-0 object-cover w-full h-48'
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/400x200?text=Project")
                }
              />

              {/* Content */}
              <div className='flex flex-col flex-grow p-6'>
                {/* Tags */}
                <div className='flex flex-wrap gap-2 mb-3'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className='px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full text-xs font-medium'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className='mb-2 text-xl font-bold text-left text-gray-900'>
                  {project.title}
                </h3>

                {/* Description */}
                <p className='text-base text-left text-gray-600'>
                  {project.description}
                </p>

                {/* Buttons */}
                <div className='flex flex-wrap gap-4 pt-6 mt-auto'>
                  {/* Show Live Demo only if exists */}
                  {project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700'
                    >
                      <FiExternalLink />
                      Live Demo
                    </a>
                  )}

                  {/* Show GitHub only if exists */}
                  {project.repoUrl !== "#" && (
                    <a
                      href={project.repoUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900'
                    >
                      <FaGithub />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
