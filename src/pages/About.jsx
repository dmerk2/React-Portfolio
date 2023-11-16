import { Link } from "react-router-dom";
import profilePic from "../assets/dan1.png";
import "../styles/About.css";

const About = () => {
  return (
    <>
      <div className="dark-bg p-5">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center">
              <h1 className="mb-4">Welcome to My Portfolio</h1>
              <p className="lead">
                Hi, I am Daniel Merkin, a passionate web developer with
                expertise in building modern and responsive web applications.
              </p>
              <p className="lead">
                Explore my work in the{" "}
                <Link to="/portfolio" className="text-primary">
                  Portfolio
                </Link>{" "}
                section or get in touch via the{" "}
                <Link to="/contact" className="text-primary">
                  Contact
                </Link>{" "}
                page.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 about-section">
        <h1 className="mb-4 text-center">About Me</h1>
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <img
              src={profilePic}
              alt="Daniel Merkin"
              className="img-fluid rounded-circle profile-image"
            />
          </div>
          <div className="col-md-6">
            <p className="lead">
              Welcome! I am a dedicated web developer with a genuine passion for
              problem-solving and a profound curiosity about how technology
              shapes our world. In collaborative environments, I thrive, viewing
              each project as a canvas for creativity and innovation.
            </p>
            <p className="lead">
              My journey in technology has been an exciting exploration of
              emerging trends. I find joy in staying abreast of the latest
              technologies and eagerly embracing upcoming innovations.
              Throughout my 34 years, I have come to appreciate the profound
              impact even small actions can have in making the world a better
              place.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
