const ProjectsSection = () => {
  const projects = [
    {
      title: 'Support Ticket Management System',
      description: 'Developed a comprehensive ticket management system to streamline technical support workflows, improve response times, and enhance customer satisfaction.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      features: [
        'Real-time ticket tracking',
        'Automated routing and escalation',
        'Analytics dashboard',
        'Knowledge base integration'
      ],
      link: '#'
    },
    {
      title: 'Customer Training Portal',
      description: 'Created an interactive training platform for customer onboarding and education, featuring video tutorials, documentation, and progress tracking.',
      technologies: ['TypeScript', 'React', 'TailwindCSS', 'Firebase'],
      features: [
        'Video hosting and streaming',
        'Interactive quizzes',
        'Progress tracking',
        'Certificate generation'
      ],
      link: '#'
    },
    {
      title: 'Technical Documentation Site',
      description: 'Built a comprehensive documentation platform with search functionality, versioning, and collaborative editing capabilities.',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
      features: [
        'Full-text search',
        'Version control',
        'API documentation',
        'User feedback system'
      ],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-primary-50 text-primary-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-start">
                        <div className="w-1 h-1 bg-primary-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={project.link}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                >
                  View Project
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
