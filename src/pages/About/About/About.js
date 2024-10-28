import React from "react";
import './css/main.css';
import { line } from "framer-motion/client";
import MeImage from './images/Me.png';
import { Chrono } from 'react-chrono';


class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false, // State to track hover
    };
  }

  render() {
    const { isHovered } = this.state; // Destructure isHovered from state
    // Define timeline items
    const items = [
      {
        title: "2020",
        cardTitle: "VCE Completion",
        cardSubtitle: "St Albans Secondary College",
        cardDetailedText:<div style={{backgroundColor:"white"}}>At St Albans High School, my VCE studies focused on Legal Studies, Economics, Business, and Physical Education, shaping my understanding of essential concepts and practical applications.<br></br>
        In Legal Studies, I explored the legal system and the principles of justice, enhancing my analytical skills. Economics introduced me to market operations, supply and demand, and the effects of government policies, sparking my interest in economic decision-making.<br></br>
        The Business subject provided insights into management, marketing, and entrepreneurship, fostering strategic thinking. Meanwhile, Physical Education emphasized the significance of health and fitness, teaching me about teamwork and the benefits of an active lifestyle.<br></br>
        Overall, my VCE experience at St Albans High School developed a well-rounded skill set that combines analytical thinking, economic reasoning, business knowledge, and an appreciation for health and fitness, all of which continue to benefit my academic and personal growth.</div>, 
        image: "./images/Swinburne.png",
      },
      {
        title: "2021",
        cardTitle: "Bachelor of Business/Information Technology",
        cardSubtitle: "Monash University",
        cardDetailedText:<div style={{backgroundColor:"white"}}>During my year at Monash University, I explored the dynamic fields of Business and Information Technology, gaining essential skills and knowledge.<br></br>
        In Financial Accounting, I learned the conceptual framework guiding financial statements and their significance in decision-making. The Microeconomics unit focused on supply and demand, consumer behavior and market structures, culminating in advanced topics like game theory and behavioral economics.<br></br>
        The Introduction to Programming unit provided a solid foundation in coding, covering the Object Orientated Programming Principles, data handling and essential programming concepts like class inheritance and interfaces. In Web Development, I gained insights into the technologies behind web applications, focusing on the practical challenges of design and implementation in real-world scenarios.<br></br>
        Overall, my time at Monash was transformative, equipping me with a strong foundation for my future endeavors in the intersection of technology and business.</div>, 
        image: "./images/Swinburne.png",
      },
      {
        title: "2022 - 2025",
        cardTitle: "Started Bachelor of Computer Science",
        cardSubtitle: "Swinburne University",
        cardDetailedText:<div style={{backgroundColor:"white"}}>My transition to Swinburne University marked a significant step in my academic journey as I pursued a Computer Science degree. The shift allowed me to delve deeper into the intricacies of technology and software development, building on the foundational knowledge I gained at Monash University.<br></br>
        At Swinburne, I embraced a curriculum rich in practical applications and theoretical frameworks. Courses in Object-Oriented Programming strengthened my coding skills and emphasized best practices for software design. I also explored advanced topics in network administration, which ignited my interest in how systems communicate and interact in a connected world.<br></br>
        The collaborative environment at Swinburne fostered teamwork and innovation, enabling me to engage in various projects and develop my problem-solving abilities. I appreciated the focus on real-world applications, which equipped me with the tools to tackle complex challenges in software development and IT.<br></br>
        Overall, my time at Swinburne has been transformative, providing me with a robust foundation in Computer Science and preparing me for a successful career at the intersection of technology and innovation.</div>, 
        image: "./images/Swinburne.png",
      },
      {
        title: "2024",
        cardTitle: "Penultimate Year",
        cardSubtitle: "Swinburne University",
        cardDetailedText:<div style={{backgroundColor:"white"}}>In my penultimate year at university, I immersed myself in advanced topics like AI, algorithms, and game development. My exploration of inference engines and tree-based sorting algorithms deepened my understanding of how AI can process information and make decisions efficiently. I also focused on algorithms and data structures, which equipped me with the essential skills to analyze and optimize code for performance.<br></br>
        Additionally, I expanded my technical skills through network administration, learning how to manage and maintain network systems effectively. A significant highlight of my year was my year-long capstone project, WhizKidTrains, where I applied my knowledge of game development to create an engaging and educational platform designed for children.<br></br>
        Throughout the year, I completed multiple websites, further enhancing my web development skills and understanding of user experience. This diverse range of experiences has not only solidified my technical foundation but also prepared me for future challenges in the rapidly evolving tech landscape.Throughout the year, I completed multiple websites, further enhancing my web development skills and understanding of user experience. This diverse range of experiences has not only solidified my technical foundation but also prepared me for future challenges in the rapidly evolving tech landscape.<br></br>
        </div>, 
        image: "./images/Swinburne.png",cardSubtitle: "Swinburne University",
      },
    ];
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


              <div className="chrono-section" style={{ marginTop: "2rem" }}>
  <h3 className="font-x2 nospace center backgroundEasy"><b className="backgroundEasy">My Academic Journey</b></h3>
  <Chrono
    items={items}
    mode="VERTICAL_ALTERNATING"
    hideControls="true"  // Hides the navigation controls
    theme={{
      primary: "black",
      secondary: "white",
      cardBgColor: "white",
      cardForeColor: "black",
      titleColor: "black",
      backgroundColor: "white",
      iconBackgroundColor: "white"
    }}

    itemWidth={500}  // Adjust width for better alternating layout
    style={{ width: "100%", overflow: "auto" }} // Ensures proper fit
    lineColor="gray"  // Color of the connecting line
    activeItemIndex={0} // Sets the first item as active to show details automatically
    itemRenderer={({ item }) => (
      <div>
        <img src={item.image} alt={item.cardTitle} style={{ width: '100%', borderRadius: '10px' }} />
        <h4>{item.cardTitle}</h4>
        <h5>{item.cardSubtitle}</h5>
        <p>{item.cardDetailedText}</p>
      </div>
    )}
    />
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
