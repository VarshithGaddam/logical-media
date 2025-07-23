import React, { useState } from 'react';

const shorts = [
  { id: '_bKBVP5NNqY', title: 'Short Edit 1' }, // Replace 'dQw4w9WgXcQ' with your actual YouTube Short ID
  { id: '4uqlTKGNSuY', title: 'Short Edit 2' }, // Replace with actual ID
  { id: 'O8Qf8msjBCs', title: 'Short Edit 3' },      // Replace with actual ID
  { id: 'IFGSnr2Trj8', title: 'Short Edit 4' },     // Replace with actual ID
  { id: 'NOuS3I4ciNE', title: 'Short Edit 5' }      // Replace with actual ID
  // Add more objects here if needed, e.g., { id: 'your-id', title: 'Short Edit 6' }
];

const videos = [
  { id: 'GWGuaz5O32Y', title: 'Video Edit 1' }, // Replace 'M7lc1UVf-VE' with your actual YouTube Video ID
  { id: '1VNAYpPFi1Y', title: 'Video Edit 2' }, // Replace with actual ID
  { id: 'E3nzc0JNqWo', title: 'Video Edit 3' },      // Replace with actual ID
  { id: 'n8WTRJLoVB8', title: 'Video Edit 4' },     // Replace with actual ID
  { id: 'xSwHyFBjmRQ', title: 'Video Edit 5' }      // Replace with actual ID
  // Add more objects here if needed, e.g., { id: 'your-id', title: 'Video Edit 6' }
];

const Slider = ({ items, isShorts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="relative overflow-visible">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * (100 / 1.5)}%)` }}
      >
        {items.map((item, index) => (
          <div key={item.id} className="flex-shrink-0 p-3" style={{ flexBasis: '66.67%' }}> {/* Decreased padding to p-1 for less space */}
            <div className={isShorts ? "w-64 md:w-96 mx-auto" : "w-full md:w-[800px] mx-auto"}>
              <iframe
                width="100%"
                height={isShorts ? "640" : "360"} // Shorts: Tall for 9:16; Videos: Increased height for larger display
                style={{ aspectRatio: isShorts ? '9/16' : '16/9' }} // Enforce 9:16 for shorts, 16:9 for videos
                src={`https://www.youtube.com/embed/${item.id}?autoplay=${index === currentIndex ? '1' : '0'}`} // Autoplay only for current index
                title={item.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
            <p className="text-center mt-2 text-gray-700">{item.title}</p>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#1F1B96] text-white px-2 py-1 rounded-full opacity-75 hover:opacity-100"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#1F1B96] text-white px-2 py-1 rounded-full opacity-75 hover:opacity-100"
      >
        →
      </button>
    </div>
  );
};

const OurWork = () => {
  return (
    <section className="px-6 sm:px-10 py-16 bg-white">
      <h2 className="text-3xl font-bold text-[#1F1B96] mb-8 text-center">Our Work</h2>
      
      {/* Shorts Section */}
      <h3 className="text-2xl font-semibold text-[#1F1B96] mb-4">Edited Shorts</h3>
      <Slider items={shorts} isShorts={true} />
      
      {/* Videos Section */}
      <h3 className="text-2xl font-semibold text-[#1F1B96] mt-12 mb-4">Edited Videos</h3>
      <Slider items={videos} isShorts={false} />
    </section>
  );
};

export default OurWork;
