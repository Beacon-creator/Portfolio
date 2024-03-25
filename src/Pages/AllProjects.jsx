import pro1 from "../assets/Rectangle1.svg";
import pro2 from "../assets/Rectangle2.svg";
import pro3 from "../assets/Rectangle3.svg";
import link from "../assets/Link.svg";
import git from "../assets/Github.svg";
import "../Styles/AllProjects.scss";

const AllProjects = () => {
  return (
    <div className="allprojects" id="testimonials">
      <div className="container">
        <h2>Projects Showcase</h2>
        <div className="card">
          <div className="pro-card">
            <div className="img-pro">
              <img src={pro1} alt="" />

              <h3> Project 1</h3>
            </div>
            <hr />

            <div className="div-describe">
              <p className="cont">
                This is a sample project discription about this website what did
                you do and it’s usage
              </p>
              <div className="prev">
                <div className="div-link">
                  <img src={link} alt="" />
                  <li>
                    <a href="/">preview</a>
                  </li>
                </div>
                <div className="div-link">
                  <img src={git} alt="" />
                  <li>
                    <a href="/">see codes</a>
                  </li>
                </div>
              </div>
            </div>
          </div>

          <div className="pro-card">
            <div className="img-pro">
              <img src={pro1} alt="" />

              <h3> Project 1</h3>
            </div>
            <hr />

            <div className="div-describe">
              <p className="cont">
                This is a sample project discription about this website what did
                you do and it’s usage
              </p>
              <div className="prev">
                <div className="div-link">
                  <img src={link} alt="" />
                  <li>
                    <a href="/">preview</a>
                  </li>
                </div>
                <div className="div-link">
                  <img src={git} alt="" />
                  <li>
                    <a href="/">see codes</a>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className="pro-card">
            <div className="img-pro">
              <img src={pro1} alt="" />

              <h3> Project 1</h3>
            </div>
            <hr />

            <div className="div-describe">
              <p className="cont">
                This is a sample project discription about this website what did
                you do and it’s usage
              </p>
              <div className="prev">
                <div className="div-link">
                  <img src={link} alt="" />
                  <li>
                    <a href="/">preview</a>
                  </li>
                </div>
                <div className="div-link">
                  <img src={git} alt="" />
                  <li>
                    <a href="/">see codes</a>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className="pro-card">
            <div className="img-pro">
              <img src={pro2} alt="" />
              <h3> Project 2</h3>
            </div>
            <hr />

            <div className="div-describe">
              <p className="cont">
                This is a sample project discription about this website what did
                you do and it’s usage
              </p>
              <div className="prev">
                <div className="div-link">
                  <img src={link} alt="" />
                  <li>
                    <a href="/">preview</a>
                  </li>
                </div>
                <div className="div-link">
                  <img src={git} alt="" />
                  <li>
                    <a href="/">see codes</a>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className="pro-card">
            <div className="img-pro">
              <img src={pro3} alt="" />
              <h3> Project 3</h3>
            </div>
            <hr />

            <div className="div-describe">
              <p className="cont">
                This is a sample project discription about this website what did
                you do and it’s usage
              </p>
              <div className="prev">
                <div className="div-link">
                  <img src={link} alt="" />
                  <li>
                    <a href="/">preview</a>
                  </li>
                </div>
                <div className="div-link">
                  <img src={git} alt="" />
                  <li>
                    <a href="/">see codes</a>
                  </li>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
