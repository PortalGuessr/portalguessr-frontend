import { Link } from "react-router-dom";
import History from "../components/history/History";

const Stats = () => {
  return (
    <>
      <Link to="/" className="text-decoration-none">
        <i className="bi bi-arrow-left"></i> Back
      </Link>
      <History />
    </>
  );
};

export default Stats;
