import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import pengumumanData from '../../data/pengumuman.json';
import { Link } from 'react-router';

const ArticleCard = ({ title, date, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
      <div className="aspect-w-16 aspect-h-9 relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="text-gray-500 text-sm mb-2">{date}</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
        
        <p className="text-gray-600 mb-4 flex-grow">
          {`${description.substring(0, 150)}...`}
        </p>
        
        <button className="text-Peach hover:text-Peach/60 font-medium transition-colors duration-200 mt-auto">
          <a href="#">Read More</a>
        </button>
      </div>
    </div>
  );
};

const ArticleSection = () => {
  const [articles] = useState(pengumumanData.pengumuman);
  
  return (
    <div className="py-12 mt-12" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Announcements</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest news, events, and announcements from our department.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => {
            const animation = index % 3 === 1 ? "fade-down" : "fade-right";
            
            return (
              <div
                key={article.id}
                data-aos={animation}
                data-aos-duration="10000"
                className="h-full"
              >
                <ArticleCard 
                  title={article.title}
                  date={article.date}
                  description={article.content}
                  image={article.imageUrl}
                />
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-Peach px-8 py-3 rounded-lg hover:bg-Peach/60 transition-colors duration-200 font-medium">
            <Link to="/pengumuman">
              <div className="flex items-center space-x-2">
                <span>View All Announcement</span>
                <FaArrowRight />
              </div>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleSection;