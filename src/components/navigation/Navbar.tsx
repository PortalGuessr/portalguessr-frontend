import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import { LINK_SIZE } from "./_Navbar";
import { LOGO_WIDTH } from "./_Navbar";
import { BRAND_BACKGROUND_COLOR } from "./_Navbar";

const Navbar = () => {
  return (
    <nav className="p-2 d-flex justify-content-between align-items-center gap-2 border-bottom border-light">
      <div style={LINK_SIZE}>
        <Link
          to="/user"
          className="bi bi-person-circle mx-1 mx-md-2 text-pg-light"
          title="User profile"
        ></Link>
        <Link
          to="/about"
          className="bi bi-question mx-1 mx-md-2 text-pg-primary"
          title="About PortalGuessr"
        ></Link>
      </div>
      <div>
        <Link
          to="/"
          className="text-decoration-none d-flex gap-1 align-items-center"
        >
          <img
            src={logo}
            alt="PortalGuessr's logo"
            className="align-text-top rounded d-none d-sm-inline"
            style={LOGO_WIDTH}
          />
          <span className="fs-4 fw-bold" style={BRAND_BACKGROUND_COLOR}>
            PortalGuessr
          </span>
        </Link>
      </div>
      <div style={LINK_SIZE}>
        <Link
          to="/stats"
          className="bi bi-graph-up mx-1 mx-md-2 text-pg-accent"
          title="User statistics"
        ></Link>
        <Link
          to="/setting"
          className="bi bi-gear-fill mx-1 mx-md-2 text-pg-light"
          title="Game setting"
        ></Link>
      </div>
    </nav>
  );
};

export default Navbar;
