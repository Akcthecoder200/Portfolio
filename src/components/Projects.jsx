import React from "react";
import { ExternalLink, Github } from "lucide-react";
import medibotImg from "../assets/pexels-pixabay-40568.jpg";
import codesyncImg from "../assets/pexels-goumbik-574071.jpg"; // <-- Import your asset

const Projects = () => {
  const projects = [
    {
      title: "CodeSync - Real-Time Code Editor",
      description:
        "A real-time collaborative code editor with instant code sync and multi-language execution. The platform includes a collaborative whiteboard and a robust room management.",
      image: codesyncImg, // <-- Use local asset here
      tags: ["React", "Node.js", "MongoDB", "Socket.io", "tldraw"],
      github: "https://github.com/Akcthecoder200/Realtime-Code-Editor",
      live: "https://realtime-code-editor-inag.onrender.com/",
    },
    {
      title: "ConnectUs - Networking Platform",
      description:
        "A modern, AI-powered networking platform featuring intelligent job matching, secure blockchain payments, and comprehensive user profiles.",
      image:
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "MongoDB", "Node.js", "ethers.js", "GenAI"],
      github: "https://github.com/Akcthecoder200/Job-portal",
      live: "https://job-portal-1-1lr4.onrender.com/",
    },
    {
      title: "Medibot - AI Health Assistant",
      description:
        " An AI healthcare assistant powered by GenAI and RAG. It provides accurate medical information from a custom knowledge base and supports daily conversations.",
      image: medibotImg,
      tags: ["Python", "GenAI", "LangChain", "Pinecone"],
      github: "https://github.com/Akcthecoder200/Medibot",
      live: "https://medibot-7cqk.vercel.app/",
    },
    // {
    //   title: 'Social Media Dashboard',
    //   description: 'A comprehensive social media analytics dashboard with real-time data visualization, engagement metrics, and automated reporting features.',
    //   image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tags: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
    //   github: '#',
    //   live: '#'
    // },
    // {
    //   title: 'Cryptocurrency Tracker',
    //   description: 'Real-time cryptocurrency tracking application with portfolio management, price alerts, and detailed market analysis.',
    //   image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tags: ['React', 'Redux', 'WebSocket', 'Chart.js'],
    //   github: '#',
    //   live: '#'
    // },
    // {
    //   title: 'Recipe Sharing Platform',
    //   description: 'A community-driven recipe sharing platform where users can upload, share, and discover new recipes with ratings and reviews.',
    //   image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tags: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS'],
    //   github: '#',
    //   live: '#'
    // }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a
            unique challenge and learning experience that helped me grow as a
            developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href={project.live}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Akcthecoder200"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Github className="w-5 h-5 mr-2" />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
