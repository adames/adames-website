const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo - Responsive sizing with dark mode support */}
        <div className="mb-8">
          <img 
            src="/assets/svg/logo-color.svg" 
            alt="adames.cc logo"
            className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto animate-fade-in dark:hidden"
          />
          <img 
            src="/assets/svg/logo-grayscale-inverted.svg" 
            alt="adames.cc logo"
            className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto animate-fade-in hidden dark:block"
          />
        </div>
        
        {/* Title - Responsive text sizing */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Adames Hodelin
        </h1>
        
        {/* Subtitle - Responsive text sizing */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6">
          Support Specialist | Developer | Problem Solver
        </p>
        
        {/* Description - Responsive text and width */}
        <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Passionate about creating exceptional user experiences and providing top-notch technical support. 
          Bridging the gap between complex technology and user-friendly solutions.
        </p>
        
        {/* CTA Buttons - Responsive layout */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary-600 text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 text-sm sm:text-base"
          >
            Get In Touch
          </button>
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-primary-600 text-primary-600 px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors duration-200 text-sm sm:text-base"
          >
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
