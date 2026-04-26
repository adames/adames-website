const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo - Main splash element */}
        <div className="mb-12">
          <img 
            src="/assets/svg/logo-color.svg" 
            alt="adames.cc logo"
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto animate-fade-in dark:hidden"
          />
          <img 
            src="/assets/svg/logo-grayscale-inverted.svg" 
            alt="adames.cc logo"
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto animate-fade-in hidden dark:block"
          />
        </div>
        
        {/* Name below logo */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
          Adames Hodelin
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8 animate-fade-in">
          Support Specialist | Developer | Problem Solver
        </p>
        
        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
          Passionate about creating exceptional user experiences and providing top-notch technical support. 
          Bridging the gap between complex technology and user-friendly solutions.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary-600 text-white px-8 sm:px-10 py-4 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 text-base sm:text-lg shadow-lg"
          >
            Get In Touch
          </button>
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400 px-8 sm:px-10 py-4 rounded-lg font-medium hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors duration-200 text-base sm:text-lg shadow-lg"
          >
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
