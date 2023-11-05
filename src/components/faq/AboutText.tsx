const AboutText = () => {
  return (
    <section className="my-4 mx-2">
      <div>
        <h3 className="text-center">🤔 About PortalGuessr</h3>
        <p>
          PortalGuessr is a quiz game to test your knowledge about Portal.
          Previously a Discord bot, now come as a web app!
        </p>
      </div>
      <hr />
      <div>
        <h5>🎮 How To Play?</h5>
        <p>
          There are 10 rounds in a single game.
          <br />
          <br />
          You have to guess with entering a valid chamber number.
          <br />
          <br />
          Try to finish the game before the timer runs out.
          <br />
          <br />
          Don't forget there are difficulty modifiers you can use to spice up
          your game!
        </p>
      </div>
      <hr />
      <div>
        The design of this website is inspired by{" "}
        <a target="_blank" href="https://worldle.teuteuf.fr/">
          Worldle
        </a>
        , be sure to check them out!
      </div>
      <hr />
      <div>
        <h5>👉 Credits</h5>
        <ul>
          <li>Worldle for the design inspiration.</li>
          <li>Goodigo for liking every tweet I made about PortalGuessr.</li>
          <li>Everyone for beta testing the game!</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutText;
