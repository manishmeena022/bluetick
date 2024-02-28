import React from 'react';

const Blogs = () => {

  // Define an array of blogs
  const blogs = [
    {
      title: "Speaking SQL: Turning Natural Language into Database Dialogues",
      description: "In the realm of enterprise data management, SQL databases have long stood as the backbone, housing vast quantities of invaluable information. Leveraging Large Language Models (LLMs) to interact with SQL databases using natural language.",
      redirectLink: "https://www.bluetickconsultants.com/speaking-sql-turning-natural-language-into-database-dialogues.html"
    },
    {
      title: "Beyond Basics: Elevating AI with Reinforcement Learning from Human Feedback",
      description: "Reinforcement Learning from Human Feedback (RLHF) was arguably the key behind the success of ChatGPT, marking a significant advancement in AI's ability to understand and engage in human language.",
      redirectLink: "https://www.bluetickconsultants.com/beyond-basics-elevating-ai-with-reinforcement-learning-from-human-feedback.html"
    },
    {
      title: "The Fine Art of Tuning: Parameter-Efficient Fine-Tuning",
      description: "Welcome to our exploration of the fascinating world of large language models! Fine-tuning requires adjusting countless parameters, which is time-consuming, and the GPU demands are immense.",
      redirectLink: "https://www.bluetickconsultants.com/the-fine-art-of-tuning-parameter-efficient-fine-tuning.html"
    },
    {
      title: "PrivAIcy Matters: Balancing Privacy, Price, and Performance",
      description: "Welcome to the enthralling universe of Generative AI! This technology has unassumingly become the new frontier for a plethora of industries, including tech, banking, and media.",
      redirectLink: "https://www.bluetickconsultants.com/privaicy-matters-balancing-privacy-price-and-performance-in-in-house-llm-deployments.html"
    }
  ];

  return (
    // Blogs list container
    <div className="article-list bg-gray-100 py-16 px-4 sm:px-0">
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">Latest Articles</h2>
        {/* Grid for blogs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Map over the blogs array */}
          {blogs.map((blog, index) => (
            // Blog item container
            <div key={index} className="article-item bg-white rounded-lg shadow-md p-6">
              {/* Blog title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h3>
              {/* Blog description */}
              <p className="text-gray-600 mb-4">{blog.description}</p>
              {/* Read more link */}
              <a href={blog.redirectLink} className="text-blue-500 hover:text-blue-600">Read more</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blogs;
