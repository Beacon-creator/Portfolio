import user1 from "../assets/Group-3.svg";
import html from "../assets/Group.svg";
import javacript from "../assets/Group100.svg";
import vs from "../assets/Group109.svg";
import python from "../assets/Group-1.svg";
import jscript from "../assets/Group-2.svg";
import vite from "../assets/vite.svg";
import nextjs from "../assets/nextjs.svg";
import rn from "../assets/reactnative.svg";
import "../Styles/SkillsPage.scss";

const AllProjects = () => {
  return (
    <div className="skills-page" id="skills">
      <div className="container">
      <hr />
      <br />
        <h2>My Services</h2>
        <div className="space">
          <div>
            <span className="line">... tools that I use</span>

            <ul className="skills-list">
              <li>
                {" "}
                <img src={python} alt="user1" />{" "}
              </li>
              <li>
                {" "}
                <img src={jscript} alt="user1" />{" "}
              </li>
              <li>
                {" "}
                <img src={user1} alt="user1" />{" "}
              </li>
              <li>
                {" "}
                <img src={html} alt="html" />{" "}
              </li>
              <li>
                {" "}
                <img src={javacript} alt="js" />{" "}
              </li>
              <li>
                {" "}
                <img src={vs} alt="visualstudio" />{" "}
              </li>
              <li>
                {" "}
                <img src={rn} alt="reactnative" />{" "}
              </li>
              <li>
                {" "}
                <img src={vite} alt="vite" />{" "}
              </li>

              <li>
                {" "}
                <img src={vite} alt="vite" />{" "}
              </li>
            </ul>
          </div>

          <div className="lang">
            <span className="line2">... languages that I speak</span>
            <br />
            <ol className="llist">
              <li>English</li>
              <li>French</li>
              <li>Yoruba</li>
            </ol>
          </div>
        </div>


          <div className="card">
              <div className="skill-content">
                <p className="ppit">IT Skills</p>
                <hr />
                <br />
                <div className="div-skills">
                  <div className="div-one">
                    <div className="circle-skills">Frontend Development</div>
                    <div className="circle-skills">Data Processing</div>
                    <div className="circle-skills">Responsive website</div>
                  </div>
                  <br />
                  <div className="div-one">
                  <div className="circle-skills">Mobile-App Development</div>
                    <div className="circle-skills">Data Visualization</div>
                    <div className="circle-skills">Problem Solving</div>
                  </div>

                  <br />
                  <div className="div-one">
                    <div className="circle-skills">SQL Programming</div>
                    <div className="circle-skills">Team Work</div>
                    <div className="circle-skills">API Implementation</div>
                  </div>

                  <br />
                  <div className="div-one">
                  <div className="circle-skills">Data Analysis</div>
                  <div className="circle-skills">Desktop-App development</div>
                    <div className="circle-skills">Backend Development</div>
                    <div className="circle-skills">Data Storytelling</div>
                  </div>
                </div>
            </div>

            <hr />
            <div className="skill-content">
              <p className="ppit">What I can do</p>
              <hr />
              <br />
              <div>
                <li className="name-list">App Development</li>
                <p>I can replicate design that will be aestheically pleasing.</p>
                <p>I can implement backend APIs.</p>
              </div>
              <div>
                <li className="name-list">Data Analysis</li>
                <p>I can import and clean data.</p>
                <p>I can analyze data and draw out conclusions for future reference.</p>
              </div>
              <div>
                <li className="name-list">Data Engineering</li>
                <p>I can design a database.</p>
                <p>I can implement backend APIs.</p>
              </div>
            </div>
          </div>

      </div>
    </div>
  );
};

export default AllProjects;
