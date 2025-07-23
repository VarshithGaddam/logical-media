import React from 'react';

const Services = () => {
  return (
    <section className="px-10 py-10 bg-white">
      <h2 className="text-3xl font-bold text-black-900 mb-8">Services we offer</h2>
      <div className="flex space-x-6 justify-start">
        <div className="bg-white px-8 py-4 rounded-3xl shadow-md text-black-900 font-semibold text-lg border border-blue-600">
          Video Editing
        </div>
        <div className="bg-white px-8 py-4 rounded-3xl shadow-md text-black-900 font-semibold text-lg border border-blue-600">
          Graphic Designing
        </div>
        <div className="bg-white px-8 py-4 rounded-3xl shadow-md text-black-900 font-semibold text-lg border border-blue-600">
          Content Strategy
        </div>
      </div>
    </section>
  );
};

export default Services;
