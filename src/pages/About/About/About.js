import React from "react";
import './css/main.css';
import { line } from "framer-motion/client";
import MeImage from './images/Me.png'

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false, // State to track hover
    };
  }

  render() {
    const { isHovered } = this.state; // Destructure isHovered from state

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
                <h3 className="font-x2 nospace"><b>Quick Facts</b></h3>
              </div>
              <ul className="nospace group services">
                <li className="one_third first">
                  <article>
                  <i className="fa fa-university"></i>
                    <h6 className="heading">Education</h6>
                    <p>⦿ Bachelor of Business/Information Technology <br></br>Monash University (2021 - 2021)<br></br><ul><li>Major in Accounting & Web Development</li></ul>⦿ Bachelor of Computer Science <br></br>Swinburne University (2022 - 2025)<ul><li>Major in Software Development & Internet of Things</li></ul></p>
                  </article>
                </li>
                <li className="one_third">
                  <article>
                    <i className="fa fa-heart"></i>
                    <h6 className="heading">Hobbies</h6>
                    <p>⦿ Boba <br></br>⦿ Eating Out<br></br>⦿ Reading Manga<br></br>⦿ Spending time with my Partner</p>
                  </article>
                </li>
                <li className="one_third">
                  <article>
                    <i className="fa fa-user"></i>
                    <h6 className="heading">Random Facts</h6>
                      <p>⦿ I drink an excessive amount of Coffee <br></br>⦿ I currently work at a Café on the Weekends <br></br>⦿ I am of Cantonese descent</p>
                  </article>
                </li>
              </ul>
              <div className="clear"></div>
            </main>
          </div>
        </div>

</div>
        

    );
  }
}

export default Info;
