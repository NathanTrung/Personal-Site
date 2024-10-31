import React from "react";
import './css/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt  } from '@fortawesome/free-solid-svg-icons'; 
import Nathan from './images/Nathan.png';
import Partner1 from './images/Linkedin.png';
import Partner2 from './images/Github.png';
import Partner3 from './images/Facebook.png';
import SwinburneLogo from './images/Swinburne.ico';
import Waving from './images/hello.png';
import AnimatedHeading from "../../components/animatedheading";

class Welcome extends React.Component { 
  
    render() { 
      
        return ( 


<div className="main">
<div class="wrapper bgded overlay">

  <div id="pageintro" class="hoc clear"> 
    <div class="one_half first">
      <h1 class="uppercase" style={{ paddingTop: "75px"}}><b>Nathan Trung</b></h1>
      <h2 className="heading" style={{fontWeight:"normal"}}>Computer Science Student <FontAwesomeIcon icon={faAt} style={{fontWeight:"normal"}}/> <br/> Swinburne University of Technology <a href="https://www.swinburne.edu.au/"><img src={SwinburneLogo} alt="Swinburne University Logo" className="logo button-press"/></a> </h2>
      <AnimatedHeading text = "Hi There! " imageSrc={Waving} delay={0.5}/>
      <p>Welcome to my personal website! I am currently pursuing a degree in Computer at Swinburne University. With strong proficiencies in Software & Web Development, Network administration, DevOps, and Game Development using Unity, I am dedicated to enhancing the Software Development Lifecycle.</p>
      <p>My focus is on Object-Oriented Programming (OOP) principles, emphasizing encapsulation, inheritance, and polymorphism to create modular, maintainable, and efficient software solutions.</p>
      <br></br>
      <p><a class="btn medium inverse button-press" href="/projects">Explore My Projects &raquo; </a></p>
    </div>
    <div class="one_half"><a href="/about"><img src={Nathan} alt="Chibi Nathan" className="button-press chibi"/></a></div>
    <AnimatedHeading text = "Testing 123" imageSrc={Waving} delay={0.5}/>
  </div>

  <div class="wrapper row3">

  <main class="hoc container clear"> 
    <div class="center btmspace-50" >
      <h3 class="font-x2 nospace" style = {{ marginBottom: '65px;'}}><b>Proficiencies</b></h3>
      <p class="nospace">Expertise in Modern Software Devevlopment & Technologies</p>
    </div>

    <ul class="nospace group services">
    <li className="one_third first">
        <article><i className="fa fa-atom"></i>
            <h6 className="heading">Frontend Development (React)</h6>
            <p>Proficient in building dynamic, responsive web applications using React. Skilled in component-based architecture, state management (Redux), and integrating modern UI/UX practices. <br></br>This Site was built using React!</p>
        </article>
    </li>

      <li className="one_third">
        <article><i className="fa fa-cubes"></i>
            <h6 className="heading">Object-Oriented Programming <br></br> (Java/C#/C++)</h6>
            <p>Proficient in designing modular and maintainable systems using Object-Oriented Programming principles in Java. Skilled in applying concepts like encapsulation, inheritance, and polymorphism to build scalable, reusable code. Experienced with frameworks like C#, Java, C++ & Python to implement OOP-based architectures in RESTful APIs and microservices.</p>
        </article>
    </li>

    <li className="one_third">
        <article><i className="fa fa-keyboard"></i>
            <h6 className="heading">Software Development <br></br>(C#)</h6>
            <p>Skilled in C# programming for developing a wide range of applications, including web, desktop, and games. Strong experience with .NET and Unity, focusing on creating efficient, high-performance code.&hellip;</p>
        </article>
    </li>

    </ul>
    <div class="clear"></div>
  </main>


</div>
    <div class="wrapper bgded overlay">
      <div class="hoc container clear"> 
        <div class="center btmspace-51">
        <h3 class="font-x2 nospace" style = {{ marginBottom: '65px;'}}><b>Connect With Me</b></h3>
        <p class="nospace">Collaborate with a Tech Enthusiast</p>
      </div>
    
      <ul class="nospace group elements" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0', margin: '0', listStyle: 'none' }}>
        <li class="one_third first" style={{marginTop: "55px"}}>
        <figure ><img class="Profile" src={Partner1} alt="" style={{marginBottom: '10px', width:"90%", marginLeft:"15px"}}/>
            <figcaption className="button-press" style={{ marginBottom: '23px' }}><a href="https://www.linkedin.com/in/nathan-trung/">LinkedIn</a></figcaption>
          </figure>
        </li>
        <li class="one_third" style={{paddingBottom:"10px"}}>
        <figure><img class="Profile" src={Partner2} alt="" style={{paddingTop:"25px"}}/>
            <figcaption className="button-press"><a href="https://github.com/NathanTrung">GITHUB</a></figcaption>
          </figure>
          
        </li>
       
        <li class="one_third">
          <figure ><img class="Profile"src={Partner3} alt=""  style={{  paddingTop:"60px", marginBottom: "10px;" }} />
            <figcaption className="button-press" style={{marginBottom:"50px"}}><a href="https://www.facebook.com/NaifanTrung">Facebook</a></figcaption>
          </figure>
        </li>
      </ul>
    </div>
  </div>
</div>

</div>

        );
    }
}
export default Welcome;