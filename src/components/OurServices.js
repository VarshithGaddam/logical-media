import React from 'react';

const services = [
  {
    title: 'Video Editing',
    subItems: ['Long Form Content', 'Short Form Content'],
    description: 'Our video editing services transform raw footage into captivating stories, optimized for maximum engagement across platforms.'
  },
  {
    title: 'Graphic Designing',
    subItems: ['Thumbnails', 'Posters'],
    description: 'We create visually stunning graphics that grab attention and align with your brand\'s vibe, driving clicks and shares.'
  },
  {
    title: 'Content Strategy Calls',
    description: 'We strategize your future content to get more views and more conversions, tailoring plans for GenZ trends and audience behaviors.'
  },
  {
    title: 'Script Writing',
    description: 'We write retention-based scripts which have the hook, body, and conclusion to maintain high retention rate, keeping viewers hooked from start to finish.'
  }
];

const GenZServices = () => {
  return (
    <section className="px-6 sm:px-10 py-16 bg-white">
      <h2 className="text-3xl font-bold text-[#1F1B96] mb-8 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white border border-[#1F1B96] rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold text-[#1F1B96] mb-4">{service.title}</h3>
            {service.subItems && (
              <ul className="list-disc pl-5 mb-4 text-gray-700">
                {service.subItems.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GenZServices;
