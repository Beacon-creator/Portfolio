import React from "react";
import "../Styles/SummaryPage.scss";
import linkedin from '../assets/LinkedIn1.svg'
import x from '../assets/LinkedIn.svg'
import send from '../assets/Send.svg'
import github from '../assets/github2.svg'
const SummaryPage = () => {
  return (
    <div className="summary">
      <div className="content">
        <h1>Hi, I'm a</h1>
        <div className="div-about">
          <p className="p1">
            Data engineer with an eye for detail and a passion for creating
            amazing digital experiences. I enjoy working on challenging projects
            that require problem-solving skills and creativity.
          </p>
          <hr />
          <p className="p2">
            Software Developer, and I create mobile, desktop and web apps. 
            I deal with both frontend and backend aspect of these apps. I derive joy in portraying the beauty and efficiency that you desire in your app.{" "}
          </p>
          <hr />
          <p className="p3">
            Data analyst, who excels in cracking datas for futher usage. 
            I possess a strong analysis sensibility,
             focusing on crafting catchy stories and visually appealing dashboard..{" "}
          </p>
        </div>

        <button href="/" className="button1">
          Contact me
          <img src={send} alt="" />
        </button>
      </div>
      <div className="Profile-Card">
        <div className="side-by-side">
        <div className="pic-name">
        <div className="circular-image"></div>
          <p className="p-name"> Olubukola Adebiyi</p>
        </div>
         
          <div className="left-side">        
            <div className="con-but">
              <button className="contact-button">
                <img src={x} alt="" />
              </button>
              <button className="contact-button">
                <img src={github} alt="" />
              </button>
              <button className="contact-button">
                <img src={linkedin} alt="" />
              </button>
            </div>

            <div className="my-stuff">
              <button className="download-cv"> Download CV</button>
              <button className="hire-me"> Hire Me</button>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default SummaryPage;
