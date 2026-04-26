const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Professional Summary
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              As a Support Specialist at Junction with a strong foundation in development, I bring a unique blend of technical expertise 
              and customer-centric problem-solving skills. My experience spans both software development 
              and technical support, allowing me to create solutions that not only work well 
              technically but also provide exceptional user experiences.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I specialize in bridging the gap between complex technical systems and end-user needs, 
              ensuring that technology serves people effectively and intuitively. My background in both 
              development and support gives me a comprehensive understanding of the entire product lifecycle.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-6">Key Strengths</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                </div>
                <div className="ml-4">
                  <h5 className="font-medium text-gray-900">Technical Support Excellence</h5>
                  <p className="text-gray-600 text-sm">Providing top-tier technical assistance and problem resolution</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                </div>
                <div className="ml-4">
                  <h5 className="font-medium text-gray-900">Development Skills</h5>
                  <p className="text-gray-600 text-sm">Building robust and user-friendly applications</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                </div>
                <div className="ml-4">
                  <h5 className="font-medium text-gray-900">User-Centric Approach</h5>
                  <p className="text-gray-600 text-sm">Focusing on creating exceptional user experiences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
