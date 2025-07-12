import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, ExternalLink, Code, Database, Globe, Smartphone, Brain, Palette, Sun, Moon, Film, Bot, BookOpen } from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const themeClasses = {
    bg: isDark ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-slate-50 to-blue-50',
    nav: isDark ? 'bg-gray-900/80' : 'bg-white/80',
    navBorder: isDark ? 'border-gray-700' : 'border-gray-100',
    text: isDark ? 'text-white' : 'text-gray-900',
    textSecondary: isDark ? 'text-gray-300' : 'text-gray-600',
    textMuted: isDark ? 'text-gray-400' : 'text-gray-700',
    card: isDark ? 'bg-gray-800' : 'bg-white',
    cardBorder: isDark ? 'border-gray-700' : 'border-gray-100',
    section: isDark ? 'bg-gray-800' : 'bg-white',
    input: isDark ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-gray-700 border-gray-600 text-white placeholder-gray-400',
    button: isDark ? 'focus:ring-offset-gray-800' : 'focus:ring-offset-white'
  };

  return (
    <div className={`min-h-screen ${themeClasses.bg} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`${themeClasses.nav} backdrop-blur-md shadow-sm sticky top-0 z-50 border-b ${themeClasses.navBorder} transition-colors duration-300`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className={`font-bold text-xl ${themeClasses.text}`}>SA</div>
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#about" className={`${themeClasses.textSecondary} hover:text-blue-600 transition-colors duration-200`}>About</a>
              <a href="#skills" className={`${themeClasses.textSecondary} hover:text-blue-600 transition-colors duration-200`}>Skills</a>
              <a href="#projects" className={`${themeClasses.textSecondary} hover:text-blue-600 transition-colors duration-200`}>Projects</a>
              <a href="#contact" className={`${themeClasses.textSecondary} hover:text-blue-600 transition-colors duration-200`}>Contact</a>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${themeClasses.card} ${themeClasses.cardBorder} border hover:shadow-md transition-all duration-200`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-600" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              SA
            </div>
          </div>
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${themeClasses.text} mb-6`}>
            Sakha Abhiram
          </h1>
          <p className={`text-xl sm:text-2xl ${themeClasses.textSecondary} mb-8 max-w-3xl mx-auto`}>
            Passionate Software Developer crafting innovative AI solutions and modern web applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get In Touch
            </a>
            <a href="#projects" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 font-semibold">
              View Projects
            </a>
          </div>
        </div>
      </header>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold ${themeClasses.text} mb-4`}>About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className={`text-lg ${themeClasses.textMuted} leading-relaxed`}>
                I'm a dedicated software developer with a passion for creating elegant, efficient solutions to complex problems. 
                My journey in technology began with curiosity about how things work behind the scenes, and it has evolved into 
                a career focused on building impactful software applications with a special interest in AI and machine learning.
              </p>
              <p className={`text-lg ${themeClasses.textMuted} leading-relaxed`}>
                With expertise in modern web technologies, artificial intelligence, and a keen eye for user experience, I enjoy 
                transforming ideas into functional, beautiful applications. I believe in writing clean, maintainable code and 
                staying up-to-date with the latest industry trends and best practices.
              </p>
              <p className={`text-lg ${themeClasses.textMuted} leading-relaxed`}>
                When I'm not coding, you can find me exploring new AI technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community. I'm always excited to take on new challenges and 
                collaborate with like-minded professionals on innovative projects.
              </p>
            </div>
            <div className={`${themeClasses.card} rounded-2xl shadow-xl p-8 border ${themeClasses.cardBorder}`}>
              <h3 className={`text-2xl font-bold ${themeClasses.text} mb-6`}>What Drives Me</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className={themeClasses.textMuted}>Creating AI-powered solutions that make a real difference</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className={themeClasses.textMuted}>Continuous learning and adapting to new technologies</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className={themeClasses.textMuted}>Building scalable, maintainable software architectures</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className={themeClasses.textMuted}>Collaborating with teams to achieve common goals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-4 sm:px-6 lg:px-8 ${themeClasses.section}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold ${themeClasses.text} mb-4`}>Skills & Interests</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Technical Skills */}
            <div className={`${isDark ? 'bg-gradient-to-br from-blue-900/50 to-blue-800/50' : 'bg-gradient-to-br from-blue-50 to-blue-100'} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
              <div className="flex items-center mb-6">
                <Code className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className={`text-xl font-bold ${themeClasses.text}`}>Technical Skills</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className={themeClasses.textMuted}>JavaScript & TypeScript</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className={themeClasses.textMuted}>React & Next.js</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className={themeClasses.textMuted}>Node.js & Express</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className={themeClasses.textMuted}>Python & Django</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className={themeClasses.textMuted}>HTML5 & CSS3</span>
                </li>
              </ul>
            </div>

            {/* AI & Database */}
            <div className={`${isDark ? 'bg-gradient-to-br from-green-900/50 to-green-800/50' : 'bg-gradient-to-br from-green-50 to-green-100'} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
              <div className="flex items-center mb-6">
                <Database className="w-8 h-8 text-green-600 mr-3" />
                <h3 className={`text-xl font-bold ${themeClasses.text}`}>AI & Database</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  <span className={themeClasses.textMuted}>Machine Learning & AI</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  <span className={themeClasses.textMuted}>TensorFlow & PyTorch</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  <span className={themeClasses.textMuted}>PostgreSQL & MongoDB</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  <span className={themeClasses.textMuted}>Git & GitHub</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  <span className={themeClasses.textMuted}>Docker & AWS</span>
                </li>
              </ul>
            </div>

            {/* Interests */}
            <div className={`${isDark ? 'bg-gradient-to-br from-purple-900/50 to-purple-800/50' : 'bg-gradient-to-br from-purple-50 to-purple-100'} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
              <div className="flex items-center mb-6">
                <Brain className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className={`text-xl font-bold ${themeClasses.text}`}>Interests</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  <span className={themeClasses.textMuted}>Natural Language Processing</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  <span className={themeClasses.textMuted}>Recommendation Systems</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  <span className={themeClasses.textMuted}>Open Source Contributing</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  <span className={themeClasses.textMuted}>UI/UX Design</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  <span className={themeClasses.textMuted}>Tech Education</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold ${themeClasses.text} mb-4`}>Featured Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Movie Recommendation System */}
            <div className={`${themeClasses.card} rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border ${themeClasses.cardBorder}`}>
              <div className="h-48 bg-gradient-to-br from-red-400 to-pink-600 flex items-center justify-center">
                <Film className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold ${themeClasses.text} mb-3`}>Movie Recommendation System</h3>
                <p className={`${themeClasses.textSecondary} mb-4`}>
                  An intelligent movie recommendation system using collaborative filtering and content-based algorithms. 
                  Built with Python, scikit-learn, and a React frontend for personalized movie suggestions.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Python</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Machine Learning</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">React</span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                  <a href="https://github.com/AbhiramSakha" target="_blank" rel="noopener noreferrer" className={`flex items-center ${themeClasses.textSecondary} hover:text-gray-800 transition-colors`}>
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>

            {/* AI Text Generator */}
            <div className={`${themeClasses.card} rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border ${themeClasses.cardBorder}`}>
              <div className="h-48 bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center">
                <Bot className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold ${themeClasses.text} mb-3`}>AI Text Generator</h3>
                <p className={`${themeClasses.textSecondary} mb-4`}>
                  Advanced AI-powered text generation application using transformer models. Features include creative writing, 
                  content creation, and customizable text styles with real-time generation capabilities.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Python</span>
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Transformers</span>
                  <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm">FastAPI</span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                  <a href="https://github.com/AbhiramSakha" target="_blank" rel="noopener noreferrer" className={`flex items-center ${themeClasses.textSecondary} hover:text-gray-800 transition-colors`}>
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>

            {/* Learning Courses Platform */}
            <div className={`${themeClasses.card} rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border ${themeClasses.cardBorder}`}>
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-600 flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold ${themeClasses.text} mb-3`}>Learning Courses Platform</h3>
                <p className={`${themeClasses.textSecondary} mb-4`}>
                  Comprehensive e-learning platform with interactive courses, progress tracking, and assessment tools. 
                  Features video streaming, quizzes, certificates, and personalized learning paths.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">MongoDB</span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                  <a href="https://github.com/AbhiramSakha" target="_blank" rel="noopener noreferrer" className={`flex items-center ${themeClasses.textSecondary} hover:text-gray-800 transition-colors`}>
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, AI projects, or just having a chat about technology and innovation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <a href="mailto:abhiramsakhaa@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                    abhiramsakhaa@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/sakha-abhiram-60b138289/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                    linkedin.com/in/sakha-abhiram-60b138289
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">GitHub</h3>
                  <a href="https://github.com/AbhiramSakha" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                    github.com/AbhiramSakha
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Sakha Abhiram. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;