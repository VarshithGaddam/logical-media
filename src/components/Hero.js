import React from 'react';

const Hero = () => {
  return (
    <section className="relative px-6 sm:px-10 py-12 sm:py-16 bg-white text-left overflow-hidden">
      <div className="max-w-2xl z-10 relative">
        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-black">
          We Build <span className="text-[#1F1B96]">Identity</span><br />
          That Build Your <span className="text-[#1F1B96]">Brand</span>
        </h1>

        {/* Sub Text */}
        <p className="text-sm sm:text-base text-gray-600 mt-4 sm:mt-6 max-w-xl">
          We help creators and brands grow faster with high-converting short-form content, thumbnails, and video strategies.
        </p>

        {/* CTAs */}
        <div className="mt-6 sm:mt-8 flex flex-wrap gap-4">
          <button
            className="px-6 sm:px-8 py-3 text-white rounded-full hover:opacity-90 text-base sm:text-lg"
            style={{ background: 'linear-gradient(90deg, #1F1B96, #251DFF)' }}
          >
            Work with us →
          </button>
          <button className="px-6 sm:px-8 py-3 border border-[#1F1B96] text-[#1F1B96] rounded-full hover:bg-[#1F1B96] hover:text-white text-base sm:text-lg transition">
            Our Work
          </button>
        </div>

        {/* Services Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold mt-8 sm:mt-12 mb-6 sm:mb-8 text-[#1F1B96]">
          Services we offer
        </h2>

        {/* Service Cards */}
        <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 justify-start">
          {/* Card 1 - Video Editing */}
          <div
            className="bg-white rounded-xl border w-full sm:w-80 h-36 sm:h-40 flex items-center px-4 sm:px-5 py-4"
            style={{ borderColor: '#1F1B96', borderWidth: '2px' }}
          >
            <div className="flex flex-col flex-grow">
              <div className="text-left text-md sm:text-lg font-bold text-[#1F1B96]">Video Editing</div>
              <p className="text-xs sm:text-sm text-gray-700 mt-1 text-left leading-tight">
                Strategic, platform-ready videos that grab and hold attention.
              </p>
            </div>
            <img
              src="https://raw.githubusercontent.com/VarshithGaddam/gifs/refs/heads/main/79e2a2f710e0c8bc2dd3d3d8b749a9cba690b035.png"
              alt="Video Editing Icon"
              className="w-8 sm:w-10 h-8 sm:h-10 ml-3"
            />
          </div>

          {/* Card 2 - Graphic Designing */}
          <div
            className="bg-white rounded-xl border w-full sm:w-80 h-36 sm:h-40 flex items-center px-4 sm:px-5 py-4"
            style={{ borderColor: '#1F1B96', borderWidth: '2px' }}
          >
            <div className="flex flex-col flex-grow">
              <div className="text-left text-md sm:text-lg font-bold text-[#1F1B96]">Graphic Designing</div>
              <p className="text-xs sm:text-sm text-gray-700 mt-1 text-left leading-tight">
                Eye-catching thumbnails and visuals that drive clicks.
              </p>
            </div>
            <img
              src="https://raw.githubusercontent.com/VarshithGaddam/gifs/refs/heads/main/0171f6d2c9f8097a78b8f876c5644771cc7d1111.png"
              alt="Graphic Designing Icon"
              className="w-8 sm:w-10 h-8 sm:h-10 ml-3"
            />
          </div>

          {/* Card 3 - Content Strategy */}
          <div
            className="bg-white rounded-xl border w-full sm:w-80 h-36 sm:h-40 flex items-center px-4 sm:px-5 py-4"
            style={{ borderColor: '#1F1B96', borderWidth: '2px' }}
          >
            <div className="flex flex-col flex-grow">
              <div className="text-left text-md sm:text-lg font-bold text-[#1F1B96]">Content Strategy</div>
              <p className="text-xs sm:text-sm text-gray-700 mt-1 text-left leading-tight">
                Smart planning to grow your reach and impact consistently.
              </p>
            </div>
            <img
              src="https://raw.githubusercontent.com/VarshithGaddam/gifs/refs/heads/main/aa303dc6991285ff96ed5bcfc0203ef848b2e817%20(2).png"
              alt="Content Strategy Icon"
              className="w-8 sm:w-10 h-8 sm:h-10 ml-3"
            />
          </div>
        </div>
      </div>

      {/* Background Image - Mobile (below content) */}
      <div className="block sm:hidden mt-10">
        <img
          src="https://raw.githubusercontent.com/VarshithGaddam/gifs/refs/heads/main/thinking%202.png"
          alt="Hero Background"
          className="w-full max-h-[300px] object-contain mx-auto"
        />
      </div>

      {/* Background Image - Desktop (Right Side) */}
      <div className="absolute inset-y-0 right-0 w-1/2 hidden sm:block">
        <img
          src="https://raw.githubusercontent.com/VarshithGaddam/gifs/refs/heads/main/thinking%202.png"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
