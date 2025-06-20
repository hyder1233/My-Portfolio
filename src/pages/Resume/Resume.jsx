import { useEffect } from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import TimelineItem from './TimeLineItem';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Resume = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="skill" data-aos="fade-up">
        <h3 className="h3 skills-title">My skills</h3>
        <div className="skills-grid">
          <div className="skill-box"><i className="devicon-javascript-plain colored"></i><span>JavaScript</span></div>
          <div className="skill-box"><i className="devicon-react-original colored"></i><span>React JS</span></div>
          <div className="skill-box"><i className="devicon-nextjs-original"></i><span>Next JS</span></div>
          <div className="skill-box"><i className="devicon-nodejs-plain colored"></i><span>Nest JS</span></div>
          <div className="skill-box"><i className="devicon-tailwindcss-plain colored"></i><span>Tailwind CSS</span></div>
          <div className="skill-box"><i className="devicon-git-plain colored"></i><span>Git</span></div>
          <div className="skill-box"><i className="devicon-graphql-plain colored"></i><span>RESTful API</span></div>
          <div className="skill-box"><i className="devicon-mongodb-plain colored"></i><span>MongoDB</span></div>
          <div className="skill-box"><i className="devicon-mysql-plain colored"></i><span>SQL</span></div>
          <div className="skill-box"><i className="devicon-dotnetcore-plain colored"></i><span>ASP.NET Core</span></div>
          <div className="skill-box"><i className="devicon-csharp-plain colored"></i><span>C#</span></div>
          <div className="skill-box"><i className="devicon-java-plain colored"></i><span>Java</span></div>
          <div className="skill-box"><i className="devicon-python-plain colored"></i><span>Python</span></div>
        </div>
      </div>

      <div className="timeline" data-aos="fade-up">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Software Developer Intern, Ramaera Legal Infotech Pvt Ltd"
            date="Dec 2024 – May 2025"
            description={
              <>
                Built a multi-division platform with the team using <strong>Next.js</strong>, <strong>NestJS</strong>, and <strong>MongoDB</strong> with a secure admin panel. <br />
                Developed scalable <strong>RESTful APIs</strong> and integrated dynamic content to create a <strong>responsive</strong> and <strong>SEO-friendly</strong> frontend using <strong>Tailwind CSS</strong>.
              </>
            }
          />
          <TimelineItem
            title="Full Stack Developer Intern, Robustresults Pvt Ltd (IIT Kanpur Incubated)"
            date="Feb 2022 – March 2022"
            description={
              <>
                Built <strong>Skill Check</strong> – an interactive online course-selling platform. <br />
                Developed admin and user panels using <strong>C#</strong>, <strong>ASP.NET MVC</strong>, <strong>Bootstrap</strong>, and <strong>MS SQL Server</strong> in collaboration with the team.
              </>
            }
          />
        </ol>
      </div>

      <div className="timeline" data-aos="fade-up">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Bachelor of Technology (B-Tech) in Computer Science and Engineering, Greater Noida, Uttar Pradesh (India)"
            date="2020 — 2024"
            description={
              <>
                CGPA: 7.2 <br />
                Specialization: Artificial Intelligence
              </>
            }
          />
          <TimelineItem
            title="12th Standard, Govt. Boys Higher Secondary School Soura, Srinagar J&K"
            date="2019 — 2020"
            description="Score: 72.4%"
          />
          <TimelineItem
            title="High School, Shaheen Public High School Zadibal, Srinagar J&K"
            date="2017 — 2018"
            description="Score: 65.2%"
          />
        </ol>
      </div>

      <div className="timeline" data-aos="fade-up">
        <div className="title-wrapper">
          <div className="icon-box">
            <GrCertificate />
          </div>
          <h3 className="h3">Achievements & Certifications</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Full Stack Development Certification"
            date="March 23, 2022"
            certificateLink="https://drive.google.com/file/d/1Ur1F6u6HTwfI3AAn2XRQZOBez1qBXCC2/view?usp=drive_link"
            description="Successfully completed the Full Stack Development certification offered by IIT Kanpur Technology (Prutor@IITK), covering HTML5, CSS3, JavaScript, Bootstrap, PHP, and MySQL."
          />
          <TimelineItem
            title="Artificial Intelligence for Engineering Certification"
            date="August 28, 2021"
            certificateLink="https://drive.google.com/file/d/1feGZ-JrHYTeSvv7EJCp3q1TGCLew9Gl9/view?usp=drive_link"
            description="Successfully completed the 'Artificial Intelligence for Engineering' certification course offered by E & ICT Academy, IIT Kanpur (a joint initiative of MeitY and IIT Kanpur)."
          />
          <TimelineItem
            title="Advanced Python Programming for Problem Solving Certification"
            date="Nov 10, 2022 – Dec 15, 2022"
            certificateLink="https://drive.google.com/file/d/1fsg6W80aZKxukVFofOwFDOVZEBXhnbAA/view?usp=drive_link"
            description="Successfully completed a 4-week (40 hours) training program on 'Advanced Python Programming for Problem Solving', organized by RCPL India in collaboration with Hewlett Packard, NASSCOM, EC-Council (Accredited Training Center), and Oracle. Conducted at IIMT College of Engineering, Greater Noida."
          />
          <TimelineItem
            title="Cybersecurity Essentials Certification"
            date="February 6, 2022"
            certificateLink="https://drive.google.com/file/d/1V3GS_01hHwr8zG0gGrDCfjE4AWGwj15v/view?usp=drive_link"
            description="Completed the Cybersecurity Essentials course by Cisco Networking Academy, covering core principles of data protection, cybersecurity techniques, technologies, and related laws."
          />
          <TimelineItem
            title="Java Core Technology Certification"
            date="Sep 24, 2022 – Dec 24, 2022"
            certificateLink="https://drive.google.com/file/d/1fxnV1Ib5hS8USuacAe1AulZxSUPG00VX/view?usp=drive_link"
            description="Completed the Java Core Technology Program with strong commitment and technical focus, conducted at IIMT College of Engineering."
          />
        </ol>
      </div>
    </section>
  );
};

export default Resume;