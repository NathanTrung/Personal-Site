import React from "react";
import './css/main.css';
import MeImage from './images/Me.png';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // Import default styles
import StAlbans from './images/St-Albans.png'
import Monash from './images/Monash.png'
import Swinburne  from './images/Swinburne.png'


class About extends React.Component {

  render() {
   
    return (
      <div className="main">
        <div className="wrapper bgded overlay">
          <div id="pageintro2" className="hoc clear">
            <div className="one_half first">
              <h1 className="uppercase"><b>ABOUT ME</b></h1>
              <p>I'm a Software Developer based in Melbourne, Australia.</p>
              <p>Since 2021, I've been passionate about transforming complex challenges into elegant software solutions. When I'm not coding, you'll find me exploring the latest technologies, reading manga, cooking, playing soccer, or working out at the gym.</p>
              <p>Before I discovered my passion for developing software, I was immersed in the study of Business, with a particular focus on Accounting and Microeconomics. My early academic pursuits provided me with a solid foundation in analytical thinking and problem-solving, which eventually fueled my interest in leveraging technology to create innovative solutions. </p>
            </div>
            <div className="one_half"><a href="https://www.linkedin.com/in/nathan-trung/"><img src={MeImage} alt="Me" className="button-press"/></a></div>
          </div>
          <div className="wrapper row3">
  <main className="hoc container clear">
    <div className="center btmspace-50">
      <h3 className="font-x2 nospace"><b>My Academic Journey</b></h3>
    </div>
    <div className="my-story">
<VerticalTimeline>
<VerticalTimelineElement
  className="vertical-timeline-element--work"
  date="2020"
  iconStyle={{ background: 'rgb(56, 6, 16)', color: 'black', marginTop: "45px", marginRight:"15px" }} 
  icon={<img src={StAlbans} alt="Me" className="button-press"/>} 
  contentStyle={{ background: 'white', color: 'black' }} 
  contentArrowStyle={{ borderRight: '7px solid white' }} 
>
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <div style={{ flex: 1 }}>
      <h3 className="vertical-timeline-element-title">VCE Completed</h3>
      <h4 className="vertical-timeline-element-subtitle">St Albans Secondary College</h4>
      <p>
        At St Albans Secondary College, I focused on Legal Studies, Economics, Business, and Physical Education. <br />
        These subjects enhanced my analytical skills and fostered strategic thinking.
      </p>
    </div>
 
  </div>
</VerticalTimelineElement>


  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2021"
    iconStyle={{ background: 'rgb(0, 39, 67)', color: '#fff', marginTop: "45px" }} // Set a different color
    icon={<img src={Monash} alt="Me" className="button-press"/>} 
    contentStyle={{ background: 'white', color: 'black' }} // Set background color for content
    contentArrowStyle={{ borderRight: '7px solid white' }} // Customize arrow style
  >
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: 1 }}>
        <h3 className="vertical-timeline-element-title">Bachelor of Business/IT</h3>
        <h4 className="vertical-timeline-element-subtitle">Monash University</h4>
        <p>
          At Monash, I gained skills in Financial Accounting, Microeconomics, and Programming, laying a strong foundation for my future in technology and business.
        </p>
      </div>
 
    </div>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2022 - 2025"
    iconStyle={{ background: 'rgb(93, 12, 18)', color: '#fff', marginTop: "45px" }} // Another color example
    icon={<img src={Swinburne} alt="Me" className="button-press"/>} 
    contentStyle={{ background: 'white', color: 'black' }} // Set background color for content
    contentArrowStyle={{ borderRight: '7px solid white' }} // Customize arrow style
  >
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: 1 }}>
        <h3 className="vertical-timeline-element-title">Bachelor of Computer Science</h3>
        <h4 className="vertical-timeline-element-subtitle">Swinburne University</h4>
        <p>
          At Swinburne, I deepened my knowledge of technology and software development, strengthening my coding skills and exploring network administration.
        </p>
      </div>

    </div>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2024"
    iconStyle={{ background: 'rgb(93, 12, 18)', color: '#fff', marginTop: "45px" }} // Color for the last icon
    icon={<img src={Swinburne} alt="Me" className="button-press"/>} 
    contentStyle={{ background: 'white', color: 'black' }} // Set background color for content
    contentArrowStyle={{ borderRight: '7px solid white' }} // Customize arrow style
  >
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: 1 }}>
        <h3 className="vertical-timeline-element-title">Penultimate Year</h3>
        <h4 className="vertical-timeline-element-subtitle">Swinburne University</h4>
        <p>
          Focused on AI, algorithms, and game development, working on my capstone project, WhizKidTrains, while enhancing my web development skills.
        </p>
      </div>
      
    </div>

  </VerticalTimelineElement>
</VerticalTimeline>
</div>
  </main>
</div>




<div className="wrapper row3">
  <main className="hoc container clear">
    <div className="center btmspace-50">
      <h3 className="font-x2 nospace"><b>My Story</b></h3>
    </div>
    <div className="my-story">
      <p>
        Growing up in a low socioeconomic area and being of Cantonese descent shaped my aspirations. Witnessing the challenges in my community fueled my determination to create a better future.
      </p>
      <p>
        During my adolescence, I discovered a passion for technology, learning to navigate digital tools that became essential in everyday life. I realized that technology could break down barriers and create opportunities.
      </p>
      <p>
        This drive to develop solutions that address real-world problems led me to pursue a career in computer science, where I aim to leverage my skills to empower others and create innovative technologies that transform lives.
      </p>
    </div>
  </main>
</div>

        </div>

</div>
        

    );
  }
}

export default About;
