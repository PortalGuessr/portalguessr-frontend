import { Link } from "react-router-dom";

const User = () => {
  return (
    <>
      <Link to="/" className="text-decoration-none">
        <i className="bi bi-arrow-left"></i> Back
      </Link>
      <section className="my-4 mx-2">
        <h4 className="text-center">
          🚧 This feature is under construction 🚧
        </h4>
      </section>
    </>
  );
};

export default User;
