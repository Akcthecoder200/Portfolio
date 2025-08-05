import React from 'react';
import { Code2, Palette, Smartphone, Database } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Frontend Development',
      description: 'React, JavaScript, Tailwind CSS, Next.js',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Node.js, Python, PostgreSQL, MongoDB',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Figma, Adobe XD, User Research, Prototyping',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Development',
      description: 'React Native, Flutter, iOS, Android',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate developer with 5+ years of experience creating digital solutions 
            that make a difference. I love turning complex problems into simple, beautiful designs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl p-1">
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  My Journey
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Started as a curious developer who loved solving problems through code. 
                  Over the years, I've worked with startups and established companies, 
                  building everything from simple websites to complex web applications.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  I believe in writing clean, efficient code and creating user experiences 
                  that are both beautiful and functional. Always learning, always growing.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">5+ Years Experience</h4>
                <p className="text-gray-600 dark:text-gray-300">Building web applications</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">50+ Projects</h4>
                <p className="text-gray-600 dark:text-gray-300">Successfully delivered</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Always Learning</h4>
                <p className="text-gray-600 dark:text-gray-300">Staying updated with latest tech</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${skill.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {skill.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;