import React from 'react';

const HeroSection = () => {
  
  return (
    // Hero section with background color and padding
    <section className="bg-gray-100 py-16 px-4 sm:px-0">
      {/* Container to center content horizontally */}
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Left side content */}
        <div className="lg:w-1/2 lg:pr-16">
          {/* Main heading */}
          <h1 className="text-4xl lg:text-5xl font-semibold text-gray-800 leading-tight mb-6">Transforming Enterprises with Generative AI Solutions</h1>
          {/* Description */}
          <p className="text-lg text-gray-600 mb-8">Bluetick Consultants, founded in 2017, is a technology-driven firm making a significant impact in the Indian and US startup ecosystems.</p>
          {/* Call-to-action button */}
          <a href="https://www.bluetickconsultants.com/generative-ai.html" className="btn bg-blue-500 text-white py-3 px-8 rounded-md shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">Learn More</a>
        </div>
        {/* Right side content */}
        <div className="lg:w-1/2 lg:pl-16">
          {/* Image */}
          <img src="https://q4blog.com/wp-content/uploads/2023/04/Webinar_blog.jpg" alt='Generative AI' className='generative-ai rounded-lg shadow-lg' />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
