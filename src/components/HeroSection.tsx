const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Hi, I'm <span className="text-primary-600">Adames Hodelin</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          Support Specialist | Developer | Problem Solver
        </p>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Passionate about creating exceptional user experiences and providing top-notch technical support. 
          Bridging the gap between complex technology and user-friendly solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200"
          >
            Get In Touch
          </button>
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors duration-200"
          >
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
