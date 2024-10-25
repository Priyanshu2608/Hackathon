import React from 'react';
import './About.css'; 
import priyanshu from '../assets/pri.jpg'
import akshay from '../assets/aksha.jpg'
import jay from '../assets/jay.jpg'
import arnav from '../assets/arnav.jpg'

const About = () =>{
    return (
        <div className="about-us-container">
            <h1>About Us</h1>
            <p>
                Welcome to Kisaan Saathi, a platform dedicated to supporting farmers by providing essential resources, tools, and information. Our mission is to empower the agricultural community with innovative solutions that enhance productivity, sustainability, and overall well-being. With a deep commitment to the farming industry, our team — Priyanshu, Akshay, Jay, and Arnav — work tirelessly to create a platform that addresses the unique challenges faced by farmers today. At Kisaan Saathi, we believe that by bridging the gap between technology and agriculture, we can help farmers thrive and ensure a better future for all.

            </p>
            <div className="team-section">
                <h2>Meet the Team</h2>
                <div className="team-members">
                    <div className="team-member">
                        <img src={priyanshu} alt="Priyanshu" />
                        <h3>Priyanshu</h3>
                        <p>Front-End Developer and BackEnd </p>
                    </div>
                    <div className="team-member">
                        <img src={akshay} alt="Akshay" />
                        <h3>Akshay</h3>
                        <p>AI/ML</p>
                    </div>
                    <div className="team-member">
                        <img src={jay} alt="Jay" />
                        <h3>Jay</h3>
                        <p>Front-End Developer</p>
                    </div>
                    <div className="team-member">
                        <img src={arnav} alt="Arnav" />
                        <h3>Arnav</h3>
                        <p>Front-End Developer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;