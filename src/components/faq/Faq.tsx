const Faq = () => {
  return (
    <section className="my-4 mx-2">
      <h3 className="text-center">❓ F.A.Q.</h3>
      <ul className="list-group list-group-flush">
        <li className="list-group-item bg-pg-dark bg-opacity-25">
          <h6 className="text-pg-primary">
            Is PortalGuessr available as a mobile app?
          </h6>
          <span className="text-pg-light">
            No, at least not currently, as that would require a lot of
            components to be migrated to function as a native mobile
            application.
          </span>
        </li>

        <li className="list-group-item bg-pg-dark bg-opacity-25">
          <h6 className="text-pg-primary">
            Is the code for PortalGuessr open-source?
          </h6>
          <span className="text-pg-light">
            Yes 100% of the code! Both the front-end and back-end of
            PortalGuessr is available on GitHub.
          </span>
        </li>

        <li className="list-group-item bg-pg-dark bg-opacity-25">
          <h6 className="text-pg-primary">
            What are the tech-stacks for PortalGuessr?
          </h6>
          <span className="text-pg-light">
            I use React for the front-end and Express for the back-end. As for
            UI specifically I use React-Bootstrap for ease of integration
            between React and Bootstrap, Bootstrap icons for you've guessed
            it... icons, and React-Router for seamless navigation between pages.
          </span>
        </li>

        <li className="list-group-item bg-pg-dark bg-opacity-25">
          <h6 className="text-pg-primary">
            Can I submit more images to PortalGuessr?
          </h6>
          <span className="text-pg-light">
            Yes, join the Discord server then navigate to{" "}
            <i>#image-submissions</i> for submitting images.
          </span>
        </li>
      </ul>
    </section>
  );
};

export default Faq;
