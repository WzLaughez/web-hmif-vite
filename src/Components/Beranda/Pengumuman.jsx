import React, { useState } from 'react';

import { FaArrowRight  } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
const ArticleCard = ({ title, date, description, image }) => {

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      
      {/* Content */}
      <div className="p-5">
        <div className="text-gray-500 text-sm mb-2">{date}</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
        
        <p className="text-gray-600 mb-4">
          {`${description.substring(0, 150)}...`}
        </p>
        
        <button
          
          className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
        >
          <a href="#">Read More </a>
        </button>
      </div>
    </div>
  );
};

const ArticleSection = () => {
  const articles = [
    {
      id: 1,
      title: "New Research Lab Opening",
      date: "January 21, 2025",
      description: "We are excited to announce the opening of our new research laboratory. This state-of-the-art facility will house cutting-edge equipment and provide opportunities for advanced research in computer science and informatics. The lab will be available to both undergraduate and graduate students, promoting collaborative research and innovation. This development marks a significant milestone in our commitment to advancing technological education and research capabilities.",
      image: "/api/placeholder/800/400"
    },
    {
      id: 2,
      title: "Upcoming Workshop Series",
      date: "January 20, 2025",
      description: "Join us for our upcoming workshop series on artificial intelligence and machine learning. These hands-on sessions will cover fundamental concepts, practical applications, and current trends in AI/ML. Perfect for students and professionals looking to expand their knowledge in these rapidly growing fields. Sessions will be led by industry experts and academic professionals. Limited seats available, register early to secure your spot.",
      image: "/api/placeholder/800/400"
    },
    {
      id: 3,
      title: "Upcoming Workshop Series",
      date: "January 20, 2025",
      description: "Join us for our upcoming workshop series on artificial intelligence and machine learning. These hands-on sessions will cover fundamental concepts, practical applications, and current trends in AI/ML. Perfect for students and professionals looking to expand their knowledge in these rapidly growing fields. Sessions will be led by industry experts and academic professionals. Limited seats available, register early to secure your spot.",
      image: "/api/placeholder/800/400"
    }
  ];

  return (
    <div className="bg-white py-12 mt-12" data-aos="fade-up " >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Announcements</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest news, events, and announcements from our department.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => 
              {
                let animation = ""
                if (index % 3 === 0) {
                animation = "fade-right" // Left
                } else if (index % 3 === 1) {
                animation = "fade-down"; // Center
                } else {
                
                animation = "fade-right"; // Right
                }
            
            return (
                <div
                key={article.id}
                data-aos={animation}
                data-aos-duration="10000"
                >
                    <ArticleCard 
                    key={article.id}
                    title={article.title}
                    date={article.date}
                    description={article.description}
                    image={article.image}
                    />
              </div>)
              })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12" >
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
            <div className="flex items-center space-x-2">
                        <span>View All Announcement</span>
                        <FaArrowRight className="" />
                      </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleSection;