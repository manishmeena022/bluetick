import React from 'react';

const Offer = () => {

  // Array containing different offerings
  const offerings = [
    {
      title: "Explore AI Opportunities for Your Enterprise",
      description: "Unlock the potential of generative AI by identifying tailored opportunities for integration within your organization, ensuring a strategic and efficient approach to AI implementation."
    },
    {
      title: "Design AI Trust Layer",
      description: "Prioritize data security and build trust in generative AI applications with a dedicated trust layer, emphasizing privacy-focused solutions that safeguard both organizational and customer data."
    },
    {
      title: "Scalability-Focused Solutions",
      description: "Streamline and optimize business processes with comprehensive workflow automation, ensuring seamless integration of AI technologies from inception to execution for increased efficiency and productivity."
    },
    {
      title: "End to end Workflow automation",
      description: "Implement cutting-edge, scalable generative AI solutions that not only meet current organizational needs but also adapt and grow with the evolving demands of your enterprise, providing a future-proof approach to AI integration."
    }
  ];

  return (
    // Section for displaying offer details
    <section className="offer-section bg-gray-100 py-16 px-4 sm:px-0">
      <div className="container mx-auto">
        {/* Section title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8 text-center">What We Offer</h2>
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-6">
          {/* Map over the offerings array */}
          {offerings.map((offering, index) => (
            // Each offerings displayed within a box
            <div key={index} className="offer-item border  border-gray-300 rounded-lg p-6  bg-white">
              <div>
                {/* Offering title */}
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">{offering.title}</h3>
                {/* Offering description */}
                <p className="text-lg text-gray-600">{offering.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Offer;
