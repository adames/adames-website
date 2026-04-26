const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Support Specialist',
      company: 'Junction',
      period: '2022 - Present',
      description: 'Providing comprehensive technical support and assistance to users, troubleshooting complex issues, and ensuring smooth operation of systems. Creating documentation and training materials to improve team efficiency.',
      achievements: [
        'Streamlined support workflows reducing response time by 25%',
        'Developed comprehensive knowledge base for common issues',
        'Mentored new team members on support best practices',
        'Maintained 98% customer satisfaction rating'
      ]
    },
    {
      title: 'Technical Support Engineer',
      company: 'Previous Company',
      period: '2020 - 2022',
      description: 'Handled escalated technical issues, collaborated with development teams to resolve bugs, and provided enterprise-level support to key clients.',
      achievements: [
        'Resolved critical issues for enterprise clients under tight deadlines',
        'Contributed to product improvements based on user feedback',
        'Implemented monitoring systems to proactively identify issues',
        'Reduced ticket escalation rate by 40%'
      ]
    },
    {
      title: 'Junior Developer',
      company: 'Tech Startup',
      period: '2019 - 2020',
      description: 'Developed features for web applications, participated in code reviews, and assisted with debugging and testing. Gained hands-on experience with modern development practices.',
      achievements: [
        'Built responsive UI components using React and TypeScript',
        'Participated in agile development process and daily standups',
        'Collaborated with senior developers on feature implementation',
        'Contributed to code quality improvements and testing'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8 ml-auto'}`}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {exp.title}
                  </h3>
                  <h4 className="text-lg text-primary-600 mb-2">
                    {exp.company}
                  </h4>
                  <p className="text-sm text-gray-500 mb-4">
                    {exp.period}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {exp.description}
                  </p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                        </div>
                        <span className="ml-3 text-gray-600 text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
