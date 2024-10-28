import React, { useState } from "react";
import './css/projects.css';
import WhizKidTrainsLogo from './images/WhizKidTrains.png';
import SwinBullLogo from './images/SwinBullLogo.png';
import NAMoviesLogo from './images/NAMovies.png';
import InferenceEngineLogo from './images/InferenceEngine.png';
import SwinDevOpsLogo from './images/SwinDevOps.png'
import Circuit from './images/Circuit.png'

const projects = [
  {
      title: "WhizKidTrains",
      description: "WhizKidTrains is an educational platform designed specifically for autistic children, providing an interactive and structured learning environment. WhizKidTrains serves as a hub for future mini-games, with the platform ready to expand as more games are added. Each game will be tailored to accommodate neurodiverse learning styles, with accessible designs, clear guidance, and progressive difficulty to support learning and engagement." ,
      link: "https://github.com/NathanTrung/WhizKidTrains",
      image: WhizKidTrainsLogo,
      github: "https://github.com/NathanTrung/WhizKidTrains",
      linkedin: "https://www.linkedin.com/in/nathan-trung/overlay/projects/1011291046/multiple-media-viewer/?profileId=ACoAACPJEoUBovC5_011ORVOoAikFSu6079MQAk&treasuryMediaId=1729737992825",
      url: "https://whizkidtrains-proto.web.app/"
  },
  {
    title: "SwinBull",
    description: "SwinBull is a collaborative web application developed by students from Swinburne University of Technology using the React.js framework. This innovative platform allows users to explore and view various cryptocurrency assets by integrating the CoinGecko API. SwinBull aims to provide a valuable resource for cryptocurrency enthusiasts.",
    link: "https://github.com/NathanTrung/N-A-Movies",
    image: SwinBullLogo,
    github: "https://github.com/NathanTrung/SwinBull",
    linkedin: "https://www.linkedin.com/in/nathan-trung/details/projects/953206865/multiple-media-viewer/?profileId=ACoAACPJEoUBovC5_011ORVOoAikFSu6079MQAk&treasuryMediaId=1714645159244"
  },
  {
    title: "N/A Movies",
    description: "N/A-Movies is a PHP-based web application that provides users with an engaging platform to explore and review movies. This repository contains the source code, assets, and documentation required to set up and run the application. N/A-Movies is a PHP-based web application that provides users with an engaging platform to explore and review movies.",
    image: NAMoviesLogo,
    github: "https://github.com/NathanTrung/N-A-Movies",
    linkedin: "https://www.linkedin.com/in/nathan-trung/details/projects/953474251/multiple-media-viewer/?profileId=ACoAACPJEoUBovC5_011ORVOoAikFSu6079MQAk&treasuryMediaId=1714645426831"
  },
  {
    title: "Inference Engine",
    description: "This project implements various algorithms to check if a given query can be inferred from a set of logical clauses in a knowledge base. The engine processes a knowledge base of logical implications and a query to determine whether the query is entailed by the knowledge base using one of the specified inference methods.",
    image: InferenceEngineLogo,
    github: "https://github.com/NathanTrung/inference-engine",
},
{
  title: "SwinDevOps",
  description: "A project focused on automating a CI/CD Pipeline with Technologies such as; Docker, Jenkins, AWS (EC2). The objective of this project is to design, build & implement a functional DevOps pipeline that is able to automate processes for a simple static website.",
  image: SwinDevOpsLogo,
  github: "https://github.com/NathanTrung/swindevops",
},
{
    title: "Alarm Clock Circuitry",
    description: "An original logic circuit for a basic alarm clock. The interface displays time in 12-hour format, indication of AM/PM, and provide the facilities to set the time and an alarm. When the alarm is enabled, an alarm LED is turned on when the time is reached. ",
    image: Circuit,
    github: "https://github.com/NathanTrung/Alarm-Clock-Circuit",
  },
];

const Projects = () => {
  
    const [lightboxImage, setLightboxImage] = useState(null); // State for lightbox image

    const handleImageClick = (image) => {
        setLightboxImage(image); // Set the clicked image as the lightbox image
    };

    const handleCloseLightbox = () => {
        setLightboxImage(null); // Close the lightbox
    };

    return (
        <div className="projects-page">
            <h1 className="projects-title">My Projects</h1>
            <p className="projects-subtitle">Explore the work I've done in Software Development, Web Development, Game Development & A.I.</p>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="project-image button-press" 
                            onClick={() => handleImageClick(project.image)} // Open lightbox on click
                        />
                        <div className="project-info">
                            <h2 style={{fontWeight:"bold"}}>{project.title}</h2>
                            <p style={{fontWeight:"bolder",fontStyle:"italic"}}>{project.description}</p>
                        </div>
                        <div className="project-links">
                            {project.github && <a href={project.github} className="project-link button-press">GitHub</a>}
                            {project.linkedin && <a href={project.linkedin} className="project-link button-press">LinkedIn</a>}
                            {project.url && <a href={project.url} className="project-link button-press">Website</a>}
                        </div>
                    </div>
                ))}
            </div>

            {lightboxImage && ( // Lightbox conditionally rendered
                <div className="lightbox" onClick={handleCloseLightbox}>
                    <img src={lightboxImage} alt="Enlarged Project" className="enlarged-image button-press" />
                </div>
            )}
        </div>
    );
};

export default Projects;
