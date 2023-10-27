import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="my-4 mx-2 text-center">
      <h2>404</h2>
      <p className="lead">Page not found!</p>
      <span>
        Go back to <Link to="/">home page</Link>
      </span>
    </section>
  );
};

export default NotFound;
