import user1 from "../assets/Group-3.svg";
import html from "../assets/Group.svg";
import javacript from "../assets/Group100.svg";
import vs from "../assets/Group109.svg";
import python from "../assets/Group-1.svg";
import jscript from "../assets/Group-2.svg";
import "../Styles/SkillsPage.scss";

const AllProjects = () => {
  return (
    <div className="allprojects" id="testimonials">
      <div className="container">
        <h2>My Services</h2>
        <span className="line">
          ...a glimpse of my acquired skills over the years and my proficiency
          in each
        </span>
        <br />
        <br />
        <ul className="skills-list">
            <li> <img src={python} alt="user1" /> </li>
            <li> <img src={jscript} alt="user1" /> </li>
            <li> <img src={user1} alt="user1" /> </li>
            <li> <img src={html} alt="user1" /> </li>
            <li> <img src={javacript} alt="user1" /> </li>
            <li> <img src={vs} alt="user1" /> </li>
        </ul>
       
        <div className="content">
          <div className="card">
          <div>
          <div className="skill-content">
              <p>Mobile App development using</p>
              <li>Xamarin</li>
              <li>ReactNative</li>
            </div>
            <hr />
            <div className="skill-content">

              <p>Desktop App development using</p>
              <li>WPF</li>
              <li>WinForms</li>
              <li>Avalonia</li>
            </div>
          </div>
           
         
          

            <hr />
            <div className="skill-content">
              <img src={user1} alt="user1" />
              <p>Web App development using</p>
              <li>ReactJs</li>
              <li>HTML5</li>
            </div>

            <hr />
            <div className="skill-content">
              <p>Data Analysist Skills</p>
              <li>ProgreSql</li>
              <li>Ms excel</li>
              <li>Python</li>
            </div>

            <hr />
            <div className="skill-content">
              <img src={user1} alt="user1" />
              <p>General Skills</p>
              <li>Javascript</li>
              <li>Vs code</li>
              <li>Visual studio</li>
              <li>Vite</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
