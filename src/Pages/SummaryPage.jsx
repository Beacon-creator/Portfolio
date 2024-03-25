import React from "react";
import "../Styles/SummaryPage.scss";

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
            Software Developer, and I create apps like mobile, destop and web. 
            I deal with both frontend and backend aspect of these app. I derive joy in portraying the beauty that efficiency that you desire in your app.{" "}
          </p>
          <hr />
          <p className="p3">
            Data analyst with an eye for detail and a passion for creating
            amazing digital experiences. I enjoy working on challenging projects
            that require problem-solving skills and creativity.{" "}
          </p>
        </div>

        <button href="/" className="button">
          Contact me
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
              <button className="contact-button"></button>
              <button className="contact-button"></button>
              <button className="contact-button"></button>
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
