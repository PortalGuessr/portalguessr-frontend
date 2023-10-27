import { Link } from "react-router-dom";
import Faq from "../components/faq/Faq";
import AboutText from "../components/faq/AboutText";

const About = () => {
  return (
    <>
      <Link to="/" className="text-decoration-none">
        <i className="bi bi-arrow-left"></i> Back
      </Link>
      <AboutText />
      <Faq />
    </>
  );
};

export default About;
