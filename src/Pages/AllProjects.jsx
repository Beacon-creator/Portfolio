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
           
              </div>
            </div>
          </div>

          <div className="pro-card">
            <div className="img-pro">
              <img src={pro1} alt="" />

              <h3> Social-account Interface</h3>
            </div>
            <hr />

            <div className="div-describe">
              <p className="cont">
                This is a simple social media account reference, it's a simple frontend design.
              </p>
              <div className="prev">
                <div className="div-link">
                  <img src={link} alt="" />
                  <li>
                    <a href="https://socialaccount.netlify.app/">preview</a>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className="pro-card">
            <div className="img-pro">
              <img src={pro1} alt="" />

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
                    <a href="https://portfolio-psi-inky-38.vercel.app/">preview</a>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className="pro-card">
            <div className="img-pro">
              <img src={pro2} alt="" />
              <h3> ShelterStride</h3>
            </div>
            <hr />

            <div className="div-describe">
              <p className="content-word">
                Here, I worked with a 3-man team of frontend developers to create the frontend design and api implementation.
              </p>
              <div className="prev">
                <div className="div-link">
                  <img src={link} alt="" />
                  <li>
                    <a href="https://sheltersstrides.netlify.app/">preview</a>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className="pro-card">
            <div className="img-pro">
              <img src={pro3} alt="" />
              <h3> Project 5</h3>
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
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
