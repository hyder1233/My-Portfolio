import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import ReactTypingEffect from 'react-typing-effect';
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";

const About = () => {
  
  const handleDownload = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    document.body.removeChild(aTag);
    toast.success('CV downloaded successfully!');
  };

  return (
    <div className='about active'>
      <header className='h2 article-title'>About Me</header>
      <section className='featured-box about-text'>
        <div className="featured-text">
          <div className="hello">
            <p>Hello, I'm <strong className='strong'>Bilal Hyder</strong></p>
          </div>
          <p className="featured-name">
            <ReactTypingEffect
              text={['Full Stack Developer',' Coder',' Quick Learner']}
              speed={200}
              eraseSpeed={100}
              eraseDelay={1500}
              typingDelay={1000}
            />
          </p>
          <div className="text-info">
            <p>
              I am a Full Stack developer specializing in building high-performance, user-focused web applications. Skilled in
              ReactJS, NextJS, NestJS, Tailwind CSS and an expert in RESTful API, MongoDB and SQL
            </p>
          </div>
          <div className="text-btn">
            <Link to="/contact">
              <button className="btn hire-btn">Hire me</button>
            </Link>
            <button className="btn" onClick={() => handleDownload('https://drive.google.com/file/d/14D_aN1VIza1G5F5udfJwN848OozgmYVF/view?usp=drive_link')}>Download CV <i className="uil uil-file"></i></button>
          </div>
          <div className="social-icons">
            <div className="icon-circle"></div>

          <a href="https://www.linkedin.com/in/bhyder" target="_blank" rel="noopener noreferrer">
              <div className="icon"><FaLinkedin /></div>
              </a>

          <a href="https://github.com/hyder1233" target="_blank" rel="noopener noreferrer">
              <div className="icon"><FaGithub /></div>
            </a>

          <a href="mailto:bilalhyder1233@gmail.com">
            <div className="icon"><MdEmail /></div>
            </a>

          <a href="https://www.instagram.com/accounts/login" target="_blank" rel="noopener noreferrer">
            <div className="icon"><FaInstagram /></div>
            </a>
            
            </div>
        </div>
        <div className="featured-image">
          <img className="image" src="images/Avatar1.png" alt="avatar" />
        </div>
      </section>
    </div>
  );
}

export default About;
