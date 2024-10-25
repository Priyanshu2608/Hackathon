import React from 'react';
import ed1 from '../assets/ed1.jpg';
import './EduHub.css';

const cardData = [
  {
    title: "How small farmers can increase their yield?",
    description: "Small farmers can increase their yield by adopting sustainable farming practices, using improved seeds, efficient irrigation, and modern technologies.",
    link: "https://www.youtube.com/watch?v=FyOzeO6fQwI",
  },
  {
    title: "What is Crop Rotation?",
    description: "Learn how rotating crops can enhance soil health, reduce pests, and improve yields while maintaining ecological balance.",
    link: "https://www.youtube.com/watch?v=KhwxhDY-mu0",
  },
  {
    title: "Integrated Pest Management for Sustainable Agriculture",
    description: "Explore effective pest control methods, including organic solutions and integrated pest management (IPM) to protect your crops.",
    link: "https://www.youtube.com/watch?v=Uo05345F1C8",
  },
  {
    title: "Sustainable Agriculture Practices",
    description: "Discover sustainable techniques like conservation tillage and cover cropping that can boost productivity while preserving the environment.",
    link: "https://www.youtube.com/watch?v=Ltc4ZzQN_vE",
  },
  {
    title: "Irrigation Systems",
    description: "Understand various irrigation methods, such as drip and rainwater harvesting, to maximize water efficiency and crop health.",
    link: "https://www.youtube.com/watch?v=jDXGPw0VP6A",
  },
  {
    title: "Soil Health and Testing",
    description: "Learn the importance of soil testing and how to amend your soil to enhance fertility and support healthy plant growth.",
    link: "https://www.youtube.com/watch?v=3qjOc_rfFHw",
  },
  {
    title: "E-Technology Aid in Agriculture",
    description: "Explore the latest technologies in agriculture, from drones to farm management software, to improve efficiency and yield.",
    link: "https://www.youtube.com/watch?v=RS29M7vrBJE",
  },
  {
    title: "Organic Fertilizer Production",
    description: "Discover how to create nutrient-rich compost and organic fertilizers from farm waste to enhance soil quality sustainably.",
    link: "https://www.youtube.com/watch?v=in_xRtSAG4g",
  },
];

const EduHub = () => {
  return (
    <>
      <div className='main'>
        <img className='Head' src={ed1} alt="Educational Site" />
        <h1 className='Header'>Welcome To The Educational Site Of Kisaan Saathi</h1> 
      </div>

      <div className='card-container'>
        {cardData.map((card, index) => (
          <div key={index} className='card'>
            <div className="card-body">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
              <button className="card-button">
                <a href={card.link} target="_blank" rel="noopener noreferrer">Click Here</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default EduHub;
